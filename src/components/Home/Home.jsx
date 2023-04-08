import React from "react";
import TShirt from "../TShirt/TShirt";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-[10px] my-[50px]">
      <div className="grid grid-cols-3 gap-20 mx-auto">
        {tshirts.map((tshirt) => (
          <TShirt key={tshirt._id} tshirt={tshirt}></TShirt>
        ))}
      </div>
      <div className="mx-auto">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;