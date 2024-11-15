//Crea un codigo el cual imprima por pantalla I Love React, pero que se imprima como un componente.

//Importamos a las bibliotecas de Recat.
import React from "react";
import ReactDOM from "react-dom";

const PrintHello = () => {
	return <h1>I Love React</h1>;
};

ReactDOM.render(<PrintHello />), document.querySelector("#myDiv");