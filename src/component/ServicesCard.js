import React from 'react'
import { Card, Typography, Button } from 'antd';
import '../Css/Card.css';
import photo from '../Images/photo.jpeg';
import { Link } from 'react-router-dom';


export const ServicesCard = ({ image, title, details, path }) => {
    return (
        <div className='cardd'>
<<<<<<< HEAD
            <Card style={{ width: '20rem', backgroundColor: '#ddd',  }}>
=======
            <Card style={{ width: 370, backgroundColor: '#ddd' }}>
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
                <div className={'image'}>
                    <img src={image || photo} className='card-image' />
                </div >
                <p className='About'>{title || "About me"}</p>
                <p>{details || "Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience...."}</p>
                <div className='btn-div'>
                    <Button className='card-btn'>
                        <Link to={path}>
                            Learn more
                        </Link>                         
                        </Button>
                </div>
            </Card>
        </div>
    )
}

