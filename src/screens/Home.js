import React from 'react'
import { ServicesCard } from '../component/ServicesCard';
import '../App.css';
import '../Css/Home.css';

function Home() {
    const cardDetails = [
        {
            title: 'Developer',
            details: "Details Regarding the Above Topic",
            path: '/services/1'
        },
        {
            title: 'Product',
            details: "suno madrjatttt gand marao phrrr",
            path: '/services/2'
        },

        {
            title: 'Services',
            details: "suno madrjatttt gand marao phrrr",
            path: '/services/3'
        },]

    return (
        <div className='card-container'>
            <h1 className='name'>Owner Name</h1>
            <div className='row justify-between'>
                {cardDetails.map((item, index) => (
                    <ServicesCard {...item} key={index.toString()} />
                ))
                }
            </div>
        </div>
    )
}

export default Home;
