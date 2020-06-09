import React from 'react';
import './App.css';
import Button from './Button';
import Alert from './Alert';
import MyBooks from './MyBooks';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showModal: false,
      isDisabledButton: false,
    }
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisabledButton: !state.isDisabledButton,
      }
    ))
  }

  render(){
    return (
      <div className="App">
        <div>
          <Button content="Clique aqui" isDisable={this.state.isDisabledButton} showComponent={this.changeShowComponent}/>
          {this.state.showModal &&
            <Alert
              hideComponent={this.changeShowComponent}
              info={{title: 'My Books List', content:'Home | Favorites | About', timeSeconds: 3}}
            />}
        </div>
        <div>
          <MyBooks>
            My Favorite Books
          </MyBooks>
        </div>
      </div>
    );
  }

}

export default App;
