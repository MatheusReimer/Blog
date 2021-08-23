import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label className="loginLabels">Email</label>
                <input type="text" classname="loginInput"placeholder="Enter your e-mail"></input>
                <label  className="loginLabels">Password</label>
                <input type="password" classname="loginInput"  placeholder="Enter your password"></input>
                <button className="loginButton">Login</button>
            </form>
        </div>
    )
}
