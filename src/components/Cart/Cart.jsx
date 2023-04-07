import React from "react";

const Cart = ({ cart, button }) => {
  return (
    <div className="md:ml-40">
      {/* <h2 className="text-2xl">Order Summary : {cart.length} </h2>
      {cart.map((cart) => (
        <p key={cart._id}>{cart.name}</p>
      ))} */}

      <a class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-zinc-50  dark:bg-gray-800 dark:border-gray-700 ">
        <h2 className="text-2xl">Order Summary : {cart.length} </h2>
        <div className="mt-6">
          {cart.map((cart) => (
            <p className="text-xl" key={cart._id}>
              {cart.name}{" "}
              <button
                onClick={() => {
                  button(cart._id);
                }}
                className=" border-1 border-red-600 px-2 py-1 text-red-600"
              >
                X
              </button>
            </p>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Cart;
