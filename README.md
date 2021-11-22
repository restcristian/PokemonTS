## PokemonTS

A test project that uses the PokemonAPI to test TypeScript on a React Project.

This project was created by using the typescript template provided
by create react app, and then the following features were integrated:

1. Redux.
2. Redux Thunk.
3. React Router DOM
4. Basic ESlint and Prettier.

### How to use

1. Clone this repository and then run the following command:

   `npm install`

2. After all dependencies are installed, run the following command to execure the application:

   `npm start`

### File structure

The project source directory is structured as follows:

```
📦src
 ┣ 📂components
 ┃ ┗ 📂PokemonList
 ┃ ┃ ┣ 📂PokemonListItem
 ┃ ┃ ┃ ┣ 📜PokemonListItem.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜PokemonList.module.css
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂helpers
 ┃ ┗ 📜constants.ts
 ┣ 📂pages
 ┃ ┣ 📂Pokemon
 ┃ ┃ ┣ 📜Pokemon.module.css
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Pokemons
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂redux
 ┃ ┣ 📂actions
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜types.ts
 ┃ ┗ 📂reducers
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜pokemonReducer.tsx
 ┣ 📂routes
 ┃ ┗ 📜index.tsx
 ┣ 📂types
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜redux.tsx
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜serviceWorker.ts
 ┗ 📜setupTests.ts
```

### Todo

1. Add Jest and UI testing.
2. Replace fetch with Axios.

Made with :heart: by Cristian Restituyo.
