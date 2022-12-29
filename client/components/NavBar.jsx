import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiWwe } from "react-icons/si";
import { useStateContext } from "../context/StateContext";
import { Cart } from "./Cart";

export const NavBar = () => {
  // -------------------------------------------------------------------
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  // -------------------------------------------------------------------
  return (
    <div className="navbar-container">
      {/* Logo - Categorias */}
      <ul className="categorias-navbar">
        {/* Logo */}
        <li>
          <p className="logo">
            <Link href="/">PopStore</Link>
          </p>
        </li>
        {/* Categorias */}
        <li>
          <p>Categorias</p>
          <ul className="dropdown">
            <li>
              <Link href={`/category/MARVEL`}>MARVEL</Link>
            </li>
            <li>
              <Link href={`/category/STARWARS`}>STAR WARS</Link>
            </li>
            <li>
              <Link href={`/category/WWE`}>
                <SiWwe />
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Carrito */}
      {!showCart && (
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      )}
      {showCart && <Cart />}
    </div>
  );
};
