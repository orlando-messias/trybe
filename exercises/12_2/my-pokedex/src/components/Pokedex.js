import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component{
  render(){
    return (
      <Pokemon pokemon={this.props.pokedex} />
    )
  }
}

export default Pokedex;