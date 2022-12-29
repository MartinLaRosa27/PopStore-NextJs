import React, { useRef } from "react";
import {
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";

export const Cart = () => {
  // -------------------------------------------------------------
  const {
    cartItems,
    totalPrice,
    totalQuantities,
    setShowCart,
    removeItem,
    finalizarCompra,
  } = useStateContext();

  // -------------------------------------------------------------
  const cartRef = useRef();

  // -------------------------------------------------------------
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        {/* cerrar carrito */}
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">
            <AiOutlineShoppingCart /> Mi Carrito
          </span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {/* mensaje si el carrito esta vacio */}
        <div>
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Tu carrito de compras está vacío</h3>
            </div>
          )}
        </div>

        {/* informacion elementos en el carrito */}
        <div>
          {cartItems.length >= 1 && (
            <div className="product-container">
              {cartItems.map((item) => {
                return (
                  <div className="product" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      className="cart-product-image"
                    ></img>

                    <div className="item-desc">
                      <div className="flex top">
                        <h5>
                          {item.name} (x{item.quantity})
                        </h5>
                        <h4>USD {item.price}</h4>
                      </div>
                    </div>

                    <div className="flex bottom">
                      <button
                        type="buttton"
                        className="remove-item"
                        onClick={() => removeItem(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* acciones si hay elementos en el carrito */}
        <div>
          {cartItems.length >= 1 && (
            <div className="cart-botttom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
              <div className="btn-container">
                <button
                  type="buttton"
                  className="btn"
                  onClick={() => finalizarCompra()}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
