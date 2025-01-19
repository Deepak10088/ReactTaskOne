import React from 'react'
// import Navbar from './Navbar/Navbar';
import { useState } from 'react'
import './ToDO.css';


const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  
  const handleAddTask = () => {
    if (!taskName) {
      alert('Please fill in the task name.');
      return;
    }

    const currentDateTime = new Date().toLocaleString(); 

    const newTask = {
      serialNo: tasks.length + 1,
      taskName,
      dateTime: currentDateTime,
    };
    
    if (editingIndex !== null) {
      // Edit existing task
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = { ...updatedTasks[editingIndex], taskName/*, dateTime: currentDateTime */};
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, newTask]);
    }
    
    setTaskName(''); // Reset task name field after adding
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTaskName(tasks[index].taskName);
    setEditingIndex(index);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todobody'>
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          placeholder="Task Name"
        ></input> 
        <button onClick={handleAddTask}>
          {editingIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      
      <table>
        <thead className='thead'>
          <tr>
            <th>Serial No.</th>
            <th>Task Name</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.serialNo}</td>
              <td>{task.taskName}</td>
              <td>{task.dateTime}</td>
              <td>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;

