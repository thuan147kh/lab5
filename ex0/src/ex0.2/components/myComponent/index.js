import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./style.css";

const MyComponent = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="myComponent">
      <div className="title">Color</div>
      <button onClick={context.toggleTheme}>Click</button>
    </div>
  );
};                  

export default MyComponent;
