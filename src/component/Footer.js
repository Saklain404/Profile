import React from 'react';
import '../Css/Footer.css';
import { Ionicons } from 'react-web-vector-icons';
import NavBar from './NavBar';


function Footer() {
    return (
        <div className='footer'>
            <div className='icons'>
            <Ionicons
                name='logo-twitter'
                color='black'
                size={30}
                style={{ margin:["10px , 10px , 0px, 10px"]}}
                />
                <div onClick={() => {alert('Asher here')}}>    
                <Ionicons
                    name='logo-instagram'
                    color='black'
                    size={30}
                    style={{ margin: '10px', }}
                    />
                </div>
            <Ionicons
                name='logo-linkedin'
                color='black'
                size={30}
                style={{ margin: '10px',}}
            />
            <Ionicons
                name='logo-facebook'
                color='black'
                size={30}
                style={{ margin: '10px'}}
                />
            </div>
            <div className='footer_link'>
                <NavBar />
            </div>

        </div>
    )
}

export default Footer;
