import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);
  
  return (
    <div 
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {React.cloneElement(children)}
      {show && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;