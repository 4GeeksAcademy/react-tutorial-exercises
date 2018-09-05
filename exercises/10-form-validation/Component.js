//we have to import react.js on every file that contains JSX
import React from 'react';

//the component is still a normal function
export class Form extends React.Component{
    
    constructor(){
        super();
        this.state = {
            errors: [],
            email: ''
        };
    }
    
    sendForm(){
        let errors = [];
        
        if(this.state.email==''){
            errors.push('Please type an email');
        }
        this.setState({ errors });
    }
    
    render(){
        return (
            <div>
                {(this.state.errors.length > 0) ?
                    <div className="alert alert-danger">
                        <ul>{this.state.errors.map((err,i) => (<li key={i}>{err}</li>))}</ul>
                    </div>
                    :
                    ''
                }
                <input className="form-control" 
                    value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value})} 
                />
                <button onClick={() => this.sendForm()}>Click me</button>
            </div>
        );
        
    }
}

// we have to export the variable to be used on any other file
export default Form;