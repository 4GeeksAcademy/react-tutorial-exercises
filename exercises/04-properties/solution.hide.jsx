import React from "react";
import ReactDOM from "react-dom";

const login = (e) => {
	alert("Logged In successfully!");
};

const output = (
	<form className="card col-3 mx-auto mt-5 p-4" onSubmit={login}>
		<h2>Login</h2>
		<input placeholder="Enter your email" type="email" className="w-100 rounded form-control mt-3" />
		<input placeholder="Enter your password" type="password" className="w-100 rounded form-control my-2" />
		<button className="btn btn-success w-100 mt-3" onClick={login}>
			SUBMIT
		</button>
	</form>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
