// import React from "react";

// const fooditemss = ({ fooditems }) => {
//   function handleBuyBtn(e) {
//     console.log(fooditems + " is being baught");
//   }

//   return (
//     <>
//       <li className="list-group-items text-dark d-flex justify-content-between bg-light bg-gradient">
//         <span>{fooditems}</span>
//         <button
//           className="rounded btn btn-secondary "
//           onClick={(event) => {
//             handleBuyBtn(event);
//           }}
//         >
//           Buy
//         </button>
//       </li>
//     </>
//   );
// };
// onabort;

// export default fooditemss;

// Receiving fn passed from parent and communicating back when button is clicked

import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { toast } from "react-toastify";

const Items = ({ fooditems }) => {
  const [clas, setClas] = useState(false);
  const notifySelect = () =>
    toast.info(`${fooditems} is being bought`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyDeSelect = () => {
    toast.warn(`${fooditems} cancelled`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleBuyBtn = () => {
    setClas(!clas);
    if (clas !== true) {
      notifySelect();
    } else {
      notifyDeSelect();
    }
  };
  return (
    <>
      <li
        className={`list-group-item text-dark d-flex justify-content-between bg-gradient ${
          clas ? "list-group-item-info" : "list-group-item"
        }`}
      >
        <span>{fooditems}</span>
        <button className="rounded btn btn-info " onClick={handleBuyBtn}>
          <FiShoppingBag />
        </button>
      </li>
    </>
  );
};

export default Items;
