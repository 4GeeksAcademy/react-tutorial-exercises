import React from 'react';

//Do not change this object, just change the PersonCard component code
const person = {
    first_name: 'Harry',
    last_name: 'Wane',
    age: 12
};

const PersonCard = () => {
    
    let warning = '';
    if(person.age) warning = (<div className="alert alert-danger">He cant drink</div>);
    return (<div>
        <span>{warning}</span>
        <p>My Name is { person.first_name + ' ' + person.last_name }</p>
        <p>and I am is { person.age } years old</p>
    </div>);
};

export default PersonCard;