import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Admin from './Admin';
import AdminNavBar from './Admin Components/AdminNavBar';

const AdminRouter = () => {

  return (
    <>
    <Routes>
        <Route path="/admin" element={<Admin />} />
    </Routes>
    </>
  );
}

export default AdminRouter