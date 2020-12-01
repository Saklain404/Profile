import React from 'react';
import '../Css/Footer.css';
import { Ionicons } from 'react-web-vector-icons';
import NavBar from './NavBar';
<<<<<<< HEAD
import { selectScreen } from '../helpers/screenHelpers';
import { Row, Col } from 'antd';
=======
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e


function Footer() {
    return (
        <div className='footer'>
            <div className='icons'>
<<<<<<< HEAD
                <a href="https://www.linkedin.com/in/saklain-8295b2195/">
                <Ionicons
                    name='logo-twitter'
                    color='black'
                    size={30}
                    style={{ margin: ["10px , 10px , 0px, 10px"] }}
                    />
                </a>

                <a href="https://www.instagram.com/mr.khalid_aziz/">
                    <Ionicons
                        name='logo-instagram'
                        color='black'
                        size={30}
                        style={{ margin: '10px', }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/saklain-8295b2195/" >
                    <Ionicons
                        name='logo-linkedin'
                        color='black'
                        size={30}
                        style={{ margin: '10px', }}
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009059254949">
                <Ionicons
                    name='logo-facebook'
                    color='black'
                    size={30}
                    style={{ margin: '10px' }}
                    />
                </a>
            </div>
            <div className='footer_link' style={{ display: selectScreen('none', 'none', 'none', 'flex', 'flex', 'flex') }}>
=======
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
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
                <NavBar />
            </div>

        </div>
    )
}

export default Footer;
