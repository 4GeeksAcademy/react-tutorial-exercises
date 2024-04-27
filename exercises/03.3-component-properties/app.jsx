import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			Take me to google
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
	// 2) Add here the new properties into the proptypes object
	description: PropType.string,
	imageUrl: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title={"Bob Dylan"}
		description={"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."}
		imageUrl={"https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"}
		buttonUrl={"http://google.com"}
		buttonLabel={"Take me back"}
	/>,
	document.querySelector("#myDiv")
);
