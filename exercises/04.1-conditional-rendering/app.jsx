//Importamos las librerias de React.
import React from "react"; //Libreria para crear componentes React.
import ReactDOM from "react-dom"; //Libreria para renderisar los componentes de react.
import PropTypes from "prop-types"; //Libreria para vrificar que los componentes que reciban los props sean del tipo correcto.

//Funcion para generar alertas con React.
export const Alert = (props) => {
	//Objeto que contiene el valor de las class.
	const colorClasses = {
		red: "alert-danger",
		yellow: "alert-warning",
	};
	//componente Recat de la Alerta
	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};

//Verificamos los tipos de datos que recibiran los props
Alert.PropTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happened!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="yellow" />
	</div>,
	document.querySelector("#myDiv")
);
