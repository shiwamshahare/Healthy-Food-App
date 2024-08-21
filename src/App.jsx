import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import MyContainer from "./components/MyContainer";
import FoodInput from "./components/FoodInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [foodItems, setFoodItems] = useState(["Dal", "Vegetables", "Paneer"]);

  let newfooditem, newitems, isMatch;

  const notifyError = () =>
    toast.error("Item already exist...!!!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = () =>
    toast.success("Item added...!!!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onKeyDown = (e) => {
    let itemtomatch;
    newfooditem = e.target.value;
    itemtomatch = newfooditem;
    if (newfooditem.length != 0) {
      if (e.key === "Enter") {
        isMatch = foodItems.some(
          (element) => element.toLowerCase() === itemtomatch.toLowerCase()
        );
        if (isMatch === true) {
          notifyError();
          e.target.value = "";
        } else {
          newitems = [...foodItems, newfooditem];
          setFoodItems(newitems);
          notifySuccess();
          e.target.value = "";
        }
      }
    }
  };

  return (
    <>
      <MyContainer>
        <h1 className="text-light">Helthy Food App</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems fooddata={foodItems} />
      </MyContainer>
    </>
  );
};

export default App;
