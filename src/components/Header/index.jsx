import "./style.css";
import logo from "../../assets/images/skys.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" />
                    <span>SKY'S</span>
                </Link>
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