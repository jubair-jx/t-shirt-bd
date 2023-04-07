import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowProduct from "../ShowTshirt/ShowProduct";
import Cart from "../Cart/Cart";

const Home = () => {
  const tShirt = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleBuyNow = (tShirt) => {
    const newCart = [...cart, tShirt];
    setCart(newCart);
  };
  const removeHandle = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="grid grid-cols-2  px-20 py-28 ">
      <div className="grid grid-cols-2 gap-2">
        {tShirt.map((shirt) => (
          <ShowProduct
            button={handleBuyNow}
            key={shirt._id}
            shirt={shirt}
          ></ShowProduct>
        ))}
      </div>

      <div>
        <Cart button={removeHandle} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
