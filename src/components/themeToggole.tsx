"use client"
import * as React from "react"
import { useTheme } from "next-themes"
 

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
  <div className="">
<button className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150" onClick={() => setTheme("light")}>light mode</button>
<button className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150" onClick={() => setTheme("dark")}>dark mode</button>
  </div>
  )
}
