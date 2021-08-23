import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
    return (
        <div className="settings"> 
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <label htmlFor="fileInput">
                            <i className="settingsProfilePictureIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Matheus"></input>
                    <label>Email</label>
                    <input type="email" placeholder="matheusreimer1@gmail.com"></input>
                    <label>Password</label>
                    <input type="password" placeholder=""></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}
