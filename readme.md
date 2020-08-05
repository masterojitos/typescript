# TypeScript Tutorial, Old &amp; New Features, Clean Code &amp; Good Practices


Repasemos juntos nociones básicas de TypeScript, sus **principales características y últimas novedades**.\
Adicionalmente, se proporcionan **2 aplicaciones en Angular**, la primera con código **JavaScript**, y la segunda **transformando el código a TypeScript**.
Así como la configuración básica para el uso de **Visual Studio Code y Prettier**.

![](https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png)

&nbsp;
## Fundamentos de TypeScript

TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft.\
Anders Hejlsberg, arquitecto principal del desarrollo del lenguaje de programación C#, es el principal participante en su desarrollo.\
Typescript es un superset de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.\
Un Superset es un lenguaje escrito sobre otro lenguaje. En este caso Typescript es eso, un lenguaje basado en el original, ofreciéndonos grandes beneficios. Al final, TypeScript convertirá su código en JavaScript común.

Hay dos objetivos principales de TypeScript:
- Proveer un sistema tipado opcional para Javascript
- Proveer características de futuras ediciones de Javascript a motores actuales de Javascript

![](https://res.cloudinary.com/software-crafters/image/upload/v1544181785/posts/typescript-javascript-introduccion/superset-typescript.png)

&nbsp;
## Configuración en VSCode

1. Poner en práctica los atajos de teclado
> https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png

2. Tener instaladas buenas extensiones
> https://gist.github.com/masterojitos/75113b85c88e918125df6c80cd39cd9d

3. Tener instalada una última versión estable de TypeScript
> `$ npm i -g typescript@latest`

4. Agregar al archivo de configuración settings.json
```javascript
"typescript.tsdk": "YOUR_ROUTE/node_modules/typescript/lib"
```
5. Configurar Prettier en tu proyecto con la última versión de TypeScript
> https://gist.github.com/masterojitos/f1d9916419faf92cac3a8f62798d5256
> `$ npm i -D prettier@npm:prettier-next-lppedd @babel/core @babel/preset-typescript`

6. Reiniciar VSCode y ¡disfrutar!

&nbsp;
## Nociones básicas de TypeScript

- let & const
- Data Types
- Template Strings
- Functions and Parameters
- Arrow Functions
- Destructuring
- Promises
- Interfaces
- Classes
- Modules
- Decorators

## Principales características de TypeScript

- Async / Await
- Try / Catch / Finally
- Type Assertion
- Function Overload
- Literal Types
- Rest parameters
- Spread Operator
- Object Shorthand
- forEach
- for...of
- filter
- find
- findIndex
- some
- every
- map
- reduce

## Nuevas características de TypeScript

- Exponentiation Operator
- Utilities Types
- Optional Chaining
- Null Coalescing
- includes
- padStart
- padEnd
- Array.from
- Object.values
- Object.keys

![](https://pbs.twimg.com/media/EeAWAIbUEAEF2qM.png)

&nbsp;
## Referencias

- Best TypeScript book online
> https://basarat.gitbook.io/typescript/
- StyleGuide TypeScript
> https://basarat.gitbook.io/typescript/styleguide
- Clean Code TypeScript
> https://github.com/labs42io/clean-code-typescript
