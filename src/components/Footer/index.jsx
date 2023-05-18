import "./style.css";
import logo from "../../assets/images/skys.svg";
import { Link } from "react-router-dom";
import facebo from "../../assets/icons/facebook-square.svg";
import instag from "../../assets/icons/instagram.svg";
import twiter from "../../assets/icons/twitter-square.svg";

export default function Footer() {
    return (
        <header className="footer">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" />
                    <span>SKY'S</span>
                </Link>
                <div className="nav">
                    <Link to="/terms">Termos e condições e política de privacidade</Link>
                    <Link to="/">
                        <img src={facebo} alt="" />
                    </Link>
                    <Link to="/">
                        <img src={instag} alt="" />
                    </Link>
                    <Link to="/">
                        <img src={twiter} alt="" />
                    </Link>
                </div>
            </div>    
        </header>
    );
}