import './App.css';
import React, { useState } from 'react'
import AddTodo from './components/AddTodo';
import List from './components/List';

const App = () => {
  const [state, setState] = useState("")
  const [list, setList] = useState([])

  const updateTodoList = async (e) => {
    e.preventDefault()
    setList( [...list, state] )
    setState("")
  }

  return (
    <div>
      <AddTodo updateTodoList={updateTodoList} setState={setState} state={state}/>
      <List list={list}/>
    </div>
  )
}

export default App



