import React from 'react'
import PropTypes from 'prop-types';

const CustomaerEdit = ({name, dni, age}) =>{
    return(
        <div>
            <h2>Edición del cliente.</h2>
            <h3>Nombre: {name} / DNI: {dni} / Edad: {age}</h3>
        </div>
    );
};

CustomaerEdit.propTypes ={
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.string,
};

export default CustomaerEdit;
