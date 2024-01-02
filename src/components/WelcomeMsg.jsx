import React from "react";

function WelcomeMsg({ todoItems }) {
  return (
    <>
      {todoItems.length === 0 && (
        <h1 className="display-4 text-info">ENJOY YOUR DAY</h1>
      )}
    </>
  );
}

export default WelcomeMsg;
