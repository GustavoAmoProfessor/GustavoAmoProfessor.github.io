<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gustavo Garcia de Amo | Portfólio Acadêmico</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f6f8fb;
            margin: 0;
            color: #172033;
        }

        header {
            background: #fff;
            border-bottom: 1px solid #dbe5ee;
            padding: 18px;
        }

        nav {
            max-width: 1150px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        nav a {
            text-decoration: none;
            color: #172033;
            margin: 0 8px;
            font-weight: 600;
        }

        nav a:hover {
            color: #0b5f8a;
        }

        .logo {
            color: #0b5f8a;
            font-weight: 800;
        }

        .container {
            max-width: 1150px;
            margin: auto;
            padding: 40px 20px;
        }

        .hero {
            text-align: center;
            padding: 60px 0;
        }

        .hero h1 {
            font-size: 4rem;
            color: #0b5f8a;
            margin: 10px 0;
        }

        .hero p {
            color: #64748b;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
        }

        .card {
            background: #fff;
            border: 1px solid #dbe5ee;
            border-radius: 18px;
            padding: 24px;
            text-decoration: none;
            color: inherit;
            transition: 0.2s;
        }

        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(11, 95, 138, 0.12);
            border-color: #0b5f8a;
        }

        .icon {
            font-size: 2rem;
        }

        .links {
            text-align: center;
            margin-top: 30px;
        }

        .links a {
            display: inline-block;
            margin: 5px;
            padding: 10px 14px;
            border: 1px solid #dbe5ee;
            border-radius: 999px;
            text-decoration: none;
            color: #0b5f8a;
        }

        .links a:hover {
            background: #0b5f8a;
            color: #fff;
        }

        @media (max-width: 700px) {
            nav {
                flex-direction: column;
                text-align: center;
            }

            nav a {
                display: inline-block;
                margin: 6px;
            }

            .hero h1 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>

<body>

    <header>
        <nav>
            <div class="logo">Gustavo Garcia de Amo</div>

            <div>
                <a href="publicacoes.html">Publicações</a>
                <a href="dissertacao.html">Dissertação</a>
                <a href="projetos.html">Projetos</a>
                <a href="rea.html">REA</a>
                <a href="ensino.html">Ensino</a>

                <!-- Novo item do menu -->
                <a href="jogos.html">Jogos</a>

                <a href="servicos.html">Produtos & Serviços</a>
                <a href="contato.html">Contato</a>
            </div>
        </nav>
    </header>

    <main class="container">

        <section class="hero">
            <h1>Gustavo Garcia de Amo</h1>

            <p>Professor • Pesquisador • Mestrando em Educação</p>

            <p>
                Educação, Inteligência Artificial, Inclusão e
                Cidadania Digital
            </p>
        </section>

        <section class="cards">

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
                <p>Projetos organizados por disciplina.</p>
            </a>

            <a class="card" href="rea.html">
                <div class="icon">📖</div>
                <h3>REA</h3>
                <p>Recursos educacionais abertos.</p>
            </a>

            <a class="card" href="ensino.html">
                <div class="icon">👨‍🏫</div>
                <h3>Ensino</h3>
                <p>Disciplinas, atividades e materiais.</p>
            </a>

            <!-- Novo card dos jogos -->
            <a class="card" href="jogos.html">
                <div class="icon">🎮</div>
                <h3>Jogos Educacionais</h3>
                <p>
                    Jogos, quizzes, desafios e atividades interativas
                    desenvolvidos para as aulas.
                </p>
            </a>

            <a class="card" href="servicos.html">
                <div class="icon">🚀</div>
                <h3>Produtos & Serviços</h3>
                <p>
                    Cursos, consultorias, palestras, recursos educacionais
                    e soluções digitais.
                </p>
            </a>

            <a class="card" href="contato.html">
                <div class="icon">📧</div>
                <h3>Contato</h3>
                <p>E-mail, Lattes, ORCID e Google Scholar.</p>
            </a>

        </section>

        <div class="links">
            <a
                href="http://lattes.cnpq.br/8461796088196201"
                target="_blank"
                rel="noopener noreferrer"
            >
                Lattes
            </a>

            <a
                href="https://orcid.org/0009-0009-5390-4066"
                target="_blank"
                rel="noopener noreferrer"
            >
                ORCID
            </a>

            <a
                href="https://scholar.google.com.br/citations?user=vehTwo4AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
            >
                Google Scholar
            </a>
        </div>

    </main>

</body>
</html>
