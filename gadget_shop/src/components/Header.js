import React
 from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import AdminNavBar from "../Admin Components/AdminNavBar";

const Header = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");
  if (isAdmin){
    return(
      <MainHeader>
        <NavLink to="/">
        <img src="./images/gadget_logo.png" alt="my logo img" />
      </NavLink>
      <AdminNavBar />
      </MainHeader>
    )
  }else{
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/gadget_logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;