import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  const cart = useContext(CartContext);

  const [getProductDat, setGetProductData] = useState([]);
  useEffect(() => {
    async function getItems() {
      let data = await fetch("http://127.0.0.1:8000/items/");
      let result = await data.json();
      setGetProductData(result);
    }
    getItems();
  }, []);

  function getProductData(id) {
    let productData = getProductDat.find((item) => item.id === id);

    return productData;
  }

  function open() {
    setIsOpen(true);
  }

  function sendData() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart.items),
    };
    fetch("http://127.0.0.1:8000/post/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function close() {
    setIsOpen(false);
    console.log(cart.items);
    sendData();
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Shopping Cart
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-black/40 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Shopping Cart :
                  </DialogTitle>
                  <div>
                    {cart.items.map((item) => {
                      const product = getProductData(item.id);
                      const quantity = cart.getProductQuantity(product.id);
                      return (
                        <div
                          key={item.id}
                          className="flex flex-1 justify-around"
                        >
                          <span className="text-white w-20">
                            {" "}
                            <p>{product.name}</p>{" "}
                          </span>

                          <span className="text-white ">
                            <p>quantity : {quantity}</p>
                          </span>
                          <span className="text-white">
                            <p>price: {product.price * quantity} $</p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex tracking-widest items-center gap-2 rounded-md bg-gray-700 py-1.5 px-4 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Buy
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
