import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ListView from "./ListView";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import axios from "axios";


const SearchResult = () => {
  const location = useLocation();
  const { searchResults, searchText } = location.state;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [data, setData] = useState("")
  // const [colordata, setColorData] = useState("")
  const [data, setData] = useState([]);
  const [colordata, setColorData] = useState([]);
  console.log("colordata", colordata)
  // console.log("data", data)
  const API_URL = "http://127.0.0.1:8000/search/products/on_top2";


  const brandData = (searchResults[2][0]['brands_list'])
  const colorData = (searchResults[1][0]['colors_list'])

  const [selectedBrand, setSelectedBrand] = useState(""); 
  const [selectedColor, setSelectedColor] = useState("");

  const handleBrandSelection = (brand) => {
    console.log("brand", brand)
      setSelectedBrand(brand);
      setData([]);
    };
   
  const handleColorSelection = (color) => {
    console.log("color", color)
      setSelectedColor(color);
      setColorData([]);
    };

    useEffect(() => {
      if (selectedBrand) {
        fetchFilterOptions();
      } else {
        setData([]); // Clear the data array if no brand is selected
      }
    }, [selectedBrand, selectedColor, searchText]);

    useEffect(() => {
      if (selectedColor) {
        fetchColorOptions();
      } else {
        setColorData([]); // Clear the colordata array if no color is selected
      }
    }, [selectedColor, selectedBrand, searchText]);
    
  // useEffect(() => {
  //   if (selectedBrand) {
  //     fetchFilterOptions();
  //   }if (selectedColor) {
  //     fetchColorOptions();
  //   }else {
  //     setData("");
  //   }
  // }, [selectedBrand, selectedColor, searchText]);
  // useEffect(() => {
  //   fetchFilterOptions()
  // }, [selectedBrand, searchText]);

const fetchFilterOptions = async () => {
  // e.preventDefault();
  console.log("fetchFilterOptions", searchText)
    try {
      setIsLoading(true);
      setError(null);
      const colorToFetch = selectedColor || "";
      const response = await axios.get(`${API_URL}?brand=${selectedBrand}&search_text=${searchText}&color=${encodeURIComponent(colorToFetch)}`);
      setData(response.data.Response.Result[0]);
      // setColorData([]);
      // console.log("searchBrands", response.data.Response.Result[0])
    } catch (error) {
      setError("An error occurred while fetching the search results.");
    } finally {
      setIsLoading(false);
    }
    };
    const fetchColorOptions = async () => {
      // e.preventDefault();
      console.log("fetchColorOptions", searchText)
      console.log("fetchColorOptions Brand", selectedBrand)
      console.log("fetchColorOptions Color", selectedColor)
        try {
          setIsLoading(true);
          setError(null);
          console.log("brandData[0]", brandData[0])
          const brandToFetch = selectedBrand || brandData[0];
          console.log("brandToFetch", brandToFetch)
          const response = await axios.get(`${API_URL}?brand=${brandToFetch}&search_text=${searchText}&color=${encodeURIComponent(selectedColor)}`);
          // setColorData(response.data.Response.Result[0])
          setColorData((prevData) => prevData.concat(response.data.Response.Result[0]));
          // setData([]);
          console.log("setColorData", response.data.Response.Result[0])
        } catch (error) {
          setError("An error occurred while fetching the search results.");
        } finally {
          setIsLoading(false);
        }
        };
//   return (
//     <div>
//       <h2 style={{textAlign:"center"}}>Search Results</h2>
      
//       {searchResults && searchResults.length > 0 ? (
//         <ListView products={searchResults} />
//       ) : (
//         <p style={{textAlign:"center"}}>No search results found.</p>
//       )}
//     </div>
//   );
// };
return (
   <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
    <div className="filter-category">
        <h3>Brands</h3>
        <div>
          {brandData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="brand"
                value={curElem}
                onClick={() => {
                  handleBrandSelection(curElem);
                  fetchFilterOptions(curElem, selectedColor, searchText);
                }}
                >
                {curElem}
              </button>
            )
          })}
        </div>
      </div>
      <div className="filter-category">
        <h3>Colors Available</h3>
        <div className="filter-color-style">
          {colorData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="brand"
                value={curElem}
                onClick={() => {
                  handleColorSelection(curElem);
                  fetchColorOptions(curElem, selectedBrand, searchText);
                }}
                style={{ backgroundColor: curElem }}
                className={`color-circle ${selectedColor === curElem ? "active" : ""}`}
               >
                {selectedColor === curElem && <FaCheck className="checkStyle" />}
              </button>
            )
          })}
        </div>
      </div>
      </div>
      
      <div className="main-product">
      <h2 style={{textAlign:"center"}}>Search Results</h2>
          
           {/* {searchResults[0] && searchResults[0].length > 0 ? (
            <ListView products={searchResults[0]} />
           ) : (
              <p style={{textAlign:"center"}}>No search results found.</p>
           )} */}

        {/* {selectedColor && colorData.length > 0 ? (
          <ListView products={colorData} />
        ): selectedBrand && data.length > 0 ? (
          <ListView products={data} />
        ) : searchResults && searchResults[0].length > 0 ? (
          <ListView products={searchResults[0]} />
        ) : (
          <p style={{ textAlign: "center" }}>No search results found.</p>
        )} */}



          {/* {selectedColor && colordata.length > 0 && (
            <ListView products={colordata} />
          )}

          {!selectedColor && selectedBrand && data.length > 0 && (
            <ListView products={data} />
          )}

          {!selectedColor && !selectedBrand && searchResults[0].length > 0 && (
            <ListView products={searchResults[0]} />
          )}

          {(selectedColor || selectedBrand || searchResults[0].length === 0) && (
            <p style={{ textAlign: "center" }}>No search results found.</p>
          )} */}


{/* {selectedColor && colordata.length > 0 && (
        <ListView products={colordata} />
      )}
      {!selectedColor && selectedBrand && data.length > 0 && (
        <ListView products={data} />
      )}
      {!selectedColor && !selectedBrand && searchResults[0].length > 0 && (
        <ListView products={searchResults[0]} />
      )}
      {(selectedColor || selectedBrand) &&
        colordata.length === 0 &&
        data.length === 0 &&
        searchResults[0].length === 0 && (
          <p style={{ textAlign: "center" }}>No search results found.</p>
        )} */}

        {selectedColor && colordata.length > 0 && (
        <ListView products={colordata} />
      )}
      {!selectedColor && selectedBrand && data.length > 0 && (
        <ListView products={data} />
      )}
      {!selectedColor && !selectedBrand && searchResults[0].length > 0 && (
        <ListView products={searchResults[0]} />
      )}
      {!selectedColor && !selectedBrand && colordata.length === 0 && data.length === 0 && searchResults[0].length === 0 && (
        <p style={{ textAlign: "center" }}>No search results found.</p>
      )}


{/* {selectedColor && colordata.length > 0 && (
        <ListView products={colordata} />
      )}
      {!selectedColor && selectedBrand && data.length > 0 && (
        <ListView products={data} />
      )}
      {!selectedColor && !selectedBrand && colordata.length === 0 && data.length === 0 && searchResults[0].length > 0 && (
        <ListView products={searchResults[0]} />
      )}
      {!selectedColor && !selectedBrand && colordata.length === 0 && data.length === 0 && searchResults[0].length === 0 && (
        <p style={{ textAlign: "center" }}>No search results found.</p>
      )} */}

      {/* {selectedColor && colordata.length > 0 && (
        <ListView products={colordata} />
      )}
      {!selectedColor && selectedBrand && data.length > 0 && (
        <ListView products={data} />
      )}
      {!selectedColor && !selectedBrand && searchResults[0].length > 0 && (
        <ListView products={searchResults[0]} />
      )}
      {(selectedColor || selectedBrand) &&
        colordata.length === 0 &&
        data.length === 0 &&
        searchResults[0].length === 0 && (
          <p style={{ textAlign: "center" }}>No search results found.</p>
        )} */}


           {/* {searchResults[0] && searchResults[0].length > 0 ? (
      <ListView products={searchResults[0]} />
    ) : data.length > 0 ? (
      <ListView products={data} />
    ) : (
      <p style={{textAlign:"center"}}>No search results found.</p>
    )} */}


          {/* {searchResults[0] && searchResults[0].length > 0 ? (
            <ListView products={searchResults[0]} />
          ) : data.length > 0 ? (
            <ListView products={data} />
          ) : (
            <p style={{ textAlign: "center" }}>No search results found.</p>
          )} */}
          </div>
    </div>
  </Wrapper>
)};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
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

  .color-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid white; /* Add a white border */
    transition: border-color 0.3s; /* Add a transition for a smooth effect */
  }
  
  .color-circle:hover {
    border-color: transparent; /* Set border-color to transparent on hover */
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

export default SearchResult;

