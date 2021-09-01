import * as React from 'react'
import {FC} from 'react'
import * as Sidebar from './style'
import {SidebarLink} from './SidebarLink'
import {Icon} from 'react-icons-kit'
import {genres} from '../../constants'

export const SidebarItemGroup: FC<{
  toggleCategories(): void
  size: number
  icon: any
  label: string
  categoryState: 'opened' | 'closed' | 'none'
  handleCategories(state: string): void
}> = ({
  handleCategories,
  toggleCategories,
  icon,
  size,
  label,
  categoryState,
}) => (
  <>
    <Sidebar.SidebarItem active={false} onClick={toggleCategories}>
      <Icon icon={icon} size={size} />
      <Sidebar.SidebarSpan>{label}</Sidebar.SidebarSpan>
    </Sidebar.SidebarItem>

    <Sidebar.SidebarNestedItemsWrapper
      pose={categoryState === 'opened' ? 'opened' : 'closed'}
      onPoseComplete={() =>
        categoryState === 'closed' ? handleCategories('none') : null
      }
    >
      {categoryState !== 'none' && (
        <>
          {genres.map((item, key) => (
            <SidebarGroupItem
              exact={false}
              key={key}
              label={item}
              to={`/categories/${item}`}
            />
          ))}
        </>
      )}
    </Sidebar.SidebarNestedItemsWrapper>
  </>
)

interface SidebarItemProps {
  to: string
  exact: boolean
  size: number
  label: string
  icon: unknown
}

export const SidebarItem: FC<SidebarItemProps> = ({
  to,
  exact,
  size,
  label,
  icon,
}) => (
  <SidebarLink to={to} activeOnlyWhenExact={exact}>
    <Sidebar.SidebarItem active={exact}>
      <Icon icon={icon} size={size} />
      <Sidebar.SidebarSpan>{label}</Sidebar.SidebarSpan>
    </Sidebar.SidebarItem>
  </SidebarLink>
)

interface SidebarGroupItemProps {
  label: String
  exact: boolean
  to: string
}

export const SidebarGroupItem: FC<SidebarGroupItemProps> = ({
  label,
  exact,
  to = '',
}) => (
  <SidebarLink to={to} activeOnlyWhenExact={exact}>
    <Sidebar.SidebarGroupItem>{label}</Sidebar.SidebarGroupItem>
  </SidebarLink>
)
