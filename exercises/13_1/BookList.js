import React from 'react'

const BooksList = (props) => {
  return(
    <div>
      <div onClick={() => { props.toggleShowList()}}>
        {props.list.map((item) => <li onClick={() => { props.changeActualItem(item.item)}}>{item.item}</li>)}
      </div>
    </div>
  )
}

export default BooksList;