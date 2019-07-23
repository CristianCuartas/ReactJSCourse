import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import {Route, withRouter} from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import {fetchCustomers} from './../actions/fetchCustomers';
import {updateCustomer} from './../actions/updateCustomer';
import {deleteCustomer} from './../actions/deleteCustomer';

class CustomerContainer extends Component {
//<div>
// <h3>Datos del Cliente</h3>
// <p>{`Nombre: ${this.props.customer.name}`}</p>
// </div>
componentDidMount() {
    if(!this.props.customer){
        this.props.fetchCustomers();
    }
    // [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    //     const suma = valorAnterior + valorActual;
    //     console.log(`Valor anterior: ${valorAnterior}, Valor Actual: ${valorActual}, Indice: ${indice}`);
    //     return suma;
    // }, 10)
}

handleSubmit = values =>{
    console.log(JSON.stringify(values))
    const {id} = values;
    return this.props.updateCustomer(id, values)
}
handleOnBack = () =>{
    this.props.history.goBack();
}
handleOnSubmitSuccess = () =>{
    this.props.history.goBack();
}
handleOnDalete = (id) =>{
    this.props.deleteCustomer(id)
    .then(res => {this.props.history.goBack()});
}

    renderCustomerControl = (isEdit, isDelete) =>{
        if(this.props.customer){
            const CustomerControl = isEdit ?  CustomerEdit : CustomerData;
            return <CustomerControl 
                        {...this.props.customer} 
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack}
                        isDeleteAllow={!!isDelete}
                        onDelete={this.handleOnDalete}
                        />
        }
        return null;
    }
    renderBody = () =>(
        <Route path="/customers/:dni/edit" children={
            ({match: isEdit}) => (
                <Route path="/customers/:dni/del" children={
                    ({match: isDelete}) =>(this.renderCustomerControl(isEdit, isDelete))
                } /> )
        } />
    )
    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`}
                    body={
                        this.renderBody()
                    }
                    />
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));
