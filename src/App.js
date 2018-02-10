import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  addTask = () => {
      let newTask = {
        task: this.refs.task.value,
        priority: this.refs.priority.value
      };

      axios({
        method: 'POST',
        url: `http://localhost:3010/api/todolist`,
        data: newTask
      }).then(response => {
        console.log(222, response.data)
        this.setState({tasks: response.data})
      }).catch(err => {
         console.log('this is the err', err)
      })
     
  }
    
  getToDoList = () => {
    axios.get(`http://localhost:3010/api/todolist`).then(response => {
      console.log(111, response.data)
      this.setState({ tasks: response.data})
    })
  }

  // taskComplete = (id) => {
  //   axios.delete(`http://localhost:3010/api/todolist/${id}`).then(response => {
  //     console.log('444, response.data)')
  //     this.setState({ tasks: response.data})
  //   })
  // }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Todo App</h1>
        </div>
        <div>
          <input className='btn-sp' placeholder='Task' ref="task" />
          <input className='btn-sp' placeholder='Rate Priority' ref="priority" />
          <button onClick ={() => this.getToDoList()}> get list </button>
          <button onClick ={() => this.addTask()}>add Task</button>
        </div>
        <div className="listDisplay">
          { tasks.map(task => (
              <h3>Task: {task.task} | Priority: {task.priority}</h3>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
