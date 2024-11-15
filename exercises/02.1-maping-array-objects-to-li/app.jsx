//importamos las librerias de react.
import React from "react"; /*Genera interfaces de usuarios*/
import ReactDOM from "react-dom"; /*Muestra los comonentes por pantalla*/

/*Horse, Turtle, Elephant, Monkey*/

//Creamos un arreglo de objetos que contengan los nombres de los animales.
const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];
const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li key={index}>{singleAnimal.label}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
