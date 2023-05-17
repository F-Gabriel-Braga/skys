import "./style.css";
import logo from "../../assets/images/skys.svg";
import facebo from "../../assets/icons/facebook-square.svg";
import instag from "../../assets/icons/instagram.svg";
import twiter from "../../assets/icons/twitter-square.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <a href="#" className="logo">
                    <img src={logo} alt="Logo" />
                    <span>SKY'S</span>
                </a>
                <div className="nav">
                    <a href="">Consultar Voos</a>
                    <a href="">Reservar Viagens</a>
                    <a href="" className="logout">
                        <i class="bi bi-box-arrow-right"></i>
                    </a>
                </div>
            </div>    
        </header>
    );
}