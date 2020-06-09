import React from 'react';
import './css/styles.css';

class ButtonFilter extends React.Component{
  
  handleClick(event){
    this.props.filter(event.target.innerHTML);
  }

  render(){
    return (
      <div>
        <p className="filterP">Filter by Type:</p>
        <button onClick={this.handleClick.bind(this)}>Fire</button>
        <button onClick={this.handleClick.bind(this)}>Psychic</button>
        <button onClick={this.handleClick.bind(this)}>All</button>
      </div>
    )
  }
}

export default ButtonFilter;