import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Exercises/Dialog'
import { withStyles } from '@material-ui/styles'

const styles = {
  flex: {
    flex: 1
  }
}

// export default ({ muscles, onExerciseCreate }) => (
export default withStyles(styles)(({ classes }) => (
  <AppBar position='static'>
    <Toolbar>
      {/* <Typography variant="h6" color="inherit" style={{flex: 1}}> */}
      <Typography variant='h6' color='inherit' className={classes.flex}>
        Exercise Database
      </Typography>

      <CreateDialog />
    </Toolbar>
  </AppBar>
))
