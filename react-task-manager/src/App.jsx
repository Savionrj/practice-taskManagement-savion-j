import { useState } from 'react'
import TaskList from './components/TaskList'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import TaskDetail from './components/TaskDetail';

const tasksArray = [
  {
    id: 1, title: 'Wash Dishes', description: 'Clean all dirty dishes in the sink. Dry and put them away when done.'
  },
  {
    id: 2, title: 'Fold Laundry', description: 'Sort clean laundry, neatly fold each item.'
  },
  {
    id: 3, title: 'Cook Dinner', description: 'Prepare a balanced meal with a main dish and sides. Set the table and clean up the kitchen afterward.'
  },
  {
    id: 4, title: 'Buy Groceries', description: 'Make a list of needed items and visit the store.'
  },
  {
    id: 5, title: 'Feed Dog', description: 'Give Blue the correct portion of food and fresh water. Check if treats are needed.'
  }
];

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TaskList tasks={tasksArray} />} />
          <Route path='/:taskId' element={<TaskDetail tasks={tasksArray} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
