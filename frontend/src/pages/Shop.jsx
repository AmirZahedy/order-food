import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getItems() {
      let data = await fetch("http://127.0.0.1:8000/items/");
      let result = await data.json();
      setItems(result);
    }
    getItems();
  }, []);
  return (
    <div className="bg-opacity-20 bg-white rounded-lg shadow-2xl ">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="inline text-white shadow-2xl px-10 font-mono text-3xl font-bold tracking-[15px] text-gray-900 shadow-md rounded-full py-3">
          MENU
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
