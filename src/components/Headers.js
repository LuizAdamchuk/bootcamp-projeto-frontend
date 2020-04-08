import React from "react";

const Headers = ({ title, children }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {children}
      </header>
    </>
  );
};

export default Headers;
