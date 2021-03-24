import React from "react";
import PropTypes from "prop-types";

export default function Button({ color, text }) {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}
