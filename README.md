# Prueba para IDO Learning!

Este repositorio contiene el código para la prueba de conocimiento de iDO Learning, explico aspectos a tomar en cuenta debido a que es una prueba.

## SECRET KEY
El archivo env.js se ha versionado, sin embargo esto solo se hace como proposito de que no falle el código al momento de clonarlo, en un ambiente en producción queda excluido con el .gitignore

## Ruta del login
La ruta del lógin funciona por post y debe contener el dato del username.

## Ruta de validación
La ruta de validación funciona por get y el token debe ser agregado al cabecero como un bearer token

## Ejecución
    node app.js
    o
    npm start

### Librerias
- Express
- Passport y Passport-JWT
- jsonwebtoken
- dotenv
