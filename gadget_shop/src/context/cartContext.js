import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("GadgetShopCart");
    if (localCartData === []){
        return [];
    }
    else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 500,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product_id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {product_id, color, amount, product}})
    };

    const removeItem = (product_id) => {
        dispatch({type: "REMOVE_ITEM",  payload: product_id});
    }

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }

    const setIncrement = (product_id) => {
        dispatch({type: "SET_INCREMENT", payload: product_id})
    }

    const setDecrement = (product_id) => {
        dispatch({type: "SET_DECREMENT", payload: product_id})
    }

    useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
        localStorage.setItem("GadgetShopCart", JSON.stringify(state.cart));
    }, [state.cart]);
    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setIncrement, setDecrement}}>{children}</CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}
export {CartProvider, useCartContext};