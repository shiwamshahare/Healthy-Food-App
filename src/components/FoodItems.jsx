// import React from "react";
// import Items from "./ListItems";

// const FoodItems = ({ fooddata }) => {
//   return (
//     <>
//       <ul className="list-group">
//         {fooddata.map((item) => (
//           <Items item={item} key={item} />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default FoodItems;

//passing fn as a props to child component

import React from "react";
import Items from "./Items";
import ErrorMsg from "./ErrorMsg";

const FoodItems = ({ fooddata }) => {
  return (
    <>
      {fooddata.length === 0 && <ErrorMsg />}
      <ul className="list-group">
        {fooddata.map((item) => (
          <Items fooditems={item} key={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
