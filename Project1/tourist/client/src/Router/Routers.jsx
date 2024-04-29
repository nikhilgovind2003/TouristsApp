import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Toures from '../pages/Toures'
import TourDetails from '../pages/TourDetails'
import SearchResults from '../pages/SearchResults'
const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/tours" element={<Toures />} /> 
            <Route path="/tours/:id" element={<TourDetails />} /> 
            <Route path="/tours/search" element={<SearchResults />} /> 
        </Routes>
    </div>
  )
}

export default Router