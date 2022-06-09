# Development Log

## Project Setup

- `mkdir filmland` and `cd filmland`
- `npx create-react-app .`
- update title in `./public/index.html` to `Filmland`
- create `LOG.md` and update `README.MD`
- install Prettier `npm install -D prettier` and create `.prettierrc`
  ```json
  {
    "tabWidth": 2
  }
  ```
- install ESLint `npm install -D eslint eslint-config-prettier` and create `.eslintrc.json`

  ```json
  {
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended",
      "prettier"
    ],
    "rules": {
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0
    },
    "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
    "parserOptions": {
      "ecmaVersion": 2022,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
  ```

- update `npm scripts` in `package.json`
  ```json
      "format": "prettier --write \"src/**/*.{js,jsx}\"",
      "format:check": "prettier --check \"src/**/*.{js,jsx}\"",
      "lint": "eslint \"src/**/*.{js,jsx}\""
  ```
- delete irrelevant boilerplate files
- install project dependencies

```shell
npm install @alan-ai/alan-sdk-web @mui/icons-material @mui/material @emotion/react @emotion/styled @reduxjs/toolkit axios react-redux react-router-dom
```

## Pages and Routing

- create `Movies.js` in `src/pages/Movies`
- create `MovieInformation.js` in `src/pages/MovieInformation`
- create `Actors.js` in `src/pages/Actors`
- create `Profile.js` in `src/pages/Profile`
- create `Error.js` in `src/pages/Error`

- create `index.js` in `src/pages`

  ```jsx
  import Movies from "./Movies/Movies";
  import MovieInformation from "./MovieInformation/MovieInformation";
  import Actors from "./Actors/Actors";
  import Profile from "./Profile/Profile";
  import Error from "./Error/Error";

  export { Movies, MovieInformation, Actors, Profile, Error };
  ```

- create `NavBar.js` in `src/components/NavBar`
- create `index.js` in `src/components`

  ```jsx
  import NavBar from "./NavBar/NavBar";

  export { NavBar };
  ```

- setup page routing in `src/App.js`

  ```jsx
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { CssBaseline } from "@mui/material";
  import { Movies, MovieInformation, Actors, Profile, Error } from "./pages";
  import { NavBar } from "./components";

  function App() {
    return (
      <BrowserRouter>
        <div>
          <CssBaseline />
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
  ```
