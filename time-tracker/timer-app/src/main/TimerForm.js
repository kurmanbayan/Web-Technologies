import React, {Component} from 'react'

class TimerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      'title': props.title,
      'project': ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleProjectChange(e) {
    this.setState({
      project: e.target.value
    })
  }

  handleClick() {
    this.props.title ? this.props.changeEditFormOpen(this.props.index) : this.props.changeState()
  }

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
     return (
       <div className='ui centered card'>
         <div className='content'>
           <div className='ui form'>
             <div className='field'>
               <label>Title</label>
               <input onChange={this.handleTitleChange} type='text' defaultValue={this.props.title} />
             </div>
             <div className='field'>
                 <label>Project</label>
                 <input onChange={this.handleProjectChange} type='text' defaultValue={this.props.project} />
             </div>
             <div className='ui two bottom attached buttons'>
                 <button className='ui basic blue button' onClick={() => this.props.updateList(this.props.index, this.state.title, this.state.project)}> {submitText}</button>
                 <button className='ui basic red button' onClick={this.handleClick}>Cancel</button>
             </div>
           </div>
         </div>
       </div>
     );
  }
}

export default TimerForm
