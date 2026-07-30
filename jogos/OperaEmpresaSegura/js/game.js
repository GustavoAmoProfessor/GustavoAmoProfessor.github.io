
const config = JSON.parse(localStorage.getItem('empresaSeguraConfig') || '{}');
if (!config.team) location.href = 'index.html';

const difficultyMap = {
  treino: {p1:80,p2:95,p3:20,label:'Treino'},
  operacional: {p1:60,p2:75,p3:15,label:'Operacional'},
  auditoria: {p1:45,p2:60,p3:10,label:'Auditoria'}
};

const game = {
  score:0,
  lives:3,
  streak:0,
  bestStreak:0,
  phaseScores:{phase1:0,phase2:0,phase3:0,phase4:0},
  sound: config.sound !== false,
  ended:false
};

document.getElementById('teamLabel').textContent = config.team;
document.getElementById('soundBtn').textContent = game.sound ? '🔊' : '🔇';

const screens = [...document.querySelectorAll('.screen')];
function showScreen(id){
  screens.forEach(s => s.classList.toggle('active', s.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
function setPhase(n){
  document.getElementById('phaseHud').textContent = `${n}/4`;
}
function updateHud(){
  document.getElementById('scoreHud').textContent = game.score;
  document.getElementById('streakHud').textContent = `${game.streak}x`;
  document.getElementById('livesHud').textContent = '❤'.repeat(Math.max(0,game.lives)) + '♡'.repeat(Math.max(0,3-game.lives));
}
function toast(message,type='good'){
  const el=document.getElementById('toast');
  el.textContent=message;
  el.className=`toast show ${type}`;
  clearTimeout(el._t);
  el._t=setTimeout(()=>el.className='toast',1400);
}
function tone(freq=600,duration=.08,type='sine'){
  if(!game.sound) return;
  try{
    const ctx = tone.ctx || (tone.ctx = new (window.AudioContext||window.webkitAudioContext)());
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.type=type;osc.frequency.value=freq;
    gain.gain.setValueAtTime(.05,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start();osc.stop(ctx.currentTime+duration);
  }catch(e){}
}
function correct(points,phase){
  const multiplier = 1 + Math.min(game.streak,5)*.1;
  const gained = Math.round(points*multiplier);
  game.score += gained;
  game.phaseScores[phase] += gained;
  game.streak++;
  game.bestStreak=Math.max(game.bestStreak,game.streak);
  updateHud();tone(760,.09,'triangle');toast(`+${gained} pontos`,'good');
}
function wrong(message='Decisão incorreta'){
  game.lives--;
  game.streak=0;
  updateHud();tone(170,.16,'sawtooth');toast(message,'bad');
  if(game.lives<=0 && !game.ended){
    game.ended=true;
    setTimeout(()=>finishGame(true),900);
  }
}
function countdown(elId,seconds,onEnd){
  const el=document.getElementById(elId);
  let remain=seconds;
  el.textContent=remain;
  const id=setInterval(()=>{
    remain--;
    el.textContent=Math.max(0,remain);
    if(remain<=0){clearInterval(id);onEnd();}
  },1000);
  return ()=>clearInterval(id);
}

document.getElementById('soundBtn').addEventListener('click',()=>{
  game.sound=!game.sound;
  document.getElementById('soundBtn').textContent=game.sound?'🔊':'🔇';
  tone(500);
});
document.getElementById('beginBtn').addEventListener('click',()=>{
  showScreen('phase1');setPhase(1);startPhase1();
});

// FASE 1
let p1Started=false;
function startPhase1(){
  if(p1Started) return;p1Started=true;
  const risks=new Set();
  const total=6;
  let stopTimer = countdown('timer1', difficultyMap[config.difficulty].p1, ()=>{
    if(risks.size<total){
      document.getElementById('phase1Message').textContent='Tempo encerrado. As falhas restantes foram registradas como não identificadas.';
      setTimeout(()=>{showScreen('phase2');setPhase(2);startPhase2();},1400);
    }
  });

  document.querySelectorAll('#factoryScene .hotspot').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(btn.classList.contains('found')||btn.classList.contains('mistake')) return;
      if(btn.dataset.risk){
        btn.classList.add('found');
        risks.add(btn.dataset.risk);
        correct(8,'phase1');
        document.getElementById('foundCount').textContent=`${risks.size}/${total}`;
        document.getElementById('phase1Message').textContent='Não conformidade registrada.';
        if(risks.size===total){
          stopTimer();
          correct(12,'phase1');
          document.getElementById('phase1Message').textContent='Varredura concluída. Todas as falhas foram encontradas.';
          setTimeout(()=>{showScreen('phase2');setPhase(2);startPhase2();},1300);
        }
      }else{
        btn.classList.add('mistake');
        wrong('Esse elemento está em condição adequada');
        setTimeout(()=>btn.classList.remove('mistake'),650);
      }
    });
  });
}

// FASE 2
const wastes = [
  {icon:'📄',name:'Papel limpo',hint:'Sem contaminação',bin:'papel'},
  {icon:'🧴',name:'Garrafa plástica limpa',hint:'Embalagem vazia',bin:'plastico'},
  {icon:'🥫',name:'Lata de alumínio',hint:'Limpa e sem resíduo perigoso',bin:'metal'},
  {icon:'🍎',name:'Restos de alimento',hint:'Resíduo biodegradável',bin:'organico'},
  {icon:'🛢️',name:'Pano com óleo',hint:'Material contaminado',bin:'perigoso'},
  {icon:'💡',name:'Lâmpada fluorescente',hint:'Exige manejo específico',bin:'perigoso'},
  {icon:'🧪',name:'Embalagem química',hint:'Ainda contém resíduo',bin:'perigoso'},
  {icon:'📦',name:'Caixa de papelão',hint:'Limpa e seca',bin:'papel'},
  {icon:'🛍️',name:'Filme plástico',hint:'Limpo e separável',bin:'plastico'},
  {icon:'🔩',name:'Limalha metálica',hint:'Sem contaminação química',bin:'metal'}
];
let wasteOrder=[], wasteIndex=0, selectedWaste=false, p2Started=false, p2Locked=false;
function startPhase2(){
  if(p2Started) return;p2Started=true;
  wasteOrder=[...wastes].sort(()=>Math.random()-.5);
  renderWaste();
  const stop=countdown('timer2',difficultyMap[config.difficulty].p2,()=>{
    if(wasteIndex<wasteOrder.length){
      document.getElementById('phase2Message').textContent='Tempo encerrado. Os itens restantes não foram classificados.';
      setTimeout(()=>{showScreen('phase3');setPhase(3);startPhase3();},1300);
    }
  });
  startPhase2.stop=stop;
}
function renderWaste(){
  if(wasteIndex>=wasteOrder.length){
    if(startPhase2.stop) startPhase2.stop();
    correct(10,'phase2');
    document.getElementById('phase2Message').textContent='Esteira finalizada.';
    setTimeout(()=>{showScreen('phase3');setPhase(3);startPhase3();},1200);
    return;
  }
  const item=wasteOrder[wasteIndex];
  const card=document.getElementById('wasteCard');
  card.className='waste-card enter';
  document.getElementById('wasteIcon').textContent=item.icon;
  document.getElementById('wasteName').textContent=item.name;
  document.getElementById('wasteHint').textContent=item.hint;
  document.getElementById('wasteProgress').textContent=`${wasteIndex}/${wasteOrder.length}`;
  p2Locked=false;selectedWaste=true;
}
function chooseBin(bin,binEl){
  if(!selectedWaste||p2Locked||game.ended) return;
  p2Locked=true;
  const item=wasteOrder[wasteIndex];
  const card=document.getElementById('wasteCard');
  if(bin===item.bin){
    binEl.classList.add('good');
    card.classList.add('exit-right');
    correct(8,'phase2');
    document.getElementById('phase2Message').textContent='Classificação correta.';
  }else{
    binEl.classList.add('bad');
    card.classList.add('exit-left');
    wrong(`Destino correto: ${labelBin(item.bin)}`);
    document.getElementById('phase2Message').textContent=`O destino adequado era ${labelBin(item.bin)}.`;
  }
  setTimeout(()=>{
    binEl.classList.remove('good','bad');
    wasteIndex++;selectedWaste=false;
    renderWaste();
  },650);
}
function labelBin(bin){
  return {papel:'papel',plastico:'plástico',metal:'metal',organico:'orgânico',perigoso:'perigoso/contaminado'}[bin];
}
document.querySelectorAll('.bin').forEach(bin=>{
  bin.addEventListener('click',()=>chooseBin(bin.dataset.bin,bin));
  bin.addEventListener('dragover',e=>{e.preventDefault();bin.classList.add('hover')});
  bin.addEventListener('dragleave',()=>bin.classList.remove('hover'));
  bin.addEventListener('drop',e=>{e.preventDefault();bin.classList.remove('hover');chooseBin(bin.dataset.bin,bin)});
});
document.getElementById('wasteCard').addEventListener('dragstart',e=>{
  e.dataTransfer.setData('text/plain','waste');
});

// FASE 3
const incidents=[
  {
    icon:'🚪',title:'Rota de fuga bloqueada',
    text:'Durante a inspeção, caixas foram deixadas diante de uma saída de emergência.',
    options:['Aguardar o fim do turno para reorganizar','Retirar a obstrução imediatamente e comunicar o responsável','Colocar apenas uma fita de isolamento','Criar uma rota alternativa improvisada'],
    answer:1,why:'A rota deve ser restabelecida imediatamente e a ocorrência precisa ser comunicada.'
  },
  {
    icon:'🧪',title:'Produto sem identificação',
    text:'Um produto químico foi transferido para um frasco menor sem rótulo.',
    options:['Utilizar pela cor e pelo cheiro','Interromper o uso, identificar o produto e verificar o procedimento','Descartar no ralo','Guardar até alguém lembrar o conteúdo'],
    answer:1,why:'O uso deve ser interrompido até que a identificação e o procedimento sejam confirmados.'
  },
  {
    icon:'⚙️',title:'Proteção removida',
    text:'A grade de uma máquina foi retirada para aumentar a velocidade do processo.',
    options:['Continuar com maior atenção','Parar a operação e restabelecer a proteção coletiva','Solicitar apenas luvas','Reduzir a iluminação da área'],
    answer:1,why:'A proteção coletiva não pode ser retirada para acelerar a produção.'
  },
  {
    icon:'🦺',title:'Visitante na logística',
    text:'Um visitante entrou na área de movimentação sem colete refletivo e sem orientação.',
    options:['Permitir a circulação por poucos minutos','Fornecer orientação, controle de acesso e EPI exigido','Pedir que acompanhe a empilhadeira','Apenas registrar o nome'],
    answer:1,why:'A circulação deve obedecer aos controles de acesso e aos requisitos de segurança.'
  },
  {
    icon:'🗑️',title:'Resíduos misturados',
    text:'Papel reciclável foi misturado a resíduos contaminados com óleo.',
    options:['Enviar tudo para reciclagem','Segregar corretamente, controlar o contaminado e investigar a causa','Misturar com orgânicos','Retirar apenas o papel visível'],
    answer:1,why:'A mistura exige segregação segura e análise da causa para evitar repetição.'
  },
  {
    icon:'💧',title:'Piso molhado',
    text:'Há água no corredor e nenhuma sinalização foi colocada.',
    options:['Aguardar a secagem natural','Isolar, sinalizar e eliminar a causa','Pedir que as pessoas caminhem devagar','Apagar a luz do corredor'],
    answer:1,why:'O risco deve ser controlado, comunicado e eliminado.'
  }
];
let incidentOrder=[],incidentIndex=0,p3Started=false,decisionLocked=false,decisionStop=null;
function startPhase3(){
  if(p3Started) return;p3Started=true;
  incidentOrder=[...incidents].sort(()=>Math.random()-.5);
  renderIncident();
}
function renderIncident(){
  if(incidentIndex>=incidentOrder.length){
    correct(10,'phase3');
    showScreen('phase4');setPhase(4);startPhase4();return;
  }
  decisionLocked=false;
  const item=incidentOrder[incidentIndex];
  document.getElementById('incidentIcon').textContent=item.icon;
  document.getElementById('incidentTitle').textContent=item.title;
  document.getElementById('incidentText').textContent=item.text;
  document.getElementById('decisionProgress').textContent=`${incidentIndex+1}/${incidentOrder.length}`;
  document.getElementById('decisionFeedback').textContent='';
  const box=document.getElementById('decisionOptions');
  box.innerHTML='';
  item.options.forEach((op,i)=>{
    const b=document.createElement('button');b.textContent=op;
    b.addEventListener('click',()=>answerIncident(i,b,item));
    box.appendChild(b);
  });
  if(decisionStop) decisionStop();
  decisionStop=countdown('timer3',difficultyMap[config.difficulty].p3,()=>{
    if(!decisionLocked){
      decisionLocked=true;wrong('Tempo esgotado');
      document.getElementById('decisionFeedback').textContent=item.why;
      setTimeout(()=>{incidentIndex++;renderIncident()},1000);
    }
  });
}
function answerIncident(i,btn,item){
  if(decisionLocked||game.ended)return;
  decisionLocked=true;if(decisionStop)decisionStop();
  [...document.getElementById('decisionOptions').children].forEach((b,idx)=>{
    if(idx===item.answer)b.classList.add('correct');
  });
  if(i===item.answer){correct(10,'phase3')}
  else{btn.classList.add('wrong');wrong('Ação inadequada')}
  document.getElementById('decisionFeedback').textContent=item.why;
  setTimeout(()=>{incidentIndex++;renderIncident()},1100);
}

// FASE 4
const crisisSteps=[
  {
    title:'Etapa 1 — Controle imediato',
    text:'Um tanque apresenta vazamento de líquido industrial próximo a uma área de circulação. Qual deve ser a primeira ação?',
    options:['Continuar a produção e registrar depois','Interromper a fonte, isolar a área e comunicar a emergência','Lavar o produto em direção ao ralo','Cobrir o vazamento com papelão'],
    answer:1,why:'A prioridade é interromper a fonte e proteger as pessoas.'
  },
  {
    title:'Etapa 2 — Proteção ambiental',
    text:'O líquido está se aproximando da drenagem pluvial. Qual ação reduz o risco ambiental?',
    options:['Abrir o ralo para acelerar o escoamento','Usar barreira de contenção e proteger a drenagem','Misturar água ao produto','Desligar a sinalização da área'],
    answer:1,why:'A drenagem deve ser protegida com contenção apropriada.'
  },
  {
    title:'Etapa 3 — Encerramento e prevenção',
    text:'Após conter o vazamento, qual conjunto de ações completa a resposta?',
    options:['Limpar sem registro e retomar a operação','Recolher, destinar corretamente, registrar e analisar a causa','Transferir o resíduo para qualquer recipiente','Esperar a próxima auditoria'],
    answer:1,why:'A resposta inclui destinação, registro, análise da causa e prevenção de recorrência.'
  }
];
let crisisStep=0,p4Started=false,crisisLocked=false;
function startPhase4(){
  if(p4Started)return;p4Started=true;renderCrisis();
}
function renderCrisis(){
  if(crisisStep>=crisisSteps.length){
    document.getElementById('containmentVisual').classList.add('active');
    setTimeout(()=>finishGame(false),1200);
    return;
  }
  crisisLocked=false;
  const item=crisisSteps[crisisStep];
  document.getElementById('crisisStepHud').textContent=`${crisisStep+1}/3`;
  document.getElementById('crisisTitle').textContent=item.title;
  document.getElementById('crisisText').textContent=item.text;
  document.getElementById('crisisFeedback').textContent='';
  const box=document.getElementById('crisisOptions');box.innerHTML='';
  item.options.forEach((op,i)=>{
    const b=document.createElement('button');b.textContent=op;
    b.addEventListener('click',()=>{
      if(crisisLocked||game.ended)return;
      crisisLocked=true;
      [...box.children].forEach((x,idx)=>{if(idx===item.answer)x.classList.add('correct')});
      if(i===item.answer){
        correct(15,'phase4');
        if(crisisStep===1)document.getElementById('containmentVisual').classList.add('active');
      }else{
        b.classList.add('wrong');wrong('Ação incorreta na crise');
      }
      document.getElementById('crisisFeedback').textContent=item.why;
      setTimeout(()=>{crisisStep++;renderCrisis()},1200);
    });
    box.appendChild(b);
  });
}

// FINAL
function finishGame(failed=false){
  if(game.ended && !failed)return;
  game.ended=true;
  showScreen('resultScreen');
  const total=game.score;
  document.getElementById('finalScore').textContent=total;
  document.getElementById('bestStreak').textContent=`${game.bestStreak}x`;
  document.getElementById('remainingLives').textContent=game.lives;
  document.getElementById('difficultyResult').textContent=difficultyMap[config.difficulty].label;

  let title,text;
  if(failed){
    title='Operação interrompida';
    text='A equipe perdeu todas as vidas. O relatório mostra os pontos que precisam ser retomados antes de uma nova tentativa.';
  }else if(total>=330){
    title='Auditoria de excelência';
    text='A equipe reconheceu rapidamente os riscos, classificou resíduos e tomou decisões preventivas consistentes.';
  }else if(total>=230){
    title='Operação controlada';
    text='A equipe apresentou bom desempenho, mas ainda existem decisões que podem ser aprimoradas.';
  }else{
    title='Plano corretivo necessário';
    text='A equipe concluiu a operação, porém deve revisar procedimentos de segurança, resíduos e resposta ambiental.';
  }
  document.getElementById('resultTitle').textContent=title;
  document.getElementById('resultText').textContent=text;

  const names={phase1:'Varredura de riscos',phase2:'Classificação de resíduos',phase3:'Decisão sob pressão',phase4:'Crise ambiental'};
  const report=document.getElementById('phaseReport');report.innerHTML='';
  Object.entries(game.phaseScores).forEach(([k,v])=>{
    const row=document.createElement('div');row.className='phase-row';
    row.innerHTML=`<span>${names[k]}</span><b>${v} pts</b>`;
    report.appendChild(row);
  });

  localStorage.setItem('empresaSeguraResult',JSON.stringify({
    team:config.team,score:game.score,bestStreak:game.bestStreak,lives:game.lives,
    difficulty:difficultyMap[config.difficulty].label,date:new Date().toISOString(),
    phaseScores:game.phaseScores
  }));
}
document.getElementById('printResult').addEventListener('click',()=>window.print());
document.getElementById('restartGame').addEventListener('click',()=>{
  localStorage.removeItem('empresaSeguraResult');location.reload();
});

updateHud();
