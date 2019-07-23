import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';
import logo from '../images/React.js_logo-512.png';
import './../css/HomeContainer.css'

class HomeContainer extends Component{
    handleOnClick = () =>{
    this.props.history.push('/customers');
    }
    render(){
        return(
                <AppFrame 
                    header='H O M E'
                    body={
                        <div className="App-header">
                        <br/> <br/>
                            <img src={logo} className="App-logo" alt="logo" />
                            <div style={{marginTop:"70px"}}>
                            <CustomersActions>
                                <Button  outline color="primary" onClick={this.handleOnClick}>
                                    Listado de clientes 
                                </Button>
                            </CustomersActions>
                            </div>
                        </div>  
                    }
                />
        );
    }
}

HomeContainer.propTypes ={

};

export default withRouter(HomeContainer);