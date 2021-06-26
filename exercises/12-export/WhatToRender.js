import React from 'react';

//Look how we are not exporting with the default word
export const PersonCard = ({ full_name }) => {
    return <span>{full_name}</span>;
};