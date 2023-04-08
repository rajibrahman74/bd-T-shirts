import React from "react";

const TShirt = ({ tshirt }) => {
  const { _id, index, price, picture, name, gender } = tshirt;
  return (
    <div className="border bottom-1 border-gray-300 rounded-[15px] w-[200px] px-[30px] py-[20px] mx-auto">
      <img
        src={picture}
        alt="t-shirt-image"
        className="h-[250px] rounded-[15px]"
      />
      <h4 className="text-xl font-bold">{name}</h4>
      <p>Price: ${price}</p>
      <button
        className="btn px-4 py-2 bg-[#0d9488] mt-4 text-md border-0 text-white rounded-md"
      >
        Buy now
      </button>
    </div>
  );
};

export default TShirt;