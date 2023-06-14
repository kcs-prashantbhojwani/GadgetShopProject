import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { Button } from "../styles/Button";
import {FaCheck} from "react-icons/fa"

const FilterSection = () => {
  const { filters: {text, product_category, brand, available_model_colors_list},
  filterProducts, 
  updateFilterValue,
  clearFilters,
} = useFilterContext()

const getUniqueData = (data, attr) => {
  let newVal = data.map((curElem) => {
    return curElem[attr];
  });

  if (attr === "available_model_colors_list"){
    newVal = newVal.flat();
  }
  return(newVal = ["all", ...new Set(newVal)]);
};

const categoryOnlyData = getUniqueData(filterProducts, "product_category")
const brandsData = getUniqueData(filterProducts, "brand")
const colorsData = getUniqueData(filterProducts, "available_model_colors_list")


  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              placeholder="SEARCH"
              onChange={updateFilterValue}
            />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="product_category"
                value={curElem}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            )
          })}
        </div>
      </div>

      <div className="filter-category">
        <h3>Brands</h3>
        <div>
          {brandsData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="brand"
                value={curElem}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            )
          })}
        </div>
      </div>
      <div className="filter-colors colors">
        <h3>Colors Available</h3>

      <div className="filter-color-style">
            {colorsData.map((curColor, index) => {
              if (curColor === "all") {
                return(
                  <button 
                  key={index}
                  type="button" 
                  value={curColor}
                  name="available_model_colors_list"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                  </button>
                )
              }
              return(
                <button 
                key={index}
                type="button" 
                value={curColor}
                name="available_model_colors_list"
                style={{backgroundColor: curColor}}
                className={available_model_colors_list === curColor ? "btnStyle active": "btnStyle"}
                onClick={updateFilterValue}>
                  {available_model_colors_list === curColor ? <FaCheck className="checkStyle"/>: null}
                </button>
              )
            })}
      </div>
      </div>

      <div className="filter-clear">
            <Button className="btn" onClick={clearFilters}>
            Clear Filters
            </Button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;