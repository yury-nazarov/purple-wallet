# ESLint

устанавливаем через schematic

```shell
ng add angular-eslint
```
# Prettier

```shell
npm install --save-dev --save-exact prettier
```
В файле: `.prettierrc`
```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}
```

синхронизируем с ESLint, что бы исключить конфликты

```shell
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
```
В файле: `eslint.config.js`
```js
// импортируем конфиг prettier
const prettier = require("eslint-config-prettier/flat");

// Применяем его для групп файлов TS и HTML
module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      // ...
      prettier,
    ],
    rules: {
      // ...
      // Проверка точки запятой в конце строки
      semi: ["error", "always"],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      // ...
      prettier,
    ],
    ...
  }
  
]);
```

Добавляем алиасы в скрипты
В файле: `package.json`
```json
{
  ...
  "scripts": {
    ...
    "lint:fix": "eslint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```
