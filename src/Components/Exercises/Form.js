import React, { Component } from 'react'
import { InputLabel, MenuItem, FormControl, Select, TextField, Button } from '@material-ui/core'
// import { withStyles } from "@material-ui/styles";

// const styles = theme => console.log(theme) || ({
/*
const styles = theme => ({
  FormControl: {
    width: 250
  }
});
*/

// export default withStyles(styles)(class extends Component {
export default class extends Component {
  state = this.getInitState();

  getInitState () {
    const { exercise } = this.props

    return exercise || {
      title: '',
      description: '',
      muscles: ''
    }
  }

  //  https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // See comments below
  /*
  componentWillReceiveProps({ exercise }) {
    this.setState({
        ...exercise
    })
  }
  */
  /*
   Using the one of the following methods which is the recommended approach over
   the above componentWillReceiveProps method is causing the edit mode not to
   accept input changes.
   */

  /*
  static getDerivedStateFromProps({ exercise }) {
    return exercise || null
  }
  */

  /*
  static getDerivedStateFromProps({ exercise }, state)  {
    return exercise ? {
      ...exercise
    } : {
      title: '',
      description: '',
      muscles: ''
    }
  }
  */

  /*
  static getDerivedStateFromProps({ exercise }, state)  {
    return exercise ? {
      title: exercise.title,
      description: exercise.description,
      muscles: exercise.muscles
    } : {
      title: '',
      description: '',
      muscles: ''
    }
  }
  */

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  handleSubmit = () => {
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    })

    //    this.setState(this.getInitState())
  }

  render () {
    const { title, description, muscles } = this.state
    const { exercise, muscles: categories } = this.props
    //          { classes, exercise, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          label='Title'
          value={title}
          onChange={this.handleChange('title')}
          margin='normal'
          fullWidth
        />
        <br />
        <FormControl fullWidth>
          <InputLabel htmlFor='muscles'>Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(category =>
              <MenuItem key={category} value={category}>{category}</MenuItem>
            )}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows='4'
          label='Description'
          value={description}
          onChange={this.handleChange('description')}
          margin='normal'
          fullWidth
        />
        <br />
        <Button
          color='primary'
          variant='contained'
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    )
  }
}
