import React, { Component } from 'react'
import EditableTimer from './EditableTimer'
import {ListGroup, ListGroupItem, Well} from 'react-bootstrap'

class EditableTimerList extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {title: "Learn React", project: "Web Domination", elapsed: '8986300', runningSince: null, editFormOpen: false},
        {title: "Learnasdad React", project: "Web Domasdasination", elapsed: '8986300', runningSince: null, editFormOpen: false},
        {title: "Learnasd React", project: "Web Domiasdasdnation", elapsed: '8986300', runningSince: null, editFormOpen: false},
      ]
    }
    this.updateList = this.updateList.bind(this)
    this.changeEditFormOpen = this.changeEditFormOpen.bind(this)
  }

  changeEditFormOpen(index) {
    let array = this.state.list
    array[index].editFormOpen = !this.state.list[index].editFormOpen
    this.setState({
      list: array
    })
  }

  updateList(index, title, project) {
    console.log("asd")
    let array = this.state.list
    array[index].editFormOpen = false
    array[index].title = title
    array[index].project = project
    this.setState({
      list: array
    })
  }

  render() {
    return (
      <ListGroup id='timers'>
        {
          this.state.list.map((data, index) => {
            return <ListGroupItem>
                    <Well>
                      <EditableTimer
                        key={index}
                        title={data.title}
                        project={data.project}
                        elapsed={data.elapsed}
                        runningSince={data.runningSince}
                        editFormOpen={data.editFormOpen}
                        index={index}
                        changeEditFormOpen={this.changeEditFormOpen}
                        updateList={this.updateList}
                      />
                    </Well>
                  </ListGroupItem>
          })
        }
      </ListGroup>
    );
  }
}

export default EditableTimerList;
