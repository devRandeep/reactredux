import React from 'react';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
export default function Header() {
  
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <header className="header">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#about">About</a></li> 
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
     
      <div className="wishlist-count">
        <p> <b style={{color: "red"}}>Whishlist Items:</b> <b>{wishlist.length}</b></p>
      </div>
    </header>
  );}