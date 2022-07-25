import React from "react";
import ReactDOM from "react-dom";

function Cards() {
	const products = [
		{
			name: "Nike Mercurial Superfly 8Max",
			category: "Shoes",
			price: 295,
			image: "../../.learn/assets/06-accessing-object-values.webp",
		},
		{
			name: "Tesla Model S",
			category: "Car",
			price: 65000,
			image: "../../.learn/assets/09.2-components.jfif",
		},
		{
			name: "16-inch MacBook Pro",
			category: "Computer",
			price: 2499,
			image: "../../.learn/assets/11.2-mapping-lists.jfif",
		},
	];

	return <div className="row mt-5">{/* Add your code below this line */}</div>;
}

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Product />
ReactDOM.render(<Cards />, myDiv);
