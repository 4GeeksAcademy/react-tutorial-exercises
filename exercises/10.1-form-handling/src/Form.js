import React from 'react'
import './bootstrap.css'

class Form extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 name: '',
			 email: '',
			 application: '',
			 topic: 'ReactJS',
		}
	}

	nameHandler=(event) =>{
		this.setState({
			name: event.target.value
			});
	}

	emailHandler=(event) =>{
		this.setState({
			email: event.target.value
		});
	}

	applicationHandler=(event) =>{
		this.setState({
			application: event.target.value
		});
	}

	topicHandler=(event) =>{
		this.setState({
			topic: event.target.value
		});
	}

	submitHandler=(event) =>{
		const { name, email, application, topic } = this.state
		console.log(application)
		alert(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}`)
		// event.preventDefault() 
	}

	render() {
		const { name, email, application, topic } = this.state
		return (
			<form onSubmit={this.submitHandler}>
				<div className="form-group">
					<label>Name: </label>
					<input 
						type="text" 
						className="form-control"
						value={name}
						onChange={this.nameHandler}
					/>
				</div>
				<div className="form-group">
					<label>Email: </label>
					<input 
						type="email" 
						className="form-control"
						value={email}
						onChange={this.emailHandler}
					/>
				</div>
				<div className="form-group">
					<label>Aplication: </label>
					<textarea 
						className="form-control"
						value={application}
						onChange={this.applicationHandler}
					/>
				</div>
				<div className="form-group">
					<label>Topic: </label>
					<select 
						className="form-control"
						value={topic}
						onChange={this.topicHandler}
					>
        				<option>ReactJS</option>
        				<option>AngularJS</option>
        				<option>VueJS</option>
      				</select>
				</div>
				<center>
					<button type="submit" className="btn-lg btn btn-primary">Apply</button>
				</center>
			</form>
		)
	}
}

export default Form