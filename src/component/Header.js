import React from 'react';
import '../Css/Header.css';
import photo from '../Images/photo.jpeg';
import NavBar from './NavBar';
import { Divider } from 'antd';

function Header() {
    return (
        <div>
        <div className='header'>
            
            <div className='p-5 ml-10'>
                <img className='logo' src={photo} />
            </div>
                <div className='NavBar' >
                    <NavBar />
                </div>
            
            </div>
            <Divider style={{margin: 0, padding:0}} />
            </div>
        
    )
}

export default Header;
