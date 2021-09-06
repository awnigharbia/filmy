import * as React from 'react'
import {FC} from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'src/components/Link'

interface EnrichedChildren {
  onChange(): void
  selectedValue: string
  name: string
  children?: React.ReactNode
  active: unknown
}

export const SidebarLink: FC<{
  to: string
  activeOnlyWhenExact: boolean
  children: React.ReactNode
}> = ({to, activeOnlyWhenExact, children}) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({match, location}) => {
      const child = React.Children.map(children, mappedChild => {
        // Check if it's a valid element
        if (!React.isValidElement<EnrichedChildren>(children)) return children

        // cloning the interface for ReactElement
        let elementChild: React.ReactElement<EnrichedChildren> = children

        // Check if it's null or undefined then clone it
        return mappedChild !== null && mappedChild !== undefined
          ? React.cloneElement(elementChild, {
              active: match,
            })
          : null
      })
      return (
        <Link style={{textDecoration: 'none'}} to={to}>
          {child}
        </Link>
      )
    }}
  />
)
