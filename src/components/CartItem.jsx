
import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

let items = [];

const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      cartItems.forEach((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      if (qty === 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.forEach((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, cartItems]);

  return (
    <div className="w-full p-2 rounded-lg bg-gray-800 flex items-center gap-3 shadow-md">
      <img
        src={item.imageURL}
        className="w-20 h-20 rounded-lg object-cover"
        alt={item.title}
      />
      <div className="flex flex-col gap-2 text-gray-100">
        <p className="text-base font-semibold">{item?.title}</p>
        <p className="text-sm font-medium">
          <span className="text-red-500">$</span> {parseFloat(item?.price) * qty}
        </p>
      </div>
      <div className="flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-100" />
        </motion.div>
        <p className="w-8 h-8 rounded-full bg-gray-700 text-gray-100 flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-100" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
