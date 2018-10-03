import React from 'react';

//Do not change this object, just change the PersonCard component code
const person = {
    first_name: 'Harry',
    last_name: 'Wane',
    age: 12
};

const PersonCard = () => {
    // update this function to make it return the expected html
    return <p>{ person.first_name + ' ' + person.last_name }</p>;
};

export default PersonCard;