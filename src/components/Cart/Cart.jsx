import React from "react";

const Cart = ({ cart, handleRemoveFromeCart }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Order Summary {cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromeCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
