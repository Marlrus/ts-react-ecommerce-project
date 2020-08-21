# React E-Commerce PWA (Progressive Web App) CRWN Clothing

[Enlace a la pagina: CRWN Clothing](https://thecodingwalrus.com/)

Aplicación web construida usando Create React App. Backend para pagos Stripe y servir la aplicación utilizando NodeJS, base de datos y autenticación utilizando Firebase. El manejo del estado de toda la aplicación es a través de Redux y React Hooks.

## Configuracion de CRA

El proyecto se hizo con Create React App y TypeScript (TS). TS es un superset de JavaScript que agrega un sistema de tipos estático, brindando soporte y seguridad en el desarrollo. Escrito utilizando componentes funcionales manejados con React Hooks. El codigo de Front-end se encuentra en el directorio `client/` con sus propias dependencias en el archivo package.json.

Toda la periodización es del lado del cliente. El servidor sirve una pagina con HTML vacía que es poblada por React dependiendo de los cambios de estado por la interacción del usuario. Esta separado el paquete inicial con React Lazy en partes para disminuir el peso envió inicial y mejorar la velocidad de carga de la pagina. El funcionamiento correcto en UX de las rutas se hace a través de React Router.

## Backend

El servidor de Node esta escrito en TS también y se encuentra en el directorio `src/`. Esta integrado con Firebase, un BaaS (Backend as a Service) que provee herramientas para reemplazar funcionalidad de un servidor inhouse. Firebase se encarga de la autenticación de la aplicación y la persistencia de datos con la base de datos Firestore. La configuracion se puede encontrar en `client/src/firebase/firebase-utils.js`.

De no se por la integración de Stripe, la aplicación podría ser Serverless para un modelo JAM Stack. Incluso se podría delegar la funcionalidad de Stripe a un servicio serverless como Lambda o Netlify Funcions para tener el frontend en un CDN desacoplado de el backend completamente.

## Manejo de Estado

El manejo de estado de esta aplicación esta hecha completamente con Redux. Se utiliza Redux Persist para guardar información del estado en el cache y evitar re-renderización innecesario a través de memoización. Para el manejo de acciones asincronicas se utiliza Redux Saga, migrado de Redux Thunk. Esto unifica 100% del estado de la aplicación con Redux facilitando debugging y estandarizando patrones a través de toda la aplicación.

[Enlace a mi articulo sobre Redux con TypeScript](https://www.thecodingwalrus.com/react/using-react-redux-connect-with-typescript/)

## Estilos

El estilo se manejo originalmente con SASS, pero se migro a Styled-Components. Podria haberse hecho con CSS modules o SASS modules para mantener los beneficios de SASS evitando colisión de estilos debido al hashing que hacen los módulos.

## Hosting

Debido a el servidor local, se utilizo Heroku para desplegar el proyecto. Si se delegaran las funciones del servidor a Serverless estaría en Netlify donde se pueden aprovechar los beneficios de despliegue continuo y versiones en prueba con mas facilidad.
