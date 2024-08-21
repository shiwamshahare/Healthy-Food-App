import React from "react";
import css from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item"
        onKeyDown={handleKeyDown}
        className={css["food-input"]}
      />
    </>
  );
};

export default FoodInput;
