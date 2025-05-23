import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Clone the child element and add necessary props
  return React.cloneElement(children, {
    className: `tooltip ${children.props.className || ''}`.trim(),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: (
      <>
        {children.props.children}
        {show && <div className="tooltiptext">{text}</div>}
      </>
    )
  });
};

export default Tooltip;