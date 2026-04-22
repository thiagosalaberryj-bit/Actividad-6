# Actividad 6 - Login simple con JavaScript

## Que cambie y por que

Refactorice el archivo `js/main.js` porque estaba funcional, pero desordenado y con funciones poco descriptivas.

Ahora el codigo sigue mejor las ideas de Clean Code en JavaScript:

- Nombres claros para variables y funciones.
- Funciones chicas con una sola responsabilidad.
- Validaciones separadas de la logica de eventos.
- Flujo principal inicializado desde una funcion unica.
- Mensajes de error y exito centralizados.

## Mejoras aplicadas

1. Renombre variables generales a nombres mas claros.
2. Renombre la funcion de password aleatorio y la hice mas legible.
3. Agregue funcion para validar email.
4. Agregue validacion basica de formulario:
	- Email no vacio
	- Password no vacio
	- Email con formato valido
	- Password de minimo 8 caracteres
5. Agregue notificacion final cuando todo esta correcto:
	- Muestra "Datos ingresados correctamente."

## Buenas practicas usadas sobre este codigo

- Evitar funciones gigantes que hagan todo junto.
- Evitar nombres como `g`, `l`, `s` cuando el contexto no es obvio.
- Separar generacion de password, validacion y eventos.
- Evitar repetir logica en multiples partes.
- Mantener un punto de entrada claro (`initializeLoginForm`).

## Como probar rapido

1. Abrir `index.html` en el navegador.
2. Click en "generar contraseña" para autocompletar password.
3. Marcar "Mostrar contraseña" para ver el texto.
4. Completar email y password.
5. Presionar "Iniciar sesión" y verificar la notificacion.

## Referencia

Tomado como guia de estilo:

- https://github.com/ryanmcdermott/clean-code-javascript
