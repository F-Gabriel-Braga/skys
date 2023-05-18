import "./style.css";
import logo from "../../assets/images/skys.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Header() {
    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" />
                    <span>SKY'S</span>
                </Link>
                <div className="nav">
                    <Link to="/">Consultar Voos</Link>
                    <Link to="/tickets">Reservar Viagens</Link>
                    <Button variant="link" className="logout">
                        <i class="bi bi-box-arrow-right"></i>
                    </Button>
                </div>
            </div>    
        </header>
    );
}