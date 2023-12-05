# Card_API

<h3>Tecnologias y habilidades utilizadas BACKEND:</h3> 
Node JS, Express JS, Typescript, MYSQL, Sequelize (ORM), DRY, SOLID

<h3>Informacion de lo realizado:</h3> 
Manejador de tarjetas con todas metodos de un CRUD.

Incluye:
<ul>
    <li>Visualizacion de todas las tarjetas</li>
    <li>Visualizacion de una sola tarjeta</li>
    <li>Agregado de tarjeta</li>
    <li>Actualizacion de tarjeta</li>
    <li>Eliminacion de tarjeta</li>
    <li>Validaciones de cada uno de los campos con Express-Validator</li>
</ul>

<h3>Estructura carpetas:</h3> 

Proposito:
<ul>
    <li>Routes: Donde estan cada una de las rutas que se conectan con los controladores.</li>
    <li>Controllers: Cada controlador solo se encargara de recibir informacion y enviarla.</li>
    <li>Services: El servicio se encarga de la logica de negocio, asi los controladores no tienen tanta responsabilidades.</li>
    <li>Middlewares: Funciones que se encargan de validar antes de que se reciba la data</li>
    <li>Models: Modelo de la base de datos</li>
    <li>Config: Configuracion de la base de datos con Sequelize</li>
    <li>Interfaces: Interfaces que definan como sera la data</li>
    <li>Utils: Funciones exportables que respaldan el principio DRY</li>
</ul>

<h3>Como Correr el proyecto:</h3> 

Pasos:
<ol>
    <li>Descargar proyecto del link del repositorio: https://github.com/rafaeldoleo14/Card_API.git</li>
    <li>Installar modulos de node: npm install</li>
    <li>Ejecutar comando modo desarrollo: npm run dev</li>
    <li>Para ver los usuarios ya registrados (dejare algunos de prueba), poner en el navegador: http://localhost:3000/api/card</li>
    <li>Si se necesita probar los demas metodos usar postman o bajar el front</li>
</ol>

Nota:
<ol>
    <li>No necesita tener Mysql instalado, estoy usando mysql de railway, asi que todo funciona sin problemas.</li>
</ol>

<h3>Pasos realizados segundo bloque BACKEND (TODOS REALIZADOS):</h3> 

Finalizados:
<ol>
    <li>Debe contener todos los métodos de CRUD. (aunque no los use todos) LISTO</li>
    <li>Al momento de agregar tarjeta esta debe ser almacenada en alguna base de
        datos o archivo de texto (ej. Firebase) LISTO</li>
    <li>Lo único que se debe validar al momento de agregar es que los campos
        requeridos sean enviados. LISTO</li>
    <li>Los API deben de devolver correctamente respuestas HTTP para cada caso, (ej.
        404, 500, 302, 200, etc). LISTO
    </li>
</ol>
