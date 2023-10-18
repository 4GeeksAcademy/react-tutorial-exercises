import React from "react";
import ReactDOM from "react-dom";

// Create your function here
const BootstrapCard = () => {
	return (
		<div className="card m-5">
			<img alt="Card image cap" className="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" />
			<div className="card-body">
				<h5 className="card-title">Bob Dylan</h5>
				<p className="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a className="btn btn-primary" href="https://en.wikipedia.org/wiki/Bob_Dylan">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};

// Remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard />, document.getElementById("myDiv"));
