import React from 'react'
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {

  const wishListCount = useSelector((state) => state.wishList.value)
  
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
      <div className="wishlist">
        <FaHeart className="wishlist-icon" />
        Wishlist
        <span className="wishlist-count">{wishListCount}</span>
      </div>
    </header>
  )
}

