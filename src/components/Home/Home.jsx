import React, { useState } from "react";
import TShirt from "../TShirt/TShirt";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { removeItem } from "localforage";
import toast from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  // add to  cart function
  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
        toast.error('You are  already add this product', {
            position: "bottom-center"
          })
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  // remove from cart function

  const handleRemoveFromeCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex justify-center gap-[25px] my-[50px]">
      <div className="w-2/3 grid grid-cols-3 gap-8 mx-auto">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="mx-auto 1/3">
        <Cart cart={cart} handleRemoveFromeCart={handleRemoveFromeCart}></Cart>
      </div>
    </div>
  );
};

export default Home;