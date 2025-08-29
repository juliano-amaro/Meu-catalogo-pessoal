# Meu Catálogo Pessoal de Filmes

Este é um aplicativo desenvolvido em React Native com Expo, que apresenta um catálogo dos seus filmes favoritos em formato de cards.

## Funcionalidades

- Visualização dos filmes favoritos em cards com imagem, título, produtora e ano.
- Layout responsivo e moderno.
- Dados dos filmes carregados a partir do arquivo [catalogo.json](catalogo.json).

## Estrutura do Projeto

- **app/**: Arquivos de navegação e páginas principais.
  - [`app/index.tsx`](app/index.tsx): Página inicial que exibe o catálogo.
  - [`app/_layout.tsx`](app/_layout.tsx): Configuração do layout de navegação.
- **components/**: Componentes reutilizáveis.
  - [`CatalogoScreen`](components/CatalogoScreen.tsx): Componente principal que renderiza os cards dos filmes.
  - Outros componentes auxiliares.
- **assets/**: Imagens e fontes utilizadas no projeto.
- **catalogo.json**: Lista dos filmes exibidos no catálogo.

## Como executar

1. Instale as dependências:
   ```sh
   npm install