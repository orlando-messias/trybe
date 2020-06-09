import React from 'react'
import data from '../data'
import Pokedex from './Pokedex';
import './css/styles.css';

class App extends React.Component{
  render(){
    return (
      <div className="card-parent">
        {data.map((item, index) => <Pokedex key={index} pokedex={item} />)}
      </div>
    )
  }
}

export default App;