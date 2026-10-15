# Meu Portfólio

Portfólio pessoal e acadêmico desenvolvido com **Vue.js 3** + **Vite** + **Tailwind CSS**, criado para atender às
especificações da disciplina de Laboratório de Desenvolvimento Multiplataforma (Fatec).

## ✨ Funcionalidades

- Página mestra com dados pessoais, foto, curso, experiência profissional, cursos de extensão e idiomas.
- Cards que abrem **modais** com detalhes de cada experiência profissional, curso de extensão e projeto.
- Portfólio de projetos com filtro entre projetos de **faculdade** e **pessoais**, screenshots e link para o repositório.
- Todo o conteúdo é lido de arquivos JSON em `src/data/`, dispensando banco de dados ou back-end.
- Tema escuro com paleta harmônica (slate + violeta + ciano).
- Pronto para publicar no **GitHub Pages** ou **Vercel**.

## 📁 Estrutura do projeto

```
src/
├── assets/                 # imagens estáticas
├── components/
│   ├── BaseModal.vue       # modal genérico (base para os demais)
│   ├── JobModal.vue        # modal de experiência profissional
│   ├── CourseModal.vue     # modal de curso de extensão
│   ├── ProjectModal.vue    # modal de projeto (faculdade/pessoal)
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── AcademicSection.vue
│   ├── ExperienceSection.vue
│   ├── ExtensionCoursesSection.vue
│   ├── ProjectsSection.vue
│   └── FooterSection.vue
├── data/
│   ├── profile.json         # dados pessoais, curso e idiomas
│   ├── jobs.json             # experiências profissionais
│   ├── courses.json          # cursos de extensão
│   └── projects.json         # projetos de faculdade e pessoais
├── utils/format.js          # formatação de datas
├── App.vue
├── main.js
└── style.css                 # importa o Tailwind CSS e define a paleta de cores
```

## ✏️ Como editar o conteúdo

Basta alterar os arquivos em `src/data/*.json`, sem precisar mexer em componentes:

- **profile.json**: nome, foto, tagline, sobre, GitHub, redes sociais, curso e idiomas.
- **jobs.json**: lista de experiências profissionais (empresa, cargo, período, descrição).
- **courses.json**: lista de cursos de extensão (nome, instituição, carga horária, período).
- **projects.json**: lista de projetos, com `category` igual a `"faculdade"` ou `"pessoal"`, semestre,
  parceiro, tecnologias (quando informadas), link do repositório e screenshots.

Screenshots podem ser URLs externas ou arquivos colocados em `public/images/` e referenciados como
`/images/arquivo.png`. Projetos sem screenshots usam um card visual alternativo.

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

## 📦 Build de produção

```bash
npm run build
npm run preview
```

## 🌐 Deploy

### Vercel

O arquivo `vercel.json` já está configurado (`npm run build`, saída em `dist`). Basta importar o repositório em
[vercel.com](https://vercel.com) e realizar o deploy.

### GitHub Pages

Um workflow (`.github/workflows/deploy.yml`) já está pronto para publicar automaticamente a cada push na branch
`main`. Basta habilitar o GitHub Pages no repositório (Settings → Pages → Source: GitHub Actions).
