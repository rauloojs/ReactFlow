import React from 'react'
import Footer from './Footer'
import Palette from '../containers/Palette'
import Canvas from '../containers/Canvas'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'


const App = () => (
  <div>
    <Palette />
    <Canvas id={"canvas-id"}/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
)

export default App
