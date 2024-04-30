'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemePicker = () => {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  const handleChange = (e : string) => { setTheme(e); }

  return (
    <div>
    <select value={theme} className='p-2 rounded-md' onChange={e => handleChange(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
    </div>
  )
}
export default ThemePicker