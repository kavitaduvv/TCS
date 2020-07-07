import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountrySelect from './CountrySelect';

const arrayOfCountries = [
  {
    id: '1',
    name: 'Singapore'    
  },
  {
    id: '2',
    name: 'Malaysia'    
  },
  {
    id: '3',
    name: 'Indonesia'    
  },
  {
    id: '4',
    name: 'Philipines'    
  },
  {
    id: '5',
    name: 'Thailand'    
  },
];

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: 'Singapore'
    }
  }

  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  }

  render() {
    return (
      <div className="App">
         <p className="App-intro">
          Select a Location :  
          <CountrySelect arrayOfCountries={arrayOfCountries} onSelectChange={this.handleSelectChange} /> <br /><br />
          <div>
            Selected value: {this.state.selectedValue}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
