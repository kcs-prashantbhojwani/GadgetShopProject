const FilterReducer = (state, action) => {
  
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        const filterData = action.payload.filter((curElem) => {
          return curElem.product_if_available === "AVAILABLE";
        });
  
        return {
          ...state,
          isLoading: false,
          products: [...action.payload],
          filterProducts: filterData,
        };
      case "SET_GRID_VIEW":
            return {
              ...state,
              grid_view: true,
            };
      case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
      case "GET_SORT_VALUE":
            return{
                ...state,
                sorting_value: action.payload,
            };
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
        };
      
      case "LOAD_FILTER":
        return{
          ...state,
          filterProducts: action.payload
        }
      
      case "SET_FILTERED_PRODUCTS":
        return{
          ...state,
          filterProducts: action.payload
        };

        //   filter:{
        //     ...state.filter,
        //     text: "",
        //     product_category: "all",
        //     brand: "all",
        //     available_model_colors_list: "all",
        //   },
        
      
      case "UPDATE_FILTERS_VALUE":
          const {name, value} = action.payload;
          return{
            ...state,
            filters:{
              ...state.filters,
              [name]: value,
            }
          };
      case "FILTER_PRODUCTS":
        let {filterProducts} = state;
        let tempFilterProduct = [...filterProducts];
        const {text, product_category, brand, available_model_colors_list} = state.filters;
        if (text){
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.product_name.toLowerCase().includes(text);
          });
        }
        if (product_category !== "all"){
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.product_category === product_category;
          });
        }
        if (brand !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.brand.toLowerCase() === brand.toLowerCase()
          );
        }
        if (available_model_colors_list !== "all" ) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.available_model_colors_list.includes(available_model_colors_list));
        }
        
        return{
          ...state,
          filterProducts: tempFilterProduct,
        };
        
      case "CLEAR_FILTERS":
          console.log("filters")
          return {
            ...state,
            filters:{
              ...state.filters,
              text: "",
              product_category: "all",
              brand: "all",
              available_model_colors_list: "all",
            },
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
  
  export default FilterReducer;