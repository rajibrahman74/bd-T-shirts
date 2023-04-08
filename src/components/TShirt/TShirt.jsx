import React from "react";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { _id, index, price, picture, name, gender } = tshirt;
  return (
    <div className="border bottom-1 border-gray-300 rounded-[10px] w-[250px] px-[30px] py-[20px] mx-auto">
      <img
        src={picture}
        alt="t-shirt-image"
        className="h-[250px] w-full rounded-[10px]"
      />
      <h4 className="text-xl font-bold">{name}</h4>
      <p>Price: ${price}</p>
      <button
        onClick={() => handleAddToCart(tshirt)}
        className="btn px-4 py-2 bg-[#0d9488] mt-4 text-md border-0 text-white rounded-md"
      >
        {" "}
        Buy now
      </button>
    </div>
  );
};

export default TShirt;