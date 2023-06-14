const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let {product_id, color, amount, product} = action.payload;
        // console.log(
        //     "🚀 ~ file: cartReducer.js ~ line 5 ~ cartReducer ~ product",
        //     product.model_img_url);

        let existingProduct = state.cart.find((curItem) => curItem.product_id === product_id + color);

        if (existingProduct){
          let updatedProduct = state.cart.map((curElem) => {
            if (curElem.product_id = product_id + color){
              let newAmount = curElem.amount + amount;

              if (newAmount >= curElem.max){
                newAmount = curElem.max;
              }
              return {
                ...curElem,
                amount: newAmount,
              };
            }else{
              return curElem;
            }
          });
          return {
            ...state,
            cart: updatedProduct,
          };
        }else{
      
        let cartProduct;
        cartProduct = {
          product_id: product_id + color,
          product_name: product.product_name,
          color,
          amount,
          model_img_url: product.model_img_url,
          discount_price: product.discount_price,
          max: product.total_available_quantity,
        }
        // console.log("cartProduct", cartProduct)
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
    }
  };

  if (action.type === "SET_INCREMENT"){
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.product_id === action.payload){
        console.log("curElem", curElem)
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max){
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      }else{
        return curElem;
      }
    });
    return {...state, cart: updatedProduct};
  }

  if (action.type === "SET_DECREMENT"){
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.product_id === action.payload){
        console.log("curElem", curElem)
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1){
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      }else{
        return curElem;
      }
    });
    return {...state, cart: updatedProduct};
  }

  if (action.type === "REMOVE_ITEM"){
    let updateCart = state.cart.filter((curItem) => curItem.product_id !== action.payload);
    return{
      ...state,
      cart: updateCart,
    };
  };

  if (action.type === "CLEAR_CART"){
    return{
      ...state,
      cart: [],
    }
  }

  if (action.type === "CART_TOTAL_ITEM"){
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let {amount} = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    }
  }

  if (action.type === "CART_TOTAL_PRICE"){
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let {discount_price, amount} = curElem;
      initialVal = initialVal + discount_price * amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    }
  }
  return state;
}

export default cartReducer