import "./style.css";
import logo from "../../assets/images/skys.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Header() {

    const { setUserLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    function signout() {
        navigate("/access");
        setUserLogged(null);
    }

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
                    <Button variant="link" className="logout" onClick={signout}>
                        <i class="bi bi-box-arrow-right"></i>
                    </Button>
                </div>
            </div>    
        </header>
    );
}