'use client'
import { ThemeProvider } from "next-themes"

export function Providers({children}: {children: React.ReactNode}) {

  return (
  <ThemeProvider defaultTheme="dark">
     {children}
  </ThemeProvider>
  )
}

//attribute="class"