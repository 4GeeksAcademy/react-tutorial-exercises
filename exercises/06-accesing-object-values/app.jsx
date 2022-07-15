import React from "react";
import ReactDOM from "react-dom";

const product = {
	name: "Nike Mercurial Superfly 8Max",
	type: "Firm-Ground Soccer Cleats",
	price: 295,
	image: "../../.learn/assets/06-accessing-object-values.webp",
	stars: 5,
	button: {
		label: "Shop Now",
		url: "https://www.nike.com/t/mercurial-superfly-8-elite-fg-firm-ground-soccer-cleats-htj6pt/DN3779-375",
	},
};

const output = (
	<div className="col-2 mx-auto mt-5 rounded border">
		<img src="Here goes the image url" alt="Wrong Image!" className="img-fluid w-100" />
		<div className="col-12 p-3">
			<h5>Product's Name</h5>
			<span className="text-secondary">Product's Type</span>
			<p>$ Product's price</p>
			<p>Reviews: Product's Stars</p>
			<a href="Here goes the button url" className="w-100 btn btn-dark" target="_blank">
				Button's label
			</a>
		</div>
	</div>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
