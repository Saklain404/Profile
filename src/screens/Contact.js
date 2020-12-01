import React from 'react'
<<<<<<< HEAD
import { Table } from 'antd';

function Contact() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        
        <div>
            <Table dataSource={dataSource} columns={columns} />;
=======

function Contact() {
    return (
        <div>
            <h1>This is Contact</h1>
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
        </div>
    )
}

export default Contact;
