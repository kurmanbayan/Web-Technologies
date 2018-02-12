import React, {Component} from 'react'
import {Button, FormControl} from 'react-bootstrap'

class AddTodo extends Component {
	constructor() {
		super();
		this.state = {
			value: true
		}
		this.handlePrChange = this.handlePrChange.bind(this);
  }
	handlePrChange() {
		this.setState({
			value: !this.state.value
		})
	}

  render() {
    return(
      <div>
        <FormControl className="input2" placeholder="Add task.." value={this.props.value1} onChange={this.props.handleChange}/>
        <Button bsStyle="success" onClick={() => this.props.addBtnPressed(this.state.value)} className="button1"> Add </Button>

				<select style={{'marginLeft': '10px'}} onChange={this.handlePrChange}>
					<option> High </option>
					<option> Low </option>
				</select>
      </div>
    );
  }
}

export default AddTodo
