/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, clickFn }) => (
  <button className="button" onClick={clickFn}>
    {text}
  </button>
);
