import React, { useContext } from "react";
import "./style.css";
import { ThemeContext } from "Exercise0_2/ThemeContext";

const Item = (props) => {
  const context = useContext(ThemeContext);
  console.log(context);

  const { title, content } = props;
  return (
    <div className="componentIitem">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Item;
