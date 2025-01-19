import { useState } from 'react'
import './App.css'
import TodoList from './component/TodoList'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Toggle from './component/Toggle'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/toggle' element= {<Toggle />} />
      <Route path='/Form' element= {<Form />} />
      <Route path='/todolist' element= {<TodoList />} />
    </Routes>
    </>
  )
}

export default App
