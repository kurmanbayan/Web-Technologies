import React, { Component } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

class EditableTimer extends Component {
  render() {
    if (this.props.editFormOpen) {
       return (
         <TimerForm
         changeEditFormOpen={this.props.changeEditFormOpen}
         updateList={this.props.updateList}
         title={this.props.title}
         project={this.props.project}
         index={this.props.index}
         />
         );
       } else {
       return (
         <Timer
         title={this.props.title}
         project={this.props.project}
         elapsed={this.props.elapsed}
         runningSince={this.props.runningSince}
         editFormOpen={this.props.editFormOpen}
         changeEditFormOpen={this.props.changeEditFormOpen}
         index={this.props.index}
         />
       );
    }
  }
}

export default EditableTimer;
