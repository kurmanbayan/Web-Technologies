import React, {Component} from 'react'
import {FormControl, Popover, Button, OverlayTrigger} from 'react-bootstrap'

class EditTodo extends Component {
  render() {
    const popoverRight = (
    	<Popover id="popover-trigger-click-root-close" title="Edit">
        <strong style={{align: "center"}}>
          <FormControl value={this.props.value} onChange={this.props.handleChangePopover} type="text"></FormControl>
          <Button className="saveBtn" onClick={() => this.props.editTodo(this.props.lastId, this.props.value)}> Save </Button>
        </strong>
    	</Popover>
    );
    return (
      <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverRight}>
           <Button bsStyle="warning" onClick={() => this.props.handleChange(this.props.data, this.props.index)}>Edit</Button>
      </OverlayTrigger>
    );
  }
}

export default EditTodo;
