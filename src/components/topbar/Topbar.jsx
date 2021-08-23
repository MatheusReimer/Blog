import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-github"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fas fa-portrait"></i> 
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" ><Link to="/"  className="link">HOME</Link></li>
                    <li className="topListItem" ><Link to="/"  className="link">ABOUT</Link></li>
                    <li className="topListItem" ><Link to="/"  className="link">CONTACT</Link></li>
                    <li className="topListItem" ><Link to="/Login"  className="link">{user ? "" : "LOGIN"}</Link></li>
                    <li className="topListItem" ><Link to="/Write"  className="link">{user ? "WRITE" : ""}</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT" }
                    </li>

                
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                                    <img src="https://avatars.githubusercontent.com/u/56495954?v=4" alt="MyPicture" className="topImg"></img>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                    </ul> 
                    )}

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
