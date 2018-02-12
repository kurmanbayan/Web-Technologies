import React, { Component } from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'
import {FormControl} from 'react-bootstrap'

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      banner: '',
      list: [
         {todo: "Math: Chapter 1", isDone: false, priority: true},
         {todo: "Web: React To do list", isDone: false, priority: true},
         {todo: "Computer Simulation: Lab 1", isDone: false, priority: true}
      ],
      list1: []
    }
    this.addBtnPressed = this.addBtnPressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.markedAsDone = this.markedAsDone.bind(this);
  }

  componentDidMount() {
    this.setState({
      list1: this.state.list
    })
  }

  markedAsDone(id, data) {
    let value = this.state.list[id]
    value.isDone = !value.isDone
    let newArr = this.state.list.filter((item, index) => index !== id);
    let arr = newArr.filter((item) => !item.isDone)
    let arrDone = newArr.filter((item) => item.isDone)

    if (!value.isDone) {
      !data.priority ? arr.push(value) : arr = [value].concat(arr)
    }
    else {
      arrDone.push(value);
    }

    arr = arr.concat(arrDone)

    this.setState({
      list: arr,
      list1: arr
    })
  }

  editTodo(id, newValue) {
    let newList = this.state.list
    newList[id].todo = newValue
    if (newValue.length > 0) {
      this.setState({
        list: newList,
        list1: newList
      })
    }
  }

  removeTodo(id) {
    this.setState({
      list: this.state.list.filter((data, index) => index !== id),
      list1: this.state.list1.filter((data, index) => index !== id)
    })
  }

  addBtnPressed(pr) {
    if (this.state.value.length > 0) {
      let notIsDone = this.state.list.filter((data) => !data.isDone)
      let isDone = this.state.list.filter((data) => data.isDone);
      let curVal = {todo: this.state.value, isDone: false, priority: pr};
      pr ? notIsDone = [curVal].concat(notIsDone) : notIsDone.push(curVal)
      notIsDone = notIsDone.concat(isDone)
      this.setState({
        list: notIsDone,
        list1: notIsDone,
        value: ''
      })
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSearchChange(e) {
    let updatedList = this.state.list.filter((data) => {
      return data.todo.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    this.setState ({
      list1: updatedList,
    })
  }


  render() {

    return (
      <div align="center">
        <h1>My todo list</h1>

        <FormControl className="input1" placeholder="Search todo.." onChange={this.handleSearchChange} />
        <AddTodo handleChange={this.handleChange} addBtnPressed={this.addBtnPressed} />
        <Todos list={this.state.list1} removeTodo={this.removeTodo} editTodo={this.editTodo} done={this.markedAsDone}/>
        <div> {this.state.banner} </div>
      </div>
    );
  }
}

export default App;
