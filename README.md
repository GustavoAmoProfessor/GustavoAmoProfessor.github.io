<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfólio acadêmico de Gustavo Garcia de Amo: publicações, pesquisa, ensino, recursos educacionais abertos, dissertação, Lattes e ORCID." />
  <title>Gustavo Garcia de Amo | Portfólio Acadêmico</title>

  <style>
    :root {
      --bg: #f6f8fb;
      --surface: #ffffff;
      --text: #172033;
      --muted: #5d6b82;
      --primary: #0b5f8a;
      --primary-dark: #084a6c;
      --accent: #18a999;
      --border: #d9e2ec;
      --soft: #eaf4f8;
      --shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
      --radius: 18px;
      --max: 1180px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(92%, var(--max));
      margin: 0 auto;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(255, 255, 255, 0.92);
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(10px);
    }

    .nav {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      color: var(--primary);
    }

    .brand-mark {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: white;
      font-weight: 900;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 18px;
      font-size: 0.94rem;
      color: var(--muted);
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .menu a:hover {
      color: var(--primary);
    }

    .hero {
      padding: 72px 0 42px;
      background:
        radial-gradient(circle at top right, rgba(24, 169, 153, 0.16), transparent 35%),
        radial-gradient(circle at top left, rgba(11, 95, 138, 0.16), transparent 38%);
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 36px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      gap: 8px;
      align-items: center;
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.76);
      color: var(--primary);
      font-weight: 700;
      font-size: 0.88rem;
      margin-bottom: 20px;
    }

    h1 {
      font-size: clamp(2.2rem, 5vw, 4.2rem);
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin-bottom: 18px;
    }

    .lead {
      font-size: 1.12rem;
      color: var(--muted);
      max-width: 760px;
      margin-bottom: 28px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 28px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 18px;
      border-radius: 999px;
      border: 1px solid var(--border);
      font-weight: 700;
      transition: 0.2s ease;
      background: white;
    }

    .btn-primary {
      color: white;
      background: var(--primary);
      border-color: var(--primary);
    }

    .btn-primary:hover {
      background: var(--primary-dark);
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
    }

    .profile-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 26px;
    }

    .avatar {
      width: 112px;
      height: 112px;
      border-radius: 28px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: white;
      display: grid;
      place-items: center;
      font-size: 2.2rem;
      font-weight: 900;
      margin-bottom: 18px;
    }

    .profile-card h2 {
      font-size: 1.35rem;
      margin-bottom: 6px;
    }

    .profile-card p {
      color: var(--muted);
      margin-bottom: 18px;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      background: var(--soft);
      color: var(--primary-dark);
      border: 1px solid #d1edf1;
      padding: 7px 10px;
      border-radius: 999px;
      font-size: 0.86rem;
      font-weight: 700;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-top: 24px;
    }

    .stat {
      background: rgba(255,255,255,0.78);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px;
    }

    .stat strong {
      display: block;
      color: var(--primary);
      font-size: 1.8rem;
      line-height: 1;
      margin-bottom: 6px;
    }

    .stat span {
      color: var(--muted);
      font-size: 0.9rem;
    }

    section {
      padding: 58px 0;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      margin-bottom: 24px;
    }

    .section-head h2 {
      font-size: clamp(1.6rem, 3vw, 2.25rem);
      letter-spacing: -0.03em;
    }

    .section-head p {
      color: var(--muted);
      max-width: 680px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
      padding: 22px;
    }

    .card h3 {
      font-size: 1.08rem;
      margin-bottom: 8px;
      color: var(--primary-dark);
    }

    .card p {
      color: var(--muted);
      font-size: 0.96rem;
    }

    .card .link {
      display: inline-block;
      margin-top: 14px;
      color: var(--primary);
      font-weight: 800;
    }

    .feature {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      gap: 22px;
      align-items: stretch;
    }

    .timeline {
      display: grid;
      gap: 14px;
    }

    .item {
      border-left: 4px solid var(--accent);
      background: var(--surface);
      border-radius: 0 16px 16px 0;
      padding: 16px 18px;
      border-top: 1px solid var(--border);
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .item small {
      color: var(--primary);
      font-weight: 800;
      display: block;
      margin-bottom: 6px;
    }

    .item strong {
      display: block;
      margin-bottom: 4px;
    }

    .item p {
      color: var(--muted);
      font-size: 0.95rem;
    }

    .pub-list {
      display: grid;
      gap: 12px;
    }

    .pub {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px;
    }

    .pub .tag {
      display: inline-block;
      background: var(--soft);
      color: var(--primary);
      font-weight: 800;
      border-radius: 999px;
      padding: 4px 10px;
      font-size: 0.78rem;
      margin-bottom: 8px;
    }

    .pub strong {
      display: block;
      margin-bottom: 4px;
    }

    .pub p {
      color: var(--muted);
      font-size: 0.94rem;
    }

    .cta {
      background: linear-gradient(135deg, var(--primary), #063b57);
      color: white;
      border-radius: 28px;
      padding: 38px;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 20px;
      align-items: center;
    }

    .cta p {
      color: rgba(255,255,255,0.82);
      margin-top: 10px;
    }

    .cta .btn {
      justify-self: end;
      color: var(--primary);
    }

    footer {
      padding: 34px 0;
      color: var(--muted);
      border-top: 1px solid var(--border);
      background: white;
      font-size: 0.94rem;
    }

    .footer-grid {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    @media (max-width: 900px) {
      .hero-grid,
      .feature,
      .cta {
        grid-template-columns: 1fr;
      }

      .stats,
      .grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }

      .cta .btn {
        justify-self: start;
      }
    }

    @media (max-width: 620px) {
      .nav {
        align-items: flex-start;
        flex-direction: column;
        padding: 14px 0;
      }

      .menu {
        justify-content: flex-start;
      }

      .stats,
      .grid-3 {
        grid-template-columns: 1fr;
      }

      .hero {
        padding-top: 40px;
      }
    }
  </style>
</head>

<body>
  <header class="topbar">
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="Página inicial">
        <span class="brand-mark">GA</span>
        <span>Gustavo Garcia de Amo</span>
      </a>

      <nav class="menu" aria-label="Menu principal">
        <a href="publicacoes.html">Publicações</a>
        <a href="rea.html">REA</a>
        <a href="ensino.html">Ensino</a>
        <a href="dissertacao.html">Dissertação</a>
        <a href="projetos.html">Projetos</a>
        <a href="contato.html">Contato</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">Professor • Mestrando em Educação • Tecnologia e Inclusão</span>
          <h1>Educação, tecnologia e inclusão com foco em pesquisa aplicada.</h1>
          <p class="lead">
            Portfólio acadêmico de Gustavo Garcia de Amo, reunindo publicações, projetos de pesquisa,
            recursos educacionais abertos, materiais de aula, dissertação, currículo Lattes e identificadores acadêmicos.
          </p>

          <div class="actions">
            <a class="btn btn-primary" href="publicacoes.html">Ver publicações</a>
            <a class="btn" href="rea.html">Acessar materiais</a>
            <a class="btn" href="dissertacao.html">Ver dissertação</a>
          </div>

          <div class="stats" aria-label="Indicadores acadêmicos">
            <div class="stat">
              <strong>4</strong>
              <span>artigos em periódicos</span>
            </div>
            <div class="stat">
              <strong>2</strong>
              <span>livros publicados</span>
            </div>
            <div class="stat">
              <strong>3</strong>
              <span>resumos expandidos</span>
            </div>
            <div class="stat">
              <strong>6+</strong>
              <span>resumos em eventos</span>
            </div>
          </div>
        </div>

        <aside class="profile-card">
          <div class="avatar" aria-hidden="true">GA</div>
          <h2>Gustavo Garcia de Amo</h2>
          <p>
            Mestrando em Educação pelo Instituto Federal Catarinense, na linha Processos Educativos e Inclusão.
            Atua como professor no SENAI e pesquisa inovação educacional, inteligência artificial, processos inclusivos e evasão escolar.
          </p>

          <div class="chips">
            <span class="chip">Inteligência Artificial</span>
            <span class="chip">Educação Profissional</span>
            <span class="chip">Inclusão</span>
            <span class="chip">Cidadania Digital</span>
            <span class="chip">Segurança Digital</span>
            <span class="chip">Tecnologias Educacionais</span>
          </div>
        </aside>
      </div>
    </section>

    <section id="atalhos">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>O que você encontra aqui</h2>
            <p>Uma página inicial para organizar sua presença acadêmica e docente sem depender só do Lattes.</p>
          </div>
        </div>

        <div class="grid-3">
          <article class="card">
            <h3>Publicações acadêmicas</h3>
            <p>Artigos, livros, resumos, resumos expandidos, capítulos e demais produções organizadas por tipo e ano.</p>
            <a class="link" href="publicacoes.html">Abrir publicações →</a>
          </article>

          <article class="card">
            <h3>Recursos Educacionais Abertos</h3>
            <p>Materiais de aula, apostilas, atividades, slides, objetos de aprendizagem e recursos compartilháveis.</p>
            <a class="link" href="rea.html">Ver REA →</a>
          </article>

          <article class="card">
            <h3>Dissertação</h3>
            <p>Resumo do projeto, problema de pesquisa, objetivos, metodologia e publicações derivadas do mestrado.</p>
            <a class="link" href="dissertacao.html">Acompanhar pesquisa →</a>
          </article>

          <article class="card">
            <h3>Ensino</h3>
            <p>Disciplinas, assuntos de aula, propostas de atividades e materiais utilizados na prática docente.</p>
            <a class="link" href="ensino.html">Ver ensino →</a>
          </article>

          <article class="card">
            <h3>Projetos</h3>
            <p>Projetos de pesquisa, desenvolvimento educacional, tecnologias digitais e inovação pedagógica.</p>
            <a class="link" href="projetos.html">Ver projetos →</a>
          </article>

          <article class="card">
            <h3>Currículo e identificadores</h3>
            <p>Links para Lattes, ORCID, Google Scholar e canais profissionais.</p>
            <a class="link" href="contato.html">Ver links →</a>
          </article>
        </div>
      </div>
    </section>

    <section id="pesquisa">
      <div class="container feature">
        <div class="card">
          <h2>Linhas de interesse</h2>
          <p>
            A produção acadêmica e docente está concentrada na interface entre Educação,
            Computação e Inclusão, com atenção especial para IA, permanência estudantil,
            cidadania digital, acessibilidade, segurança da informação e práticas pedagógicas.
          </p>
          <br>
          <div class="chips">
            <span class="chip">Processos educativos</span>
            <span class="chip">Evasão escolar</span>
            <span class="chip">IA na educação</span>
            <span class="chip">DUA</span>
            <span class="chip">REA</span>
          </div>
        </div>

        <div class="timeline">
          <div class="item">
            <small>2025 — Atual</small>
            <strong>Evasão Escolar no Instituto Federal Catarinense</strong>
            <p>Diagnóstico, gestão educacional e inovação tecnológica para promoção da permanência e êxito estudantil.</p>
          </div>

          <div class="item">
            <small>2022</small>
            <strong>Senai Play — Acesso a Redes e Segurança da Informação</strong>
            <p>Desenvolvimento de e-curso publicado na plataforma Senai Play.</p>
          </div>

          <div class="item">
            <small>2013 — 2016</small>
            <strong>Sistema Acadêmico para Educadores</strong>
            <p>Projeto de sistema acadêmico para gestão pedagógica e administrativa de educadores.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="destaques">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Publicações em destaque</h2>
            <p>Uma amostra inicial. A página completa pode trazer filtros por ano, tipo, tema e coautoria.</p>
          </div>
          <a class="btn" href="publicacoes.html">Lista completa</a>
        </div>

        <div class="pub-list">
          <article class="pub">
            <span class="tag">Artigo • 2026</span>
            <strong>Inteligência artificial: (re)pensar a elaboração de prompts contextualizados no Sul Global.</strong>
            <p>CONTRIBUCIONES A LAS CIENCIAS SOCIALES, v. 19, p. e24127.</p>
          </article>

          <article class="pub">
            <span class="tag">Artigo • 2025</span>
            <strong>Empirismo, Natureza e Educação: Diálogo entre Locke e Rousseau nas bases da pedagogia.</strong>
            <p>Instrumento — Revista em Estudo e Pesquisa em Educação, v. 27.</p>
          </article>

          <article class="pub">
            <span class="tag">Livro • 2025</span>
            <strong>Introdução a Redes.</strong>
            <p>Material publicado em primeira edição.</p>
          </article>

          <article class="pub">
            <span class="tag">Livro • 2021</span>
            <strong>Criptografia e Segurança.</strong>
            <p>Indaial: UNIASSELVI, v. 1, 193p.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="ensino">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Ensino e materiais de aula</h2>
            <p>Como professor, esta área pode funcionar como vitrine didática e repositório público de materiais.</p>
          </div>
        </div>

        <div class="grid-3">
          <article class="card">
            <h3>Programação e lógica</h3>
            <p>Atividades práticas, listas, projetos, avaliações e materiais de apoio para aprendizagem de programação.</p>
          </article>

          <article class="card">
            <h3>Redes e segurança</h3>
            <p>Conteúdos sobre redes de computadores, servidores, segurança da informação, criptografia e infraestrutura.</p>
          </article>

          <article class="card">
            <h3>IA e tecnologias educacionais</h3>
            <p>Materiais sobre uso pedagógico, ético e crítico da IA em contextos educacionais e profissionais.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="links">
      <div class="container">
        <div class="cta">
          <div>
            <h2>Currículo, identificadores e contato acadêmico</h2>
            <p>
              Acesse os perfis acadêmicos e profissionais. Esta área pode receber também LinkedIn,
              e-mail institucional, ResearchGate, GitHub e formulário de contato.
            </p>
          </div>

          <div class="actions">
            <a class="btn" href="http://lattes.cnpq.br/8461796088196201" target="_blank" rel="noopener">Lattes</a>
            <a class="btn" href="https://orcid.org/0009-0009-5390-4066" target="_blank" rel="noopener">ORCID</a>
            <a class="btn" href="https://scholar.google.com.br/citations?user=vehTwo4AAAAJ&hl=pt-BR&oi=ao" target="_blank" rel="noopener">Google Scholar</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-grid">
      <span>© 2026 Gustavo Garcia de Amo. Portfólio acadêmico.</span>
      <span>Educação • Tecnologia • Inclusão</span>
    </div>
  </footer>
</body>
</html>
