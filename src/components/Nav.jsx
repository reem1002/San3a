import React from 'react'
import './Nav.css'
export default function Nav
    () {
    return (
        <div className='nav-bar shadow-lg '>

            <div className='nav container  '>
                <img src="/imgs/logo.png" alt="Logo" className='logo' />
                <div className='Navs_links'>
                    <a href="#">
                        <img src="/imgs/home-icon.png" alt="Logo" className='nav-link-img' />
                    </a>
                    <a href="#">
                        <img src="/imgs/shop icon.png" alt="Logo" className='nav-link-img' />
                    </a>
                    <a href="#">
                        <img src="/imgs/learn-icon.png" alt="Logo" className='nav-link-img' />
                    </a>
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
