import React, { Component} from 'react'
import './Addtodo.css'
import Tasks from './Task';
import { Link } from 'react-router-dom'

class Addtodo extends Component {
  state = {
    count: 0,
    what: '',
    where: '',
    when: '',
    allday: Boolean,
    items: []
  }

  handleFormSubmit = (e) => {

    e.preventDefault();
    let items = [...this.state.items];
    items.push({
      what: this.state.what,
      where: this.state.where,
      when: this.state.when,
      allday: this.state.allday,
      count: this.state.count + 1
    });
    this.setState({
      items,
      what: '',
      when: '',
      where: '',
      allday: '',
      count: this.state.count + 1

    });
    console.log(this.state.items)
  };

  handleInputChange = (e) => {
    this.setState({
      what: e.target.value
    })
  }
  handleInputChange1 = (e) => {
    this.setState({
      when: e.target.value
    })
  }
  handleInputChange2 = (e) => {
    this.setState({
      where: e.target.value
    })
  }
  handleInputChange3 = (e) => {
    this.setState({
      allday: e.target.value
    })
  }

  onTrigger = (event) => {
    this.props.parentCallback(this.state.items);
    event.preventDefault();
}

  render() {
    const data = this.state.items;

    return (
      <>
                

      <div className="addTask">
        <div className="addTask_left">
          <h1>Summary</h1>
          <Link to="/">show task</Link>          
          <div className="addtodotask">
          
            <h2>Total Task {this.state.count}</h2>
            <div>
              {data.map((item,index) => (
                <Tasks
                  items={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="addTask_right">
          <form className="form" onSubmit={this.handleFormSubmit} >
            <h1>Fill Form</h1>
            <div>
              <input value={this.state.what} onChange={this.handleInputChange} placeholder="what i have to do" required></input>
            </div>
            <div>
              <input value={this.state.when} onChange={this.handleInputChange1} placeholder="when" required></input>
            </div>
            <div>
              <input type="date" value={this.state.where} onChange={this.handleInputChange2} placeholder="where" required></input>
            </div>
            <div>All day:
				<input value={this.state.allday} onChange={this.handleInputChange3} type="radio" value="true" id="male" ></input>
            </div>
            <div>
              <input value="Submit" type="submit"></input>
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
}


export default Addtodo
