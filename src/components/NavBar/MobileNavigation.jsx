import React, { useContext, useEffect, useState } from 'react'
import './Mobile.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { AiOutlineHome, AiOutlineHeart, AiOutlineShoppingCart, AiFillMail, AiFillCloseCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { cartContext } from "../../GlobalState/CartContext";
import { FiLogOut } from 'react-icons/fi'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Dialog, DialogActions, DialogContent, Slide, Typography } from '@mui/material';
import { toast } from 'react-toastify';


const MobileNavigation = () => {
    const { qty } = useContext(cartContext);

    const [openAlert, setOpenAlert] = useState(false);

    const navigate = useNavigate()

    let authToken = localStorage.getItem('Authorization')
    let setProceed = authToken !== null ? true : false



    return (
        <Box className='showMobile'>
            <BottomNavigation sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'fixed', bottom: 0, overflowX: 'hidden', height: 60, background: 'white' }}>
                <NavLink to='/Home' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <div className='links'>
                        <AiOutlineHome style={{ fontSize: 23, }} />
                    </div>
                </NavLink>
                <Link to='/cart' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <div className='links'>
                        <Badge  >
                            <AiOutlineShoppingCart style={{ fontSize: 23 }} /> <span >{qty}</span>
                        </Badge>


                    </div>
                </Link>
                <NavLink to='/wishlist' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                    <div className='links' >
                        <Badge  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>                        </Badge>
                    </div>
                </NavLink>


                {
                    setProceed ?
                        <>
                            <NavLink to='/update' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <div className='links'>
                                    <CgProfile style={{ fontSize: 23, }} />

                                </div>
                            </NavLink>
                            <div className='links' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <FiLogOut style={{ fontSize: 23, }} />

                            </div>
                        </>
                        : <NavLink to='/login' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <div className='links'>
                                <CgProfile style={{ fontSize: 23, }} />
                                {/* <span style={{ fontSize: 12 }}>Login</span> */}
                            </div>
                        </NavLink>
                }

            </BottomNavigation >

        </Box >
    );
}


export default MobileNavigation