import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-gray-900">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Logo}
            className="w-8 object-cover"
            alt="logo"
          />
          <motion.p
            whileTap={{ scale: 0.6 }}
            className="text-gray-100 text-xl font-bold"
          >
            Best Eats
          </motion.p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out">
              <a href="#menu">Menu</a>
            </li>
            <li className="text-base text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out">
              <a href="#Footer">About Us</a>
            </li>
            <li className="text-base text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out">
              Service
            </li>
          </motion.ul>
          <motion.div
            onClick={showCart}
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <MdShoppingBasket className="text-gray-300 text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </motion.div>
          <div onClick={login} className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="user-avatar"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-40 bg-gray-800 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "momen20000001@gmail.com" && (
                  <Link to="/createItem">
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-700 transition-all duration-100 ease-in-out text-gray-200 text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-500 rounded-md transition-all duration-100 ease-in-out text-gray-200 text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <motion.div
          onClick={showCart}
          whileTap={{ scale: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <MdShoppingBasket className="text-gray-300 text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </motion.div>
        <Link to="/" className="flex items-center">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Logo}
            className="w-8 object-cover"
            alt="logo"
          />
          <motion.p
            whileTap={{ scale: 0.6 }}
            className="text-gray-100 text-xl font-bold"
          >
            Best Eats
          </motion.p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="user-avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-40 bg-gray-800 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "momen20000001@gmail.com" && (
                <Link to="/createItem">
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-700 transition-all duration-100 ease-in-out text-gray-200 text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <Link to="/">
                  <li
                    className="text-base px-4 py-2 text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out hover:bg-gray-700"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </li>
                </Link>
                <li
                  className="text-base px-4 py-2 text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out hover:bg-gray-700"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base px-4 py-2 text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out hover:bg-gray-700"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base px-4 py-2 text-gray-300 hover:text-gray-100 duration-100 cursor-pointer transition-all ease-in-out hover:bg-gray-700"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                className="rounded-md hover:bg-red-500 px-4 py-2 flex items-center justify-center gap-3 cursor-pointer bg-gray-700 transition-all duration-100 ease-in-out text-gray-200 text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
