import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src="/asset/bobdylan.png" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string
	// 2) add here the new properties into the proptypes object
};

// 3) change the BootstrapCard to include the other properties.
ReactDOM.render(<BootstrapCard title="Bob Dylan" />, document.querySelector("#myDiv"));
