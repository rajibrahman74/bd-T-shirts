import React from "react";

const Cart = ({ cart, handleRemoveFromeCart }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Order Summary {cart.length}</h2>
      {cart.length > 1 ? (
        <span className="text-center font-semibold text-[#0d9488]">
          You have already buy many t-shirt
        </span>
      ) : (
        <span className="text-center font-semibold text-[#0d9488]">
          Please buy t-shirt
        </span>
      )}
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