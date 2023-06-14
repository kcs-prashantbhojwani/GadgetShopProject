// import React, { createContext, useState, useContext } from "react";
// import axios from "axios";
// import { NavLink, useNavigate  } from "react-router-dom";
// import { Button } from "./styles/Button";


// const SearchBar = ({}) => {
//     const [searchText, setSearchText] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
  
//     const API_URL = "http://127.0.0.1:8000/search/products/on_top2"; // Replace with your API endpoint
  
//     const handleInputChange = (e) => {
//       setSearchText(e.target.value);
//     };
  
//     const handleFormSubmit = async (e) => {
//       e.preventDefault();
//     //   navigate("/searchresult");
  
//       try {
//         setIsLoading(true);
//         setError(null);
//         console.log("searchText", searchText)
//         const response = await axios.get(`${API_URL}?search_text=${searchText}`);
//         setSearchResults(response.data);
//         navigate("/searchresult", { state: { searchResults: response.data.Response.Result },searchText });
//         console.log("setSearchResults", response.data.Response.Result)
//       } catch (error) {
//         setError("An error occurred while fetching the search results.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleFormSubmit} navigate= {(searchResults, searchText)}>
//           <input
//             type="text"
//             value={searchText}
//             onChange={handleInputChange}
//             placeholder= "SEARCH  GADGET  SHOP"
//             style={{ width: '250px', textAlign:"center" }}
//           />
//           {/* <NavLink to={"/searchresult"}><Button>Search</Button></NavLink> */}
//         </form>
  
//         {isLoading && <p>Loading...</p>}
  
//         {error && <p>{error}</p>}
  
//         {searchResults.length > 0 && (
//           <ul>
//             {searchResults.map((result) => (
//               <li key={result.id}>{result.title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };
//   export default SearchBar;

import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate  } from "react-router-dom";
import { Button } from "./styles/Button";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = "http://127.0.0.1:8000/search/products/on_top2"; // Replace with your API endpoint

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}?search_text=${searchText}`);
      setSearchResults(response.data.Response.Result);
      navigate("/searchresult", { state: { searchResults: response.data.Response.Result, searchText: searchText } });
    } catch (error) {
      setError("An error occurred while fetching the search results.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="SEARCH  GADGET  SHOP"
          style={{ width: '250px', textAlign: "center" }}
        />
        {/* <NavLink to={"/searchresult"}><Button>Search</Button></NavLink> */}
      </form>

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;


