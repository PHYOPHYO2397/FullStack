import React from "react";

const TabButton = ({ children, onPress }) => {
  return (
    <>
      {children}
      <button onClick={onPress}>Submit</button>
    </>
  );
};

export default TabButton;
