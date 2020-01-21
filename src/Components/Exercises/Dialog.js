import React, { Component } from 'react'
import { Dialog, Fab, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Form from './Form'
// first version, see commented out return below
import { ExercisesContext } from '../../context'

class CreateDialog extends Component {
  static contextType = ExercisesContext

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.context.onCreate(exercise)
  }

  render () {
    const { open } = this.state
    const { muscles } = this.context

    return (
      <>
        <Fab color='primary' aria-label='add' onClick={this.handleToggle} size='small'>
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth='xs'
        >
          <DialogTitle>
                Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
                  Please fill out the form below.
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  // previous version that used Consumer for Context API passing.
  // version above is using our HOC in context.js
  /*
    return (
      <Consumer>
        { ({ muscles }) =>
        <Fragment>
          <Fab color="secondary" aria-label="add" onClick={this.handleToggle}>
            <AddIcon />
          </Fab>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            fullWidth
            maxWidth='xs'>
            <DialogTitle>
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below.
              </DialogContentText>
              <Form muscles={muscles} onSubmit={this.handleFormSubmit}/>
            </DialogContent>
          </Dialog>
        </Fragment>}
      </Consumer>
    )} */
}

export default CreateDialog
