import React from 'react';
import Pokemon from './Pokemon'
import ButtonNext from './ButtnoNext'
import ButtonFilter from './ButtonFilter';

class Pokedex extends React.Component{
  render(){
    // const {pokedex, item} = this.props
    return (
      <div>
        <Pokemon pokemon={this.props.pokedex[this.props.item]} />
        <ButtonNext next={this.props.next} />
        <ButtonFilter filter={this.props.filter} />
      </div>
    )
  }
}

export default Pokedex;