import React from 'react'
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import {Button} from 'reactstrap';
import {Prompt} from 'react-router-dom';


    // VALIDACIÓN AL FIELD

const isRequired = value =>(
    !value && "Este campo es requerido."
);

const MyField =({input, meta, type, label, name }) =>(
    <div>
        <label htmlFor={name}>{label} &nbsp;</label>
        <input {...input} type={ !type ? "text" : type}/>
        <br/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);
const isNumber = value  => (
    isNaN(Number(value)) && "Campo de tipo numérico."
);
const toNumber= value => value && Number(value); 

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) =>{
    return(
        <div>
            <h2>Edición del cliente.</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    label="Nombre:"
                    name="name" 
                    component={MyField} 
                    type="text"
                    //Validación por medio de funciones
                    validate={isRequired}
                    />
                <Field 
                    label="DNI:"
                    name="dni" 
                    component={MyField}  
                    type="text"
                    validate={[isRequired, isNumber]}
                    />
                <Field 
                    label="Edad:"
                    name="age" 
                    component={MyField}  
                    type="number"
                    validate={[isRequired, isNumber]}
                    parse={toNumber}
                    />
                    <CustomersActions>
                        <Button className="btn btn-md" color={"warning"} type="submit" disabled={ pristine || submitting}>Aceptar</Button>
                        &nbsp; &nbsp;
                        <Button  type="button" className="btn btn-md"  disabled={submitting} outline color={"danger"} onClick={onBack}>Cancelar</Button>
                    </CustomersActions>
                    <Prompt 
                        when={!pristine && !submitSucceeded}
                        message="Se perderan los datos si continúa."
                    ></Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes ={
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
    onBack: PropTypes.func.isRequired,
};
const CustomerEditForm = reduxForm(
    {
    form: 'CustomerEdit',
    // validate
    }
)(CustomerEdit)
export default setPropsAsInitial(CustomerEditForm);

{
    /*
    VALIDACIÓN GLOBAL
        const validate = values =>{
        const error = {};
        if(!values.name){
            error.name = "El campo nombre es requerido.";
        }
        if(!values.dni){
            error.dni = "El campo DNI es requerido.";
        }
        if(!values.age){
            error.age = "El campo edad es requerido.";
        }
        return error;
    };
    */
}