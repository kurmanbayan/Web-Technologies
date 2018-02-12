import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Button, Well, Checkbox} from 'react-bootstrap'
import EditTodo from './EditTodo'
import {Glyphicon} from 'react-bootstrap'


class Todos extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      lastId: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePopover = this.handleChangePopover.bind(this);
  }
  handleChange(data, index) {
    this.setState({
      value: data,
      lastId: index
    });
  }
  handleChangePopover(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <ListGroup style={{width: '50%'}}>
        {
          this.props.list.map((data, index) => {
            return <ListGroupItem className="mainForm" key={index}>
              <Well>
                <div className="dataShow"> {addData(data)} </div>
                <Checkbox readOnly checked={data.isDone} onClick={() => this.props.done(index, data)} className="checkBox"></Checkbox>
              </Well>

              <div align="right">
                <Button bsStyle="danger" className="removeBtn" onClick={() => this.props.removeTodo(index)} > Remove </Button>

                <EditTodo handleChangePopover={this.handleChangePopover} handleChange={this.handleChange}
                isDone={data.isDone} data={data.todo} index={index} editTodo={this.props.editTodo}
                value={this.state.value} lastId={this.state.lastId}/>
              </div>
            </ListGroupItem>
          })
        }
      </ListGroup>
    );
  }
}

function addData(data) {
  if (!data.isDone) {
    return data.priority ? <div> <Glyphicon glyph="flash" /> {data.todo} </div>  : <div>  {data.todo} </div>
  }
  else {
    return data.priority ? <div>  <Glyphicon glyph="flash" />
                    <strike> {data.todo} </strike> </div> : <strike> {data.todo} </strike>
  }
}

export default Todos;
