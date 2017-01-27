import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <RaisedButton label="Undo" onClick={onUndo} disabled={!canUndo} />
    <RaisedButton label="Redo" onClick={onRedo} disabled={!canRedo} primary={true} />
  </div>
)

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
