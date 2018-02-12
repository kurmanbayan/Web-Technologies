import React, {Component} from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

class TimersDashboard extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className='TimersDashboard' align="center">
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={this.state.isOpen} changeState={this.changeState}/>
        </div>
      </div>
    )
  }
}

export default TimersDashboard;
