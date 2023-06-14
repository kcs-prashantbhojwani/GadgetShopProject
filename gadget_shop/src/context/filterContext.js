import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const API = "http://127.0.0.1:8000/search/search_all_products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  filterProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  grid_view: true,
  sorting_value: "lowest",
  filters:{
    text: "",
    product_category: "all",
    brand: "all",
    available_model_colors_list: "all",
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
    const [data, setData] = useState("")
    // console.log("datamain1", data)


  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data.Response.Result;
      setData(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}});
  };

  const clearFilters = () => {
    console.log("clearFilters", clearFilters)
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    if (state.sorting_value === "a-z") {
      const sortedProducts = [...state.products].sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: sortedProducts });
    }
    if (state.sorting_value === "z-a") {
      const sortedProducts = [...state.products].sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: sortedProducts });
    }
    if (state.sorting_value === "lowest") {
      const sortedProducts = [...state.products].sort((a, b) =>
      a.discount_price - b.discount_price
      );
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: sortedProducts });
    }
    if (state.sorting_value === "highest") {
      const sortedProducts = [...state.products].sort((a, b) =>
      b.discount_price - a.discount_price
      );
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: sortedProducts });
    }
    dispatch({type:"FILTER_PRODUCTS"});
  }, [state.sorting_value, state.products, state.filters]);

  useEffect(() => {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: data });
    },[data]);
  

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      console.log({url})
      const res = await axios.get(url);
      const singleProduct = await res.data.Response.Result[0];
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
}, []);

  return (
    <FilterContext.Provider value={{ ...state, getSingleProduct, setGridView, setListView, sorting, updateFilterValue, clearFilters  }}>
      {children}</FilterContext.Provider>
  );
};

// custom hooks
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, FilterContext, useFilterContext };