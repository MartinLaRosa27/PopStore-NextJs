import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
const Context = createContext();

export const StateContext = ({ children }) => {
  // --------------------------------------------------------------------------
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);

  // --------------------------------------------------------------------------
  const incrQty = () => {
    if (qty < 6) {
      setQty(qty + 1);
    }
  };

  // --------------------------------------------------------------------------
  const decrQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  // --------------------------------------------------------------------------
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantities(totalQuantities + quantity);
    if (checkProductInCart) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === product.id) {
          cartItems[i].quantity += quantity;
        }
      }
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    setQty(1);
    toast.success(`(x${quantity})"${product.name}" Agregado al Carrito`);
  };

  // --------------------------------------------------------------------------
  const removeItem = (product) => {
    const updatedCartItems = cartItems.filter((item) => {
      return item.id !== product.id;
    });
    setTotalPrice(totalPrice - product.price);
    setCartItems(updatedCartItems);
    setTotalQuantities(0);
  };

  // --------------------------------------------------------------------------
  const finalizarCompra = () => {
    Swal.fire({
      title: "¿Desea finalizar la compra?",
      text: `El valor es de ${totalPrice.toFixed(2)}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Compra realizada",
          "Se realizo la compra correctamente",
          "success"
        );
        setCartItems([]);
        setTotalPrice(0);
        setQty(1);
        setTotalQuantities(0);
      }
    });
  };

  // --------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        qty,
        totalQuantities,
        incrQty,
        decrQty,
        onAdd,
        setShowCart,
        removeItem,
        finalizarCompra,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// --------------------------------------------------------------------------
export const useStateContext = () => {
  return useContext(Context);
};
