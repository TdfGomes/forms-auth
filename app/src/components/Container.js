import React from 'react'
import { Pane } from 'evergreen-ui'
import PropTypes from 'prop-types'

const Container = ({children,...props}) => (
  <Pane
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
  {children}
  </Pane>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}

export default Container