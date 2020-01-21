import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import { ExercisesContext } from '../../context'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

/*
const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }
};
*/
const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  }
})

// this not working when setting exercise below
// exercise: {
//  id,
//    title = 'Welcome!',
//    description = 'Please select an exercise from the list on the left.'
// }

class Exercises extends Component {
  static contextType = ExercisesContext

  render () {
    const { classes } = this.props
    const
      {
        muscles,
        exercisesByMuscles,
        category,
        editMode,
        onSelect,
        exercise,
        onDelete,
        onSelectEdit,
        onEdit
      } = this.context

    return (
      <Grid container className={classes.container}>
        <Grid item className={classes.item} xs={12} sm={6}>
          <LeftPane category={category} exercisesByMuscles={exercisesByMuscles} className={classes.paper} onSelect={onSelect} onDelete={onDelete} onSelectEdit={onSelectEdit} />
        </Grid>
        <Grid item className={classes.item} xs={12} sm={6}>
          <RightPane className={classes.paper} id={exercise.id} title={exercise.title} description={exercise.description} editMode={editMode} exercise={exercise} muscles={muscles} onEdit={onEdit} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Exercises)
