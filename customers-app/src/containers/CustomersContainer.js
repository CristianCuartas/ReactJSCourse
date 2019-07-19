import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import {fetchCustomers} from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {

    componentDidMount() {
        if(this.props.customers.length === 0){
            this.props.fetchCustomers();
        }
    }
    
    handleAddNew = () =>{
        this.props.history.push('/customers/new');
    }
    handleHomePage = () =>{
        this.props.history.push('/');
    }
    
    renderBody = customers =>(
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomerList>
            <br/>
            <CustomersActions>
                <Button className="btn" color='info' onClick={this.handleAddNew}> Nuevo cliente</Button>
                <br/>
                <br/>
                <Button className="btn" outline color='info' onClick={this.handleHomePage}> Inicio</Button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps ={
    customers: []
}

const mapDispatchToProps = state =>({
    customers: getCustomers(state)
});

export default withRouter (connect(mapDispatchToProps, {fetchCustomers})(CustomersContainer));

        // ó
// const mapDispatchToProps = {fetchCustomers};
// export default withRouter (connect(null, mapDispatchToProps)(CustomersContainer));
