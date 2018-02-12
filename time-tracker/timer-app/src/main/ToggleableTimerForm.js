import React, {Component} from 'react'
import TimerForm from './TimerForm'

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm changeState={this.props.changeState}/>
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon' onClick={this.props.changeState}>
            Add
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm
