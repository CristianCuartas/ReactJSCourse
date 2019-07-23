import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import CustomersActions from './CustomersActions';
const CustomerData =({id, name, dni, age, onBack, isDeleteAllow,onDelete})=>{
    return(
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
                
            </div>
                <CustomersActions>
                    <Button className="btn btn-md" color={"warning"} onClick={onBack}>Volver</Button>
                    &nbsp; &nbsp;
                    {isDeleteAllow && 

                        <Button className="btn btn-md" outline color={"danger"} onClick={() => onDelete(id)}>
                        Eliminar
                        </Button>
                        
                        }
                </CustomersActions>
        </div>
    );
};

CustomerData.propTypes ={
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete:PropTypes.func,
    
};

export default CustomerData;
