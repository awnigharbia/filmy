import {DarkModeSwitch} from '@/utils/DarkModeSwitch'
import React from 'react'
import {useLocalStorage} from './../hooks/useLocalStorage'

export function ThemeToggler(): React.ReactElement {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
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
