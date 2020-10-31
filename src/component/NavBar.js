import React from 'react'
import { Link, Router } from 'react-router-dom';
import '../Css/NavBar.css';
import { Menu } from 'antd';
const { Item } = Menu;
function NavBar() {
    return (
        <Menu mode="horizontal" style={{ backgroundColor: "transparent", textDecoration:"none"}}>
            <Item><Link to={"/"}>Home</Link> </Item>
            <Item><Link to={"/tutorials"} >Tutorials</Link> </Item>
            <Item><Link to={"/services/1"} exact >Services</Link> </Item>
            <Item><Link to={"/contact"} >Contact</Link> </Item>
            <Item><Link to={"/about"} >About</Link> </Item>
    </Menu>
    )
}

export default NavBar;
