# Projeto Trybetunes

Este projeto é uma aplicação web que permite aos usuários pesquisar artistas, visualizar álbuns e músicas, e marcar suas músicas favoritas. O objetivo é praticar a escrita de funções TypeScript, incluindo o uso de parâmetros, retorno de valores, e casos de teste.

## Tecnologias Utilizadas

- TypeScript: Utilizado para implementar as funções.
- React.js: Uma biblioteca JavaScript para criar interfaces de usuário.
- CSS: Usado para estilizar os componentes da aplicação.

## Requisitos do Projeto

- **Formulário de Identificação**: Dentro do componente Login, que é renderizado na rota /, crie um formulário para que a pessoa usuária se identifique com um nome.

- **Formulário para Pesquisar Artistas**: Este formulário deve conter um input e um botão para que seja possível pesquisar os álbuns de uma banda ou artista. Crie o formulário dentro do componente Search, que é renderizado na rota /search.

- **Lista de Músicas do Álbum Selecionado**: Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado. Crie a lista dentro do componente Album, que é renderizado na rota /album/:id.

- **Componente de Cabeçalho**: Crie um componente chamado Header, dentro da pasta src/components.

- **Mecanismo para Adicionar Músicas na Lista de Músicas Favoritas**: No componente MusicCard, crie um input do tipo checkbox para marcar as músicas favoritas.

- **Requisição para Adicionar e Remover as Músicas Favoritas ao Clicar no Checkbox**: Para adicionar uma música a lista de favoritas, utilize a função addSong da favoriteSongsAPI. Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas.

- **Requisição para Recuperar as Músicas Favoritas**: Ao acessar a página do album, faça uma requisição usando a função getFavoriteSongs para atualizar a lista de músicas favoritas.

- **Lista de Músicas Favoritas**: Crie a lista dentro do componente Favorites, que é renderizado na rota /favorites.

- **Exibição de Perfil**: Crie a exibição do perfil dentro do componente Profile, que é renderizado na rota /profile.

- **Formulário de Edição de Perfil**: Crie o formulário de edição de perfil dentro do componente ProfileEdit, que é renderizado na rota /profile/edit.

## Conclusão

O Gerenciador de Músicas é uma ferramenta poderosa para gerenciar suas músicas favoritas de forma segura e eficiente. Com a capacidade de pesquisar artistas, visualizar álbuns e músicas, e marcar suas músicas favoritas, você pode ter certeza de que suas músicas estão bem organizadas. Esperamos que você encontre este gerenciador de músicas útil e fácil de usar. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.
