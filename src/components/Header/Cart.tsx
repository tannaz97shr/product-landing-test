/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { Button } from "../UI/Button";
import { CartIcon } from "../UI/Icons";
import InputNumber from "../UI/NumberInput";
import { H6 } from "../UI/Typography";

interface CartProps {
  items: [];
}
const Cart = ({ items }: CartProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState(items);
  let total = 0;
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="lg:order-3"
      >
        <CartIcon />
      </button>
      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <div className="absolute bg-white top-[100px] z-30 right-0 left-0 w-[90%] mx-auto rounded-lg p-7 max-w-[380px] md:right-12 md:mr-0">
            <div className="flex justify-between">
              <H6>cart ({cartItems.length})</H6>
              <button
                onClick={() => {}}
                className=" text-border-grey underline"
              >
                Remove all
              </button>
            </div>
            {cartItems.map((item: any, _index) => {
              total = total + item.price * item.amount;
              return (
                <div className="flex flex-row my-6" key={item.slug}>
                  <img
                    width={64}
                    height={64}
                    className="rounded-lg"
                    alt={item.name}
                    src={`/assets/product-${item.slug}/desktop/image-product.jpg`}
                  />
                  <div className="flex flex-1 flex-col mx-4 text-sm uppercase font-bold">
                    <span>{item.name}</span>
                    <span className=" text-border-grey">
                      $ {item.price * item.amount}
                    </span>
                  </div>
                  <InputNumber
                    value={item.amount}
                    setValue={(val: number) => {
                      console.log(val);
                    }}
                  />
                </div>
              );
            })}
            <div className="flex justify-between">
              <span className=" uppercase text-border-grey">total</span>
              <span className="font-bold">$ {total}</span>
            </div>
            <Button
              // href="/checkout"
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full mt-8 justify-center"
            >
              Checkout
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
