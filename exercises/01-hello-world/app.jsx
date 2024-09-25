//Crear un texto con react, el cual genere una tag span que contenga una tag strong.

//Importamos las librerias de react.
import React from "react";
import ReactDOM from "react-dom";

//Ahora creamos un nuevo componente el cual contenga la tag span.
let output = (
	<span>
		James is <strong>12</strong> years old
	</span>
);

//Creamos una constante, la cual nos trae el valor de id.
const myDiv = document.querySelector("#myDiv");
//llamamos a la funcion ReactDOM para que se muestre por pantalla el componente creado.
ReactDOM.render(output, myDiv);

