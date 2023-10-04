/* Descripción del funcionamiento del código:

Código que almacena y muestra la información, utilizando json, clases, variables, funciones e instancias. 
*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// const $n = document.querySelector('name'); línea sin modificar
const $n = document.querySelector('.name'); //Línea modificada con la .clase
// const $b = document.querySelector('#blog'); línea sin modificar
const $b = document.querySelector('.blog'); //Línea modificada con el .blog
const $l = document.querySelector('.location'); //Línea de código faltante.

async function displayUser(username) { //Se agregó la palabra async porque era necesaria
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Línea de código que se agregó para el llenado de la tabla
  console.log(data);
  /*Líenas de código sin modificar
   $n.textContent = '${data.name}';
   $b.textContent = '${data.blog}';
   $l.textContent = '${data.location}';*/

  //Líneas de código modificadas para darle funcionalidad.
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

//Línea de código que manda a llamar al método con el usuario
displayUser('stolinski').catch(handleError);

