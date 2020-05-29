import React from 'react'
import Pokemon from './Pokemon'
import data from '../data'

class App extends React.Component{
  render(){
    return <Pokemon pokemon={data[2]} />
  }
}

export default App;