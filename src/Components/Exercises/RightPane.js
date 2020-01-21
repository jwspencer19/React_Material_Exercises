import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import Form from './Form'

export default ({ className, id, title, description, editMode, exercise, muscles, onEdit }) =>
  <Paper className={className}>
    <Typography variant='h5' gutterBottom color='primary'>
      {title || 'Welcome!'}
    </Typography>
    {editMode
      ? <Form key={id} exercise={exercise} muscles={muscles} onSubmit={onEdit} />
      : <Typography variant='subtitle1'>
        {description || 'Please select an exercise from the list on the left.'}
      </Typography>}
  </Paper>
