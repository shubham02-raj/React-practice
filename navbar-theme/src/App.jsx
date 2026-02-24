import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  //useeffect for loading the theme
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
