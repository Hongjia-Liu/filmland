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
