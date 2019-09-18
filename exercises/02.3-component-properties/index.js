import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	// 2) add here the new properties into the proptypes object
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PopType.string,
	buttonLabel: PropType.string
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		imageUrl="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
		title="Bob Dylan"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades."
		buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
		buttonLabel="Go to wikipedia"
	/>,
	document.querySelector("#myDiv")
);
