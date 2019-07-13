import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LoacationListContainer';
import {Row,Col, Grid} from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


import './App.css';

const cities=[
  'Bogotá, CO',
  'Barcelona, ES',
  'Washington, US',
  'Rio de Janeiro, BR',
  'Ciudad de México, MX',
  'Santiago, CL',
  'Buenos Aires, AR',
];

//Stores index.js
class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  };

  render(){
    return (
      <Grid>
        <Row>
          <AppBar>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <div style={{marginTop: "105px"}}>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer
              cities={cities}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={10}>
                <div className="details">
                  <ForecastExtendedContainer/>
                </div>
              </Paper>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}
export default App;

