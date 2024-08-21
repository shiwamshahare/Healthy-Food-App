import React from "react";

const MyContainer = (props) => {
  return (
    <div className="container text-center mt-5 w-50 border p-1 bg-success rounded">
      {props.children}
    </div>
  );
};

export default MyContainer;
