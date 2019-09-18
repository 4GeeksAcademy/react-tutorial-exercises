import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};

const content = (
	<div className="card m-5">
		<img className="card-img-top" src={data.image} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a href={data.button.url} className="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>
);

/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

ReactDOM.render(content, document.querySelector("#myDiv"));
