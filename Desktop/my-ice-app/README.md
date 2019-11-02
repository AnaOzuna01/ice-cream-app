# ice-cream-app
Proyecto ice-cream-ordering-app
[Ana Miguelina Ozuna Lugo] [20175076]

Para la inicializacion del proyecto se instalaron algunas dependencias, entre ellas esta:
Mongodb, que es la base de datos utilizada.
Passport, me ayuda a verificar la autenticacion de los usuarios creados.
y express.

Para poner en funcionamiento el proyecto, se ejecuta:
node app.js

A pesar de no estar dentro de los requerimientos, se ha implementado una pequeña interfaz grafica, solo para mejor visualizacion.

El concepto de esta aplicacion se basa en lo siguiente, crear un usuario que cree una lista, con el fin de en esta ir anotando las ordenes de los demas usuarios que se loguen, en caso de no un logueo exitoso, que se registre para poder proceder, de lo contrario no podra ingresar.

El puerto por el cual corre, es el siguiente, http://localhost:3000/

Para la construccion de este proyecto me auxilie de tutoriales para aprender las herramientas
necesarias para terminar dicha asignacion. Tambien tuve que familiarizarme con la base de datos 
MongoDB que fue la utilizada. Conte con la ayuda de la documentacion de la pagina para 
las cosas que no sabia manejar.

Mientras me documentaba sobre como hacer el trabajo, y que patron de dieño implementar, encontre 
que el patron de arquictetura de software Modelo-Vista-Controlador era el ideal para mi, porque 
la linea de construccion que esta llevando era definir distintos bloques e interlazarlos entre ellos.
Esto es justo lo que me permite dicho patron, tener distintos componentes que represente la informacion 
en construccion y cuando se necesiten comunicar entre ellas solo hago una instancia de esta evitando de
esta manera evito lo que es la reutilizacion, y estar sobreescibiendo una y otra vez.