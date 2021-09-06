import * as React from 'react'
import {FC} from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Link: FC<{
  children: React.ReactNode
  to: string
  replace?: boolean
  style?: any
}> = ({children, ...props}) => (
  <ReactRouterLink {...props} replace={window.location.pathname === props.to}>
    {children}
  </ReactRouterLink>
)
