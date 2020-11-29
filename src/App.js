//Una vez que creo una aplicación react introduciendo en el terminal   npx create-react-app .    la librería nos instalará todos los elementos necesarios para trabajar.

//Para dejar un proyecto básico, podemos eliminar todos los archivos que no necesitemos, logos de React dentro de la carpeta public y dentro de la carppeta src, código dentro de App.css e index.css, el contenido JSX que hay dentro de la función App y el import del logo en la primera línea dentro de App.js
//También podemos eliminar App.test.js y setupTest.js si no vamos a hacer testing a la aplicación.

//NOTA: Después de empezar a trabajar con el proyecto he eliminado también del archivo manifest.json en public, el array icons para que no me salgan molestos mensajes de error referente a logos y favicon cuando estoy trabajando con el terminal del navegador.

//Iniciaremos el servidor en la terminal con    npm start   y lo paramos con   control c
//Cuando lo iniciamos automáticamente abrirá el localhost:3000 en chrome. Si está ocupado nos preguntará si queremos abrir localhost:3001

//BÁSICO. Probar nuestro primer "Hola mundo": ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import "./App.css";

// function App() {
//   return <h1>Hola mundo</h1>;
// }

// export default App;

//BÁSICO. Retornar una variable: //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//En JSX no usamos el $ delante de las llaves para retornar variables, arrays, etc. Sólo las llaves {}

// import "./App.css";

// function App() {
//   let nombre = "Ilona";
//   return <p>Me llamo {nombre}</p>;
// }

// export default App;

//BÁSICO. Retornar el contenido de un objeto: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import "./App.css";

// function App() {
//   let persona = {
//     nombre: "Manu",
//     edad: 50,
//     profesion: "Developer",
//   };
//   return (
//     <p>
//       Me llamo {persona.nombre}, tengo {persona.edad} años y soy{" "}
//       {persona.profesion}
//     </p>
//   );
// }

// export default App;

//IMPORTANTE. No podemos hacer return de dos o más elementos con React, por ello siempre deberemos guardar todas nuestras etiquetas dentro de un único div y ahí sí que podremos anidar todas las etiquetas que queramos.
//ADEMÁS, para no llenar el código de divs, react nos permite sustitutuirlos por estas etiquetas JSX <> </> así que si no tenemos que usar la etiqueta div para incluir atributos clases o lo que sea, usaremos las vacías.
//Con el ejemplo anterior:

// import "./App.css";

// function App() {
//   let persona = {
//     nombre: "Manu",
//     edad: 50,
//     profesion: "Developer",
//   };
//   return (
//     <>
//       <p>Me llamo {persona.nombre}</p>
//       <p>Tengo {persona.edad} años</p>
//       <p>Soy {persona.profesion}</p>
//     </>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IMPORTAR Y EXPORTAR COMPONENTES

//Cuando creamos componentes, (secciones) en React, por convención se escriben con la primera letra en mayúscula para distinguirlos de los de javaScript normales. P.ej. Footer.js
//La idea es que el Archivo App.js lo usaremos únicamente como para alojar las rutas donde tenemos nuestros componentes. (Se verá más adelante).

//Un ejemplo de sintaxi (con el archivo Main.js) sería:
//EXPORTAR:     export default Main;  (Al final del componente)
//IMPORTAR:     import Main from "./Main"  (Al inicio del archivo que recibe ese componente)

//NOTA. Para hacer todos lo ejercicios voy a utilizar únicamente el archivo App.js sin importar ni exportar ningún objeto ni componente. Es para que se vea el código más claro.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BÁSICO. Devolver un ARRAY.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Se utliliza el método .map  para meter los resultados en una variable y después hacer return de la variable:

// import "./App.css";

// //Creo el array fuera de la función (o lo importo si fuera el caso).
// const coches = ["Jeep", "Ford", "BMW"];

// function App() {
//   const mostrarCoches = coches.map(function (coche) {
//     return <p>{coche}</p>;
//   });
//   return mostrarCoches;
// }

// export default App;

//BÁSICO. Devolver un ARRAY DE OBJETOS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Se utliliza el método .map  para meter los resultados en una variable y después hacer return de la variable:

// import "./App.css";

//Creo el array de objetos fuera de la función (o lo importo si fuera el caso).
// let personas = [
//   {
//     nombre: "Ilona",
//     edad: 43,
//     profesion: "Dance Teacher",
//   },
//   {
//     nombre: "Kev",
//     edad: 63,
//     profesion: "Dive Instructor",
//   },
//   {
//     nombre: "Manu",
//     edad: 50,
//     profesion: "Developer",
//   },
// ];

// function App() {
//   const mostrarPersonas = personas.map(function (nombre) {
//     return (
//       <>
//         <h2>Nombre: {nombre.nombre}</h2>
//         <p>Edad: {nombre.edad}</p>
//         <p>Profesión: {nombre.profesion}</p>
//       </>
//     );
//   });
//   return mostrarPersonas;
// }

// export default App;

//BÁSICO. Pasar UN OBJETO por PARÁMETROS A UN COMPONENTE de React.++++++++++++++++++++++++++++++++++++++++++++++++++++

//Tengo 2 partes: 1 - El archivo padre que envía el objeto. (En este caso App.js)
//                2 - El componente que recibe el objeto por parámetros por props (en este caso Gente.js)

// 1 - Envío el objeto
// Esto se hacen como si fueran atributos html

// import "./App.css";

// function App() {
//   let persona = {
//     nombre: "Manu",
//     edad: 40,
//     profesion: "Developer",
//   };
//   return (
//     <Gente
//       nombre={persona.nombre}
//       edad={persona.edad}
//       profesion={persona.profesion}
//     />
//   );
// }

// 2 - Defino el componente Gente.js y le paso el objeto por parámetros para pintarlo en pantalla.

// function Gente(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>{props.nombre}</h1>
//       <p>Edad: {props.edad}</p>
//       <p>Profesion: {props.profesion}</p>
//     </>
//   );
// }

// export default App;

//BÁSICO. Pasar UN ARRAY DE OBJETOS por PARÁMETROS A UN COMPONENTE de React.++++++++++++++++++++++++++++++++++++++++

import "./App.css";

//Creo el array de objetos fuera de la función (o lo importo si fuera el caso).
let personas = [
  {
    nombre: "Ilona",
    edad: 43,
    profesion: "Dance Teacher",
  },
  {
    nombre: "Kev",
    edad: 63,
    profesion: "Dive Instructor",
  },
  {
    nombre: "Manu",
    edad: 45,
    profesion: "Developer",
  },
];

// 1 - Recorro el array de objetos con un .map y lo envío al componente Lista.js
// RERCUERDA: Dentro de un .map lo que está entre los paréntesis del funtion (en este caso "persona" sería el equivalente al personas[i] de un bucle for.

function App() {
  const miArray = personas.map(function (persona) {
    return (
      <div key="una_persona">
        <Lista
          nombre={persona.nombre}
          edad={persona.edad}
          profesion={persona.profesion}
        />
      </div>
    );
  });
  return miArray;
}

// 2 - Defino el componente Lista.js y le paso el objeto por parámetros para pintarlo en pantalla.

function Lista(props) {
  console.log(props);
  return (
    <>
      <h1>{props.nombre}</h1>
      <p>{props.edad}</p>
      <p>{props.profesion}</p>
    </>
  );
}

export default App;

//****************************************************************************************************************
//****************************************************************************************************************

//SOBRE LAS KEYS

//Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.
//at Array
//at App
//Esto es por que React utiliza estas "Keys" para sus procesos por detrás.
//La key es un atributo que hay que añadir a la etiqueta padre solo cuando RECORREMOS ARRAYS, por ejemplo haciendo un    .map como es este caso. No al resto de las etiquetas.

//Así que este caso cambiaríamos las etiquetas <>  </>  por <div> quedarían así:
//<div key="loquesea">
// <h2>{persona.nombre}</h2>
// <p>Edad: {persona.edad}</p>
// <p>Profesión: {persona.profesion}</p>
//</div>
//Y así eliminaríamos ese error. (No inserto la key directamente para que se vea la explicación)

//****************************************************************************************************************

//SOBRE EL CSS

//Podemos usar el archivo App.css que incluye React que habremos limpiado de código previamente ya que contiene el css de la página de react por defecto.
//O podemos crear nuestros propios archivos css que tendremos que IMPORTAR a App.js para ser usados.

//IMPORTANTE: En react al atributo class por convención se le le llama className, p.ej: <div className=""></div>

//****************************************************************************************************************
