import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { cartContext } from "../../GlobalState/CartContext";
import './Desktop.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'
import { Badge, Button, Dialog, DialogActions, DialogContent, Menu, MenuItem, Slide, Tooltip, Typography } from '@mui/material';
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
const Navbar = () => {
  const { qty } = useContext(cartContext);
  let authToken = localStorage.getItem('Authorization');

  let setProceed = authToken !== null ? true : false

  return (
    <>
    <nav className='nav'>
      {/* <ul className="right">
        <li>
          <Link to="/">Your Store</Link>
        </li>
      </ul> */}
      <div className="logo">
          <Link to='/Home'>
            <span >ShopSmart</span>
          </Link>
        </div>
      {/* <ul className="left">
        <li>
          <Link to="/cart">
            <span className="shopping-cart">
              <i className="fas fa-cart-plus"></i>
              <span className="cart-count">{qty}</span>
            </span>
          </Link>
        </li>
      </ul> */}

 <div className="nav-items">
          <ul className="nav-items">
            <li>
            <div class='max-w-md mx-auto'>
  
</div>
            </li>
            <li className="nav-links">
              <NavLink to='/shop'>
                <span className='nav-icon-span'>Shop</span>
              </NavLink>
            </li>
         
            <li className="nav-links">
              <Tooltip title='Wishlist'>
              <Link to="/cart">              
                <span className='nav-icon-span' >  <Badge> <AiOutlineShoppingCart className='nav-icon' /></Badge>Cart </span>
                <span >{qty}</span>
                </Link>
              </Tooltip>
            </li>
            <li className="nav-links">
              <Tooltip title='Wishlist'>
                <NavLink to="/order">
                  <span className='nav-icon-span'>  <Badge> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg></Badge>Orders</span>
                </NavLink>
              </Tooltip>
            </li>
            

            {
              setProceed ?
                <>
                  <li className="nav-links">
                    <Tooltip title='Profile'>
                      <NavLink to='/update'>
                        <span className='nav-icon-span'>  <CgProfile style={{ fontSize: 29, marginTop: 7,marginRight:10 }} /></span>
                      </NavLink>
                    </Tooltip>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }} >
                    <Button variant='contained' className='nav-icon-span' sx={{ marginBottom: 1 }} endIcon={<FiLogOut />}>
                      <Typography variant='button'> Logout</Typography>
                    </Button>
                  </li>
                </>
                :
                <li className="nav-links">
                  <Tooltip title='Login'>
                    <NavLink to='/login'>
                      <span className='nav-icon-span'>   <CgProfile style={{ fontSize: 29, marginTop: 7 }} /></span>
                    </NavLink>
                  </Tooltip>
                </li>
            }
          </ul>
        </div>


    </nav>
    </>
  );
};

export default Navbar;
