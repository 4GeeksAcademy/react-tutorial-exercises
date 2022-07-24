import React from "react";
import ReactDOM from "react-dom";

let age = Math.floor(Math.random() * 40) + 10;

const Profile = () => {
	// Add your code below this line:
	if (age >= 21) {
		return (
			<div className="col-3 mx-auto mt-5 rounded border">
				<img src="../../.learn/assets/05.2-using-variables.jpg" alt="Profile picture" className="w-100 img-fluid" />
				<h2>John Doe</h2>
				<p>Age: {age}</p>
				<p>I can drink! Let's party tonight!</p>
			</div>
		);
	} else {
		return (
			<div className="col-3 mx-auto mt-5 rounded border">
				<img src="../../.learn/assets/12.1-conditionals.jpg" alt="Profile picture" className="w-100 img-fluid" />
				<h2>John Doe</h2>
				<p>Age: {age}</p>
				<p>I can't drink, I'm still a kid :(</p>
			</div>
		);
	}
};

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Product />
ReactDOM.render(<Profile />, myDiv);
