import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import AppFrame from './AppFrame';
import CustomersActions from './CustomersActions';

class HomeContainer extends Component{
    handleOnClick = () =>{
    console.log('Hola')
    this.props.history.push('/customers');
    }
    render(){
        return(
            <div>
                <AppFrame 
                    header='Home'
                    body={
                        <div>
                        Esta es la pantall inicial
                        <CustomersActions>
                            <Button color="primary" onClick={this.handleOnClick}>
                            Listado de clientes 
                            </Button>
                        </CustomersActions>
                        </div>
                    }
                />
            </div>
        );
    }
}

HomeContainer.propTypes ={

};

export default withRouter(HomeContainer);