import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductItem({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <div className=" rounded-2xl pb-4   flex flex-col">
        <div
          className="w-full overflow-hidden rounded-2xl
        lg:aspect-none group-hover:contrast-125 group-hover:shadow-xl  lg:h-80"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="bg-gradient-to-b from-transparent to-slate-300 py-4 rounded-b-xl -mt-2">
          <div className="  flex justify-around ">
            <div>
              <h3 className="text-sm text-gray-700">
                <p className="text-gray-900 font-mono font-semibold tracking-wider text-base">
                  {product.name}
                </p>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-700">
              {product.price} $
            </p>
          </div>
          <div className="bg-opacity-55 ">
            {productQuantity > 0 ? (
              <>
                <div>
                  <span className="text-gray-700">
                    Quantity: {productQuantity}
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        cart.addItemToCart(product.id);
                      }}
                      className="text-white mx-2 px-2 rounded-md bg-blue-500"
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        cart.removeItemFromCart(product.id);
                      }}
                      className="text-white mx-2 px-2 rounded-md bg-red-500"
                    >
                      -
                    </button>
                  </span>
                </div>
                <button
                  onClick={() => cart.deleteFromCart(product.id)}
                  className="bg-red-600 text-sm  text-white px-5 py-1 rounded-2xl shadow-sm tracking-wider w-3/5 mt-2"
                >
                  Delete From Cart
                </button>
              </>
            ) : (
              <button
                onClick={() => cart.addItemToCart(product.id)}
                className="bg-blue-500  text-white px-5 py-1 rounded-2xl shadow-xl tracking-wider w-3/5 mt-2"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
