import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import Content from './Content'
import lincoln from './images/lincoln.jpg'
import reagan from './images/reagan.jpg'

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {first_name: "Abraham", last_name: "Lincoln", phone_number: "87070461111", info: {
          img: lincoln
        }},
        {first_name: "Ronald", last_name: "Reagan", phone_number: "87771212233", info: {
          img: reagan
        }}
      ],
      list1: [],
      nextId: 2,
      searchBy: "0"
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchType = this.handleSearchType.bind(this)
    this.contactListEdit = this.contactListEdit.bind(this)
  }

  componentDidMount() {
    this.setState({
      list1: this.state.list
    })
  }

  handleSearchChange(e) {
    let opType = this.state.searchBy
    let updatedList = this.state.list.filter((data) => {
        if (opType === "0") {
          return data.first_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        }
        else if (opType === "1") {
          return data.last_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        }
        else {
          return data.phone_number.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        }
    });

    this.setState ({
      list1: updatedList
    })
  }

  contactListEdit(first, last, num, ind) {
    let array = this.state.list;
    array[ind].first_name = first;
    array[ind].last_name = last;
    array[ind].phone_number = num;
    this.setState({
      list: array,
      list1: array
    })
  }

  handleSearchType(e) {
    this.setState({
      searchBy: e.target.value
    })
  }

  render() {
    return (
      <div style={{'marginLeft': '10%'}}>
        <h1>Contact List</h1>
        <FormControl className="input1" placeholder="Search contact.." onChange={this.handleSearchChange} />
        <Content list={this.state.list1} handleSearchType={this.handleSearchType} edit={this.contactListEdit} />
      </div>
    );
  }
}

export default ContactList;
