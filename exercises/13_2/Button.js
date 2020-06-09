import React from 'react';

export default class Button extends React.Component {
  
  render(){
    return(
      <div>
        <button type="button" onClick={this.props.update}>Next >></button>
      </div>
    )
  }
}