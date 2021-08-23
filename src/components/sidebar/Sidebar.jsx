import "./sidebar.css"

export default function Sidebar() {
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
                        <li className="sidebarListItem">General</li>
                        <li className="sidebarListItem">Image Analysis & Processing</li>
                        <li className="sidebarListItem">Machine Learning</li>
                        <li className="sidebarListItem">Theoric Programming</li>
                        <li className="sidebarListItem">Tech News</li>
                        <li className="sidebarListItem">Databases</li>
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
