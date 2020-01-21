import React, { Fragment } from 'react'
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

export default ({ className, exercisesByMuscles, category, onSelect, onDelete, onSelectEdit }) =>
  <Paper className={className}>
    {exercisesByMuscles.map(([group, exercises]) =>
      !category || category === group
        ? <Fragment key={group}>
          <Typography variant='h6' color='primary' style={{ textTransform: 'capitalize' }}>
            {group}
          </Typography>
          <List component='ul'>
            {exercises.map(({ id, title }) =>
              <ListItem
                key={id}
                button
                onClick={() => onSelect(id)}
              >
                <ListItemText
                  primary={title}
                />
                <ListItemSecondaryAction>
                  <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                    <Edit />
                  </IconButton>
                  <IconButton color='primary' onClick={() => onDelete(id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </Fragment>
        : null
    )}
  </Paper>
