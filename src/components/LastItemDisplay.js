import React, { Component } from 'react';
import '../syles/LastItemDisplay.css';
import {connect} from 'react-redux';

// -------------------------------------------------------------------
// Since this component doesn't have access to ToDoList.js's state...
// This component doesn't know what the last item added was
// Redux can help fix this
// -------------------------------------------------------------------

const mapStateToPros = (state) =>({
  savedTodoItems: state.savedTodoItems
})

class LastItemDisplay extends Component {
  render() {
    const lastItem = this.props.savedTodoItems.savedTodoItems;
    //console.log(lastItem)
    return (
      <div id="last-item-display">
        <h4>{lastItem[lastItem.length-1]}</h4>
      </div>
    )
  }
}

export default connect(mapStateToPros)(LastItemDisplay);