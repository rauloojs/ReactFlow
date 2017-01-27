import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

let AddTodo = ({ dispatch }) => {
  let textField

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!textField.input.value.trim()) {
          return
        }
        dispatch(addTodo(textField.input.value))
        textField.input.value = ''
      }}>
        <TextField hintText="Todo body" ref={node => {
          textField = node
        }} />
        <RaisedButton label="Add Todo" type="submit" secondary={true}/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
