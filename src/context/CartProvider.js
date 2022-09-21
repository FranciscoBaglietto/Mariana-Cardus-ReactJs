import { useState } from "react";
import { CartContext } from "./cartContext";

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
        setCart([...cart, { ...item, cantidad }]);
        console.log('cart', [...cart, { ...item, cantidad }])
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id);
    }
    const clear = () => {
        setCart([]);
    }
    const removeItem = (itemId) => {
        let nuevoArreglo = [];
        cart.forEach(producto => {
            if (producto.id === itemId) {
                console.log(producto)
            } else{
                nuevoArreglo.push(producto) 
            }
        })
        setCart(nuevoArreglo)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider