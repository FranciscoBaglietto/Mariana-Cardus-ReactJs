import { useState } from "react";
import { CartContext } from "./cartContext";

import React from 'react'

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)){
            alert('Ya esta en el carrito')
        }else{
            setCart([...cart, {...item, cantidad}])
        }

        setCart([...cart, {...item, cantidad}]);
        console.log('cart', [...cart, {...item, cantidad}])
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id);
    }
    const clear = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider