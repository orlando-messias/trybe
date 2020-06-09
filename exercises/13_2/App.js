import React from 'react';
import './App.css';
import Button from './Button';
import Img from './Img';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      dog: '',
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.getDataApi = this.getDataApi.bind(this)
  }

  getDataApi(){
    this.setState({isLoaded: false});
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(dogs => dogs.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          dog: result.message,
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dog.includes("terrier")) return false;
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem('dog', this.state.dog)
  }

  componentDidMount() {
    this.getDataApi();
  }

  render(){
    const { error, isLoaded, dog } = this.state;
    if (error) return <div className="main error">Error: {error.message}</div>
    else if (!isLoaded) return <div className="main">Loading... <Button update={this.getDataApi} dogs={dog}/></div>
    else {
      return (
        <div className="main">
          <Img dog={dog} />
          <Button update={this.getDataApi} dogs={dog}/>
          {alert(`Dog breed: ${dog.split('/')[4]}`)}
        </div>
      );
    }
  }
}

export default App;
