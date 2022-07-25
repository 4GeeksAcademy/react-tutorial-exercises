import React from "react";
import ReactDOM from "react-dom";

const Profile = () => {
	let age = Math.floor(Math.random() * 40) + 10;

	return (
        <div className="col-3 mx-auto mt-5 rounded border">
            <img src="../../.learn/assets/05.2-using-variables.jpg" alt="Profile picture" className="w-100 img-fluid" />
            <h2>John Doe</h2>
            <p>Age: {age}</p>
            {
                /* Add your code below this line (Inside the curly brackets): */
                
            }
        </div>
    );
};

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Product />
ReactDOM.render(<Profile />, myDiv);
