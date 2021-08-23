import "./header.css";
import background from '../../assets/background.png';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">My Aide-mémoire of Computer Science</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={background} className="headerImg" alt=""></img>
        </div>
    )
}
