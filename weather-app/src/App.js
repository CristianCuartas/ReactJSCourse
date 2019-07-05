import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import {Row,Col, Grid} from 'react-flexbox-grid';
import ForescastExtended from './components/ForecastExtended';

const cities=[
  'Bogotá, CO',
  'Barcelona, ES',
  'Washington, US',
  'Rio de Janeiro, BR',
  'Ciudad de México, MX',
  'Santiago, CL',
  'Buenos Aires, AR',
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city: null,
    };
  };

  handleSelectionLocation = city =>{
    this.setState({city: city});
  }

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
              <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={10}>
                <div className="details">
                { this.state.city === null 
                  ? null
                  : <ForescastExtended city={this.state.city}/>
                }
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
