<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Gustavo Garcia de Amo | Portfólio Acadêmico</title>
<meta name="description" content="Portfólio acadêmico de Gustavo Garcia de Amo: publicações, dissertação, projetos, recursos educacionais e contato.">

<style>
:root{
    --primary:#0b5f8a;
    --primary-dark:#084a6c;
    --accent:#18a999;
    --bg:#f6f8fb;
    --card:#ffffff;
    --text:#172033;
    --muted:#64748b;
    --border:#dbe5ee;
    --soft:#e8f6fa;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:var(--bg);
    color:var(--text);
    line-height:1.6;
}

a{
    text-decoration:none;
}

header{
    background:white;
    border-bottom:1px solid var(--border);
    position:sticky;
    top:0;
    z-index:100;
}

.nav{
    max-width:1150px;
    margin:auto;
    padding:18px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:20px;
}

.logo{
    color:var(--primary);
    font-weight:800;
    font-size:1.1rem;
}

.menu{
    display:flex;
    gap:18px;
    flex-wrap:wrap;
}

.menu a{
    color:var(--text);
    font-weight:600;
    font-size:.94rem;
}

.menu a:hover{
    color:var(--primary);
}

.container{
    max-width:1150px;
    margin:auto;
    padding:52px 20px;
}

.hero{
    min-height:72vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
}

.hero-content{
    max-width:850px;
}

.kicker{
    display:inline-block;
    margin-bottom:18px;
    padding:8px 14px;
    border-radius:999px;
    background:var(--soft);
    color:var(--primary-dark);
    font-weight:700;
    font-size:.92rem;
}

.hero h1{
    font-size:clamp(2.5rem, 7vw, 5rem);
    line-height:1.05;
    color:var(--primary);
    letter-spacing:-.04em;
    margin-bottom:18px;
}

.subtitle{
    font-size:1.25rem;
    color:var(--text);
    font-weight:700;
    margin-bottom:10px;
}

.description{
    color:var(--muted);
    font-size:1.08rem;
    max-width:720px;
    margin:0 auto 28px;
}

.actions{
    display:flex;
    justify-content:center;
    gap:12px;
    flex-wrap:wrap;
}

.btn{
    display:inline-block;
    padding:13px 18px;
    border-radius:999px;
    background:var(--primary);
    color:white;
    font-weight:800;
    border:1px solid var(--primary);
}

.btn:hover{
    background:var(--primary-dark);
}

.btn-light{
    background:white;
    color:var(--primary);
    border:1px solid var(--border);
}

.btn-light:hover{
    background:var(--soft);
    color:var(--primary-dark);
}

.stats{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:14px;
    margin-bottom:42px;
}

.stat{
    background:white;
    border:1px solid var(--border);
    border-radius:18px;
    padding:22px;
    text-align:center;
    box-shadow:0 8px 20px rgba(0,0,0,.035);
}

.stat strong{
    display:block;
    color:var(--primary);
    font-size:2rem;
    line-height:1;
    margin-bottom:8px;
}

.stat span{
    color:var(--muted);
    font-size:.92rem;
}

.section-title{
    text-align:center;
    margin-bottom:25px;
}

.section-title h2{
    color:var(--primary);
    font-size:2rem;
    margin-bottom:8px;
}

.section-title p{
    color:var(--muted);
}

.cards{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
}

.card{
    background:white;
    border:1px solid var(--border);
    border-radius:20px;
    padding:26px;
    min-height:160px;
    box-shadow:0 8px 22px rgba(0,0,0,.04);
    transition:.2s;
}

.card:hover{
    transform:translateY(-3px);
    box-shadow:0 12px 28px rgba(0,0,0,.07);
}

.icon{
    font-size:2rem;
    margin-bottom:12px;
}

.card h3{
    color:var(--primary-dark);
    margin-bottom:6px;
    font-size:1.15rem;
}

.card p{
    color:var(--muted);
    font-size:.95rem;
}

.links{
    display:flex;
    justify-content:center;
    gap:12px;
    flex-wrap:wrap;
    margin-top:42px;
}

.links a{
    color:var(--primary);
    font-weight:800;
    background:white;
    border:1px solid var(--border);
    padding:10px 14px;
    border-radius:999px;
}

.links a:hover{
    background:var(--soft);
}

footer{
    margin-top:45px;
    padding:28px 20px;
    text-align:center;
    background:white;
    border-top:1px solid var(--border);
    color:var(--muted);
}

@media(max-width:900px){
    .cards{
        grid-template-columns:repeat(2,1fr);
    }

    .stats{
        grid-template-columns:repeat(2,1fr);
    }

    .hero{
        min-height:auto;
        padding:60px 0;
    }
}

@media(max-width:650px){
    .nav{
        flex-direction:column;
        align-items:flex-start;
    }

    .cards,
    .stats{
        grid-template-columns:1fr;
    }

    .actions{
        flex-direction:column;
    }

    .btn{
        width:100%;
        text-align:center;
    }
}
</style>
</head>

<body>

<header>
    <nav class="nav">
        <a class="logo" href="index.html">Gustavo Garcia de Amo</a>

        <div class="menu">
            <a href="publicacoes.html">Publicações</a>
            <a href="dissertacao.html">Dissertação</a>
            <a href="projetos.html">Projetos</a>
            <a href="rea.html">REA</a>
            <a href="contato.html">Contato</a>
        </div>
    </nav>
</header>

<main>

    <section class="hero">
        <div class="container hero-content">

            <span class="kicker">Professor • Pesquisador • Mestrando em Educação</span>

            <h1>Gustavo Garcia de Amo</h1>

            <p class="subtitle">
                Educação, Inteligência Artificial, Inclusão e Cidadania Digital
            </p>

            <p class="description">
                Portfólio acadêmico com publicações, projetos de ensino, dissertação,
                recursos educacionais abertos e materiais de aula.
            </p>

            <div class="actions">
                <a class="btn" href="publicacoes.html">Ver publicações</a>
                <a class="btn btn-light" href="dissertacao.html">Conhecer pesquisa</a>
                <a class="btn btn-light" href="projetos.html">Projetos de ensino</a>
            </div>

        </div>
    </section>

    <section class="container">

        <div class="stats">
            <div class="stat">
                <strong>4</strong>
                <span>artigos</span>
            </div>

            <div class="stat">
                <strong>2</strong>
                <span>livros</span>
            </div>

            <div class="stat">
                <strong>10+</strong>
                <span>produções</span>
            </div>

            <div class="stat">
                <strong>3</strong>
                <span>disciplinas</span>
            </div>
        </div>

        <div class="section-title">
            <h2>Acesse por área</h2>
            <p>Escolha uma seção para navegar pelo portfólio.</p>
        </div>

        <div class="cards">

            <a class="card" href="publicacoes.html">
                <div class="icon">📚</div>
                <h3>Publicações</h3>
                <p>Artigos, livros, resumos e apresentações.</p>
            </a>

            <a class="card" href="dissertacao.html">
                <div class="icon">🎓</div>
                <h3>Dissertação</h3>
                <p>Pesquisa sobre IA, evasão e permanência estudantil.</p>
            </a>

            <a class="card" href="projetos.html">
                <div class="icon">💻</div>
                <h3>Projetos</h3>
                <p>Projetos de ensino organizados por disciplina.</p>
            </a>

            <a class="card" href="rea.html">
                <div class="icon">📖</div>
                <h3>REA</h3>
                <p>Recursos educacionais abertos e materiais de aula.</p>
            </a>

            <a class="card" href="ensino.html">
                <div class="icon">👨‍🏫</div>
                <h3>Ensino</h3>
                <p>Disciplinas, atividades e práticas pedagógicas.</p>
            </a>

            <a class="card" href="contato.html">
                <div class="icon">📧</div>
                <h3>Contato</h3>
                <p>E-mail, Lattes, ORCID e Google Scholar.</p>
            </a>

        </div>

        <div class="links">
            <a href="http://lattes.cnpq.br/8461796088196201" target="_blank" rel="noopener">Lattes</a>
            <a href="https://orcid.org/0009-0009-5390-4066" target="_blank" rel="noopener">ORCID</a>
            <a href="https://scholar.google.com.br/citations?user=vehTwo4AAAAJ" target="_blank" rel="noopener">Google Scholar</a>
            <a href="mailto:gustavo.garcia.de.amo@gmail.com">E-mail</a>
        </div>

    </section>

</main>

<footer>
    © 2026 Gustavo Garcia de Amo • Portfólio Acadêmico
</footer>

</body>
</html>
