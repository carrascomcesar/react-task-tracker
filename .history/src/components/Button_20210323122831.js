import React from "react";

export default function Button({ color, text }) {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
    Button.defaultProps = {
        color: 'steelblue'
    }
    Button.propTypes = {
        text: PropTypes.string,
        color:
    }
}
