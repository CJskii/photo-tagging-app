import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Themes from "./Components/Themes";

function App() {
  const [theme, setTheme] = useState("default");

  const changeTheme = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selected = event.currentTarget.textContent?.toLowerCase();
    setTheme(selected || "default");
  };

  return (
    <div className="App bg-base-100 h-screen" data-theme={theme}>
      <Navbar changeTheme={changeTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
          }
        />
        <Route path="/products" element={<h1>Products page</h1>} />
        <Route path="/contact" element={<h1>Contact page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
