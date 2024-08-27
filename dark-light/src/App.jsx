import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Content"


export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prevTheme => !prevTheme)
  }
    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <Main 
            darkMode={darkMode}

            />
        </div>
    )
}