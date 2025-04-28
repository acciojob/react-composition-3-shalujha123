import React, { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="tooltip" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
