'use client'
import { ThemeProvider } from "next-themes"

export function Providers({children}: {children: React.ReactNode}) {

  return (
  <ThemeProvider enableColorScheme storageKey="theme" defaultTheme="dark">
     {children}
  </ThemeProvider>
  )
}

//attribute="class"