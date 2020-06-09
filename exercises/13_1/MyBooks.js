import React from 'react'
import BooksList from './BooksList'

class MyBooks extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showList: false,
      actualItem: '',
    }
  }

  toggleShowList = () => {
    this.setState((state) => ({showList: !state.showList}))
  }

  changeActualItem = (item) => {
    this.setState({actualItem: item})
  }

  render(){
    const content = [
      {id: 1, item: 'O Poder do Hábito'},
      {id: 2, item: 'Vida e Destino'},
      {id: 3, item: 'O Homem de Giz'},
      {id: 4, item: 'Por que fazemos o que fazemos?'},
    ];

    return(
      <div>
        <div>
          <div onClick={this.toggleShowList}><h3>{this.state.actualItem === '' ? this.props.children : this.state.actualItem} </h3></div>
          {this.state.showList && 
          <BooksList toggleShowList={this.toggleShowList} list={content} actualItem={this.state.actualItem}
            changeActualItem={this.changeActualItem}/>}
        </div>
      </div>
    )
  }
}

export default MyBooks;