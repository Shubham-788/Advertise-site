import React from 'react';
import '../style/header.css';
import {NavLink} from 'react-router-dom';
const Header=()=>{
    return (
        <>
        <header>
            <nav>
                <div className='left'>
                    <h1>name</h1>
                </div>
                <div className='right'>
                    <ul>
                        {/* <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/login'>
                                Login
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/dashboard'>
                                Dashboard
                            </NavLink>
                        </li> */}
                        <li>
                            <img src="/logo192.png" style={{width:"50px",borderRadius:"50%"}} alt="photo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    );
};
export default Header;