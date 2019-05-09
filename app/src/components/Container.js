import React from 'react'
import { Pane } from 'evergreen-ui'
import PropTypes from 'prop-types'

const Container = ({ children, ...props }) => (
  <Pane
    background="tint1"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
    data-testid="container"
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
