"use client"
import * as React from "react"
import { useTheme } from "next-themes"
 

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
  <div>
<button onClick={() => setTheme("light")}>light mode</button>
<button onClick={() => setTheme("dark")}>dark mode</button>
  </div>
  )
}
