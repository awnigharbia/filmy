import React from 'react'
import {Sidebar} from './style'
import {SidebarLink} from './sidebarLink'
import {Icon} from 'react-icons-kit'

const genres = [
  'action',
  'adventure',
  'animation',
  'comedy',
  'horror',
  'family',
  'crime',
  'disaster',
  'documentary',
  'drama',
  'eastern',
  'fan-film',
  'fantasy',
  'film-noir',
  'history',
  'holiday',
]

export const SidebarItemGroup = props => (
  <>
    <Sidebar.item onClick={props.toggleCategories}>
      <Icon icon={props.icon} size={props.size} />
      <Sidebar.item.span>{props.label}</Sidebar.item.span>
    </Sidebar.item>

    <Sidebar.nestedGroupWrapper
      pose={props.catState === 'opened' ? 'opened' : 'closed'}
      onPoseComplete={() =>
        props.catState === 'closed' ? props.handleCategories('none') : null
      }
    >
      {props.catState !== 'none' && (
        <>
          {genres.map((item, key) => (
            <SidebarGroupItem
              key={key}
              label={item}
              to={`/categories/${item}`}
            />
          ))}
        </>
      )}
    </Sidebar.nestedGroupWrapper>
  </>
)

export const SidebarItem = ({to, exact, size, label, icon}) => (
  <SidebarLink to={to} activeOnlyWhenExact={exact}>
    <Sidebar.item>
      <Icon icon={icon} size={size} />
      <Sidebar.item.span>{label}</Sidebar.item.span>
    </Sidebar.item>
  </SidebarLink>
)

export const SidebarGroupItem = ({label, exact, to = ''}) => (
  <SidebarLink to={to} activeOnlyWhenExact={exact}>
    <Sidebar.groupItem>{label}</Sidebar.groupItem>
  </SidebarLink>
)
