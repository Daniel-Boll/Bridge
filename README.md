# <h1 align="center">Bridge</h1>
<h3 align="center"><i>A <b>ponte</b> para o seu sucesso profissional.</i></h3>

> <p align="center">Projeto desenvolvido para a 2ª edição do Hackathon CCR</p>

<p align="center">
  <img src="https://github.com/Daniel-Boll/Bridge/blob/main/images/logoImage.svg" width=400>
</p>


## O problema
Atualmente, a área da Tecnologia da Informaçõ (TI) no Brasil convive com cerca de 400 mil vagas abertas e sem profissionais qualificados para ocupá-las. Junto a isso, estudos apontam que 85% dos jovens, entre 16 e 23 anos, desejam trabalhar com o desenvolvimento ou implementação de novas tecnologias.
Uma das possíves causas para essa discrepância é que o joven brasileiro, ao buscar por cursos de capacitação na internet se depara com uma vasta quantidade de cursos disponíveis de diversos níveis, sem um segmento lógico explícito e acaba se sentindo perdido e estagnado.

## O que é a Solução
A **Bridge** é uma plataforma voltada aos jovens interessados em seguir a carreira de TI no Brasil, que centraliza cursos de terceiros distribuindo-os em trilhas de aprendizagem desde o nível básico ao nível avançado. O objetivo principal é facilitar o caminho para a capacitação na área, colaborando com a rápida inserção do jovem no mercado financeiro.

## Recursos Técnicos

A aplicão foi desenvovida utilizando [Next.js](https://nextjs.org/), [Node.js](https://nodejs.org/en/), e [React.js](https://pt-br.reactjs.org/) visando principalmente acessos por dispositivos *mobile*.

### Instalação 
Aqui estão os passos para rodar o nosso projeto em sua máquina. Para isso, será necessário ter instalado em sua máquina o [yarn](https://yarnpkg.com/getting-started/install) e o [Node.js](https://nodejs.org/en/download/). 

Clone o repositório: <br>
```console
foo@bar:~$ git clone https://github.com/Daniel-Boll/Bridge.git
```

Entre no diretório:<br>
```console
foo@bar:~$ cd Bridge
```

Instale a depências do projeto: <br>
```console
foo@bar:~/Bridge$ yarn
```

Execute o projeto em um servidor local: <br>
```console
foo@bar:~/Bridge$ yarn dev
```

### Visão Geral da Aplicação

Após o login a plataforma pode ser dividia em quatro principais telas para o usuário, sendo elas:

* Perfil
  - Nesta página é possível acessar as estatísticas do usuário, como trilhas e cursos finalizadose áreas quais já realizou cursos. Além disso, é possivel acessar as trilhas que está fazendo

* Trilhas
  - Nesta, é possível acessar as trilhas de áreas disponíveis, bem como a sequência de cursos para completá-la. Alem disso, ao acessar a página do curso, é possível ver o ranking com as pessoas que mais pontuaram naquela respectiva área.

* Certificados
  - Nesta, é possível acessar todos os certificados de cursos que o usuário fez pela plataforma (que contam pontos para o ranking).

* Mais informações
   - Nesta, é possível acessar as configurações do aplicativo e dentre outras funcionalidades.

## Árvore de Diretórios
```bash
.
├── components
│   ├── DoughnutChart
│   │   └── index.js
│   ├── Navigation
│   │   ├── Navigation.module.css
│   │   └── index.js
│   └── RoadTimeline
│       ├── RoadTimeline.module.css
│       └── index.js
├── images
│   ├── Logo2.svg     
│   ├── amazonIcon.svg
│   ├── award.svg     
│   ├── discordIcon.svg   
│   ├── download.svg      
│   ├── eye.svg
│   ├── facebookIcon.svg  
│   ├── githubIcon.svg    
│   ├── gmailIcon.svg     
│   ├── instagramIcon.svg 
│   ├── locationSearch.svg
│   ├── logoImage.svg     
│   ├── search.svg
│   ├── twitterIcon.svg
│   ├── user2.png
│   ├── user3.png
│   ├── user4.png
│   ├── user5.png
│   ├── userImage.png
│   └── whatsappIcon.svg
├── pages
│   ├── area
│   │   └── index.js
│   ├── certificates
│   │   └── index.js
│   ├── courses
│   │   └── index.js
│   ├── more
│   │   └── index.js
│   ├── profile
│   │   └── index.js
│   ├── rank
│   │   └── index.js
│   ├── route
│   │   └── index.js
│   ├── sign
│   │   └── index.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles
│   ├── Area.module.css
│   ├── Certificates.module.css
│   ├── Courses.module.css
│   ├── Home.module.css
│   ├── More.module.css
│   ├── Profile.module.css
│   ├── Rank.module.css
│   ├── Route.module.css
│   ├── Sign.module.css
│   └── globals.css
├── README.md
├── next.config.js
├── package-lock.json
├── package.json
├── yarn-error.log
└── yarn.lock
```
