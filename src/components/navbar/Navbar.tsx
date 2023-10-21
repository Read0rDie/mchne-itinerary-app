import React from 'react';
import './navbar.scss'
import Logo from '../logo/Logo'

function Navbar() {

    return (
        <>
            <div className='container'>
                <div className='left-container'>
                    <div className='link logo-link'><Logo /></div>
                    <div className='link'><div>Home</div></div>
                </div>
                <div className='right-container'>
                    <div className='link'>
                        <div className='pill-btn blue'>Sign Up</div>
                    </div>
                    <div className='link'>
                        <div className='pill-btn'>Login</div>
                    </div>
                    <div className='link'><div>Search</div></div>
                </div>
            </div>
        </>
    )
}

export default Navbar