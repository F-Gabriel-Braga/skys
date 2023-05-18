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
                    <a href="">Termos e condições e política de privacidade</a>
                    <a href="">
                        <img src={facebo} alt="" />
                    </a>
                    <a href="">
                        <img src={instag} alt="" />
                    </a>
                    <a href="">
                        <img src={twiter} alt="" />
                    </a>
                </div>
            </div>    
        </header>
    );
}