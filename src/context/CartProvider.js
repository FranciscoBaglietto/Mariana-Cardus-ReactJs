import { useState } from "react";
import { CartContext } from "./cartContext";
import Swal from "sweetalert2";

import React from 'react'

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const inCart = isInCart(item.id)
        if (inCart) {
            inCart.cantidad = inCart.cantidad + cantidad
        } else {
            setCart([...cart, { ...item, cantidad }])
        }
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id);
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((producto) => producto.id !== itemId))
        Swal.fire(`Producto eliminado con exito!`)
    }
    const totalPrecioCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.precio * cartItem.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, totalPrecioCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider