import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import './App.css';
import CustomersContainer from './components/CustomersContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>
  renderCustomerContainer = () => <h1>Customer Container</h1>
  renderCustomerListContainer = () => <h1>Customer List Container</h1>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render(){
    return (
      <Router>    
        <div className="App">
        
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/customers" component={CustomersContainer}/>
            <Switch>
              <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
              <Route path="/customers/:dni" component={this.renderCustomerContainer}/>
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
