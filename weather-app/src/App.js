import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';

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

  handleSelectionLocation = city =>{
    console.log(`handleSelectionLocation ${city}`)
  }

  render(){
    return (
      <div className="App">
        <LocationList 
        cities={cities}
        onSelectedLocation={this.handleSelectionLocation}
        />
      </div>
    );
  }
}

export default App;
