
import "./sidebar.css"
import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats,setCats]= useState([]);
    useEffect(() => {
        const getCats = async() =>{
            const res = await axios.get("/categories")
            setCats(res.data);

        }
        getCats();

    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eius ad deserunt officiis eum ipsa, ea doloremque, quod suscipit distinctio alias? Cumque deleniti minus consequuntur quod! Accusantium aspernatur libero eum?</p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">
                    <span>Categories</span>
                    <ul className="sidebarList">
                        {cats.map((c)=> (
                            <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        )) }
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">Follow my work</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-github"></i>
                        <i className="sidebarIcon fab fa-linkedin"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                        <i className="sidebarIcon fas fa-portrait"></i> 
                    </div>
                </div>
            </div>
        </div>
    )
}
