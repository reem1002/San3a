import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
export default function Nav
    () {
    return (
        <div className='nav-bar shadow-sm '>

            <div className='nav container  '>
                <img src="/imgs/logo.png" alt="Logo" className='logo' />
                <div className='Navs_links'>
                    <Link to="/" className='nav-link'>
                        <img src="/imgs/home-icon.png" alt="Home" className='nav-link-img' />
                    </Link>

                    <Link to="/shop" className='nav-link'>
                        <img src="/imgs/shop icon.png" alt="Shop" className='nav-link-img' />
                    </Link>

                    <Link to="/learn" className='nav-link'>
                        <img src="/imgs/learn-icon.png" alt="Learn" className='nav-link-img' />
                    </Link>
                </div>
                <div className='search'>
                    <img src="/imgs/search.png" alt="Logo" className='search-icon' />
                    <input type="text" placeholder='هل تبحث عن منتج معين؟' />
                </div>
                <div className='nav_user'>
                    <img src="/imgs/notification.png" alt="Logo" className='nav-link-img' />
                    <img src="/imgs/fav.png" alt="Logo" className='nav-link-img' />
                    <img src="/imgs/cart.png" alt="Logo" className='nav-link-img' />
                </div>
                <div className='nav_account'>
                    <img src="/imgs/account.png" alt="Logo" className='user-icon' />
                    <img src="/imgs/down-line.png" alt="Logo" className='arrow-icon' />
                </div>
            </div>
        </div>
    )
}
