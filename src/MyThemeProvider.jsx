import React, { useState } from "react"
import ThemeContext, { ThemeProvider } from "./ThemeContext"

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    if (theme === "light") {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>{children}</ThemeProvider>
  )
}

export default MyThemeProvider
