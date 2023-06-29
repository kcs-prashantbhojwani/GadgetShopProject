const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      // const featureData = action.payload.filter((curElem) => {
      //   console.log("cur",curElem)
      //   return curElem.product_inventory === "true";
      // });
      // {filterProducts.map((curElem) => {
      //   return <Product key={curElem.product_id} {...curElem}
      const feature = action.payload.map((curElem) => {
        return curElem
      })
      
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: feature,
      };
    
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };

    case "SET_SINGLE_PRODUCT":
          return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
          };

    case "SET_SINGLE_ERROR":
            return {
              ...state,
              isLoading: false,
              isError: true,
            };

    default:
      return state;
  }
};

export default ProductReducer;