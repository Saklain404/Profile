import React from 'react'
import { ServicesCard } from '../component/ServicesCard';
<<<<<<< HEAD
import { Row, Col } from 'antd';
=======
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
import '../App.css';
import '../Css/Home.css';

function Home() {
    const cardDetails = [
<<<<<<< HEAD

        {
            title: 'Services',
            details: "Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience",
            path: '/services/2'
        },
        {
            title: 'Services',
            details: "Wordpress CMS is a user-friendly administrative area allowing you to easily edit your website's content.",
=======
        {
            title: 'Developer',
            details: "Details Regarding the Above Topic",
            path: '/services/1'
        },
        {
            title: 'Product',
            details: "suno madrjatttt gand marao phrrr",
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
            path: '/services/2'
        },

        {
            title: 'Services',
<<<<<<< HEAD
            details: "We offer customised WordPress training to ensure you are confident in updating and maintaining your WordPress website.",
            path: '/contact/3'
=======
            details: "suno madrjatttt gand marao phrrr",
            path: '/services/3'
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
        },]

    return (
        <div className='card-container'>
<<<<<<< HEAD
            {/* <h1 className='name'>Owner Name</h1> */}
            <Row>
                {cardDetails.map((item, index) => (
                    <Col {...{ lg: 8, }} style={{ backgroudColor: '#000' }}>
                        <ServicesCard {...item} key={index.toString()} />
                    </Col>))
                }
            </Row>
=======
            <h1 className='name'>Owner Name</h1>
            <div className='row justify-between'>
                {cardDetails.map((item, index) => (
                    <ServicesCard {...item} key={index.toString()} />
                ))
                }
            </div>
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
        </div>
    )
}

export default Home;
