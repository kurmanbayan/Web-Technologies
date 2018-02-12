import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Image, Col, OverlayTrigger, Popover, FormControl, Button} from 'react-bootstrap'

class Content extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      first: '',
      last: '',
      num: '',
      ind: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePhoneNum = this.handlePhoneNum.bind(this);
  }

  handleClick(data, ind) {
    this.setState({
      first: data.first_name,
      last: data.last_name,
      num: data.phone_number,
      img: data.info.img,
      ind: ind
    })
  }

  handleFirstName(e) {
    this.setState({
      first: e.target.value
    })
  }
  handleLastName(e) {
    this.setState({
      last: e.target.value
    })
  }
  handlePhoneNum(e) {
    this.setState({
      num: e.target.value
    })
  }

  render() {
    const popoverRight = (
    	<Popover id="popover-trigger-click-root-close" title="Edit">
        <strong style={{align: "center"}}>
          <Col xs={4} md={6}>
            <Image src={this.state.img} circle width='120%' />
          </Col>
          <Col xs={4} md={12}>
            First Name
            <FormControl value={this.state.first} onChange={this.handleFirstName} type="text"></FormControl>
          </Col>
          <Col xs={4} md={12}>
            Last Name
            <FormControl value={this.state.last} onChange={this.handleLastName} type="text"></FormControl>
          </Col>
          <Col xs={4} md={12}>
            Phone Number
            <FormControl value={this.state.num} onChange={this.handlePhoneNum} type="text"></FormControl>
          </Col>
          <Col xs={4} md={6}>
            <Button style={{'marginTop': '10px', 'marginBottom': '10px'}}
              onClick={() => this.props.edit(this.state.first, this.state.last, this.state.num, this.state.ind)}> Save Changes </Button>
          </Col>
        </strong>
    	</Popover>
    );
    return (
      <div>
        <select className="dropDown" onChange={this.props.handleSearchType}>
          <option value="0">first name</option>
          <option value="1">last name</option>
          <option value="2">phone number</option>
        </select>
        <ListGroup style={{width:'50%', 'marginTop':'10px'}}>
          {
            this.props.list.map((data, index) => {
              return <OverlayTrigger key={index} trigger="click" rootClose placement="right" overlay={popoverRight}>
                <ListGroupItem key={index} onClick={() => this.handleClick(data, index)}>
                      <Col xs={4} md={2}>
                        <Image src={data.info.img} circle width='120%' />
                      </Col>
                      <Col xs={2} md={100}>
                        <p>{data.first_name}</p>
                        <p>{data.last_name}</p>
                        <p>{data.phone_number}</p>
                      </Col>
                </ListGroupItem>
              </OverlayTrigger>
            })
          }
        </ListGroup>
      </div>
    );
  }
}

export default Content
