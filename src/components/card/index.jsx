import React from "react";

const Card = ({ data }) => {
  let cardData = data;
  return (
    <div className="h-40  px-2 py-10 bg-slate-600 rounded-md drop-shadow">
      {/* <h3 className="font-semibold text-white">{cardData.name}</h3> */}
    </div>
  );
};

export default Card;
