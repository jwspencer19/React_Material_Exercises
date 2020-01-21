import React, { Component } from 'react'
import { withWidth, AppBar, Tabs, Tab } from '@material-ui/core'
import { ExercisesContext } from '../../context'

class Footer extends Component {
  static contextType = ExercisesContext

  handleOnIndexSelect = (e, index) => {
    const { onCategorySelect, muscles } = this.context
    onCategorySelect(index === 0 ? '' : muscles[index - 1])
  }

  getIndex = () => {
    const { category, muscles } = this.context
    return category ? muscles.findIndex(group => group === category) + 1 : 0
  }

  render () {
    const { width, muscles } = this.context
    return (
      <AppBar position='static'>
        {/* <Tabs - Tabs uncomment below is not seeing colors.
          value={this.getIndex()}
          onChange={this.handleOnIndexSelect}
          indicatorColor='primary'
          textColor='primary'
          centered={width !== 'xs'}
          variant={width === 'xs' ? 'scrollable' : 'standard'}
        > */}
        <Tabs
            value={this.getIndex()}
            onChange={this.handleOnIndexSelect}
            centered={width !== 'xs'}
            variant={width === 'xs' ? 'scrollable' : 'standard'}
        >
          <Tab label='All' />
          {muscles.map(group =>
            <Tab key={group} label={group} />
          )}
        </Tabs>
      </AppBar>
    )
  }
}

export default withWidth()(Footer)
