import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import AppFrame from './AppFrame';
import CustomerList from './CustomerList';
import CustomersActions from './CustomersActions';

const customers=[
    {
        "dni":"1",
        "name": "Cristian David Cuartas Hernandez",
        "age": 18
    },
    {
        "dni":"2",
        "name":"Rafael Ricardo Cuartas Hernandez",
        "age":20
    },
    {
        "dni":"3",
        "name": "Juan Fernando Cuartas Hernandez",
        "age":13
    }
];

class CustomersContainer extends Component {

    handleAddNew = () =>{
        this.props.history.push('/customers/new');
    }
    
    renderBody = customers =>(
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomerList>
            <br/>
            <CustomersActions>
                <Button onClick={this.handleAddNew}> Nuevo cliente</Button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);