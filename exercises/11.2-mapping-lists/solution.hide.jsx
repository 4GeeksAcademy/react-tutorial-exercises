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

	return (
		<div className="row mt-5">
            {/* Add your code below this line */}
			{products.map((product, index) => {
				return (
					<div key={index} className="col-2 mx-3 rounded border">
						<img src={product.image} alt="Wrong Image!" className="w-100 h-50" style={{ objectFit: "cover" }} />
						<div className="col-12 p-3">
							<h5>{product.name}</h5>
							<span className="text-secondary">{product.category}</span>
							<p>$ {product.price}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Product />
ReactDOM.render(<Cards />, myDiv);
