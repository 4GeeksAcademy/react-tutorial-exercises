import React from "react";
import ReactDOM from "react-dom";

function Card() {
	const product = {
		name: "Nike Mercurial Superfly 8Max",
		type: "Firm-Ground Soccer Cleats",
		price: 295,
		image: "../../.learn/assets/06-accessing-object-values.webp",
		stars: 5,
		button: {
			label: "Shop Now",
			url: "https://www.nike.com/t/mercurial-superfly-8-elite-fg-firm-ground-soccer-cleats-htj6pt/CV0958-403",
		},
	};

	return (
		<div className="col-2 mx-auto mt-5 rounded border">
			<img src={product.image} alt="Wrong Image!" className="img-fluid w-100" />
			<div className="col-12 p-3">
				<h5>{product.name}</h5>
				<span className="text-secondary">{product.type}</span>
				<p>$ {product.price}</p>
				<p>Reviews: {product.stars}</p>
				<a href={product.button.url} className="w-100 btn btn-dark" target="_blank">
					{product.button.label}
				</a>
			</div>
		</div>
	);
}

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Card />
ReactDOM.render(<Card />, myDiv);
