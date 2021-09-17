import {DarkModeSwitch} from '@/utils/DarkModeSwitch'
import React from 'react'

export function ThemeToggler(): React.ReactElement {
  const [theme, setTheme] = React.useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const isDarkMode = theme === 'dark'
  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={() => setTheme(nextTheme)}
      size={25}
    />
  )
}
