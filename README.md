# Projeto GitHub User Info

## Descrição

Este projeto foi desenvolvido com o objetivo de consumir a API do GitHub para exibir informações detalhadas de um usuário, incluindo seu perfil e uma lista dos seus últimos 10 repositórios.

Link do projeto no Vercel: <a href="https://github-app-beta.vercel.app/" target="_blank">GitHub User Info no Vercel</a>

## Funcionalidades

-   Exibição das informações básicas do usuário, como avatar, nome e bio.
-   Lista dos últimos 10 repositórios do usuário, com links para o GitHub.
-   Busca de usuário através de um campo de entrada, com atualização dinâmica dos dados.

## Tecnologias

-   HTML
-   CSS
-   JavaScript
-   Axios (para realizar requisições à API do GitHub)

## Como Executar o Projeto

1. Clone este repositório:

    ```bash
    git clone https://github.com/seuusuario/seurepositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seurepositorio
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento do Vite (caso esteja usando Vite):

    ```bash
    npm run dev
    ```

5. Abra o projeto no navegador. Se estiver usando Vite, o link do servidor local será exibido no terminal.

## Estrutura do Projeto

-   `src/js`: Contém os scripts JavaScript, incluindo os módulos para busca de dados de usuário e repositórios.
-   `src/css`: Contém os arquivos de estilo CSS.
-   `src/images`: Imagens usadas no projeto.
-   `index.html`: Página principal do projeto, localizada na raiz do repositório.

## Como Usar

1. Digite o nome de usuário do GitHub no campo de busca e clique no botão de pesquisa ou pressione "Enter".
2. O perfil e os repositórios do usuário serão exibidos na tela, caso o usuário seja encontrado.

## Requisitos

-   Navegador atualizado
-   Node.js e npm instalados

## Observações

Este projeto foi desenvolvido para fins de aprendizado e prática de desenvolvimento web, consumindo dados de uma API pública (GitHub API).
