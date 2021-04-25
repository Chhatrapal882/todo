import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Todo = () => {
 
  return (
    <div>
         <div className="Todo">
        <div className="Todo_left">
          <h1>My Task</h1>
          <p>Today</p>
         </div>
        <div className="Todo_right">
          <div className="todo>">
            <h1>Hii!</h1>
            <p>Nothing to do yet! Think about it and lets start</p>
          </div>
          <Link to='/addtodo' className="home">Add Task</Link>
        </div>
      </div>
    </div>
  )
}

export default Todo
