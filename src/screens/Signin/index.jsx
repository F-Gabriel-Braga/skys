import "./style.css";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Signin() {
    return (
        <>
            <div className="signin">
                <div className="options">
                    <h2>Faça seu login</h2>
                    <div className="input-group">
                        <label htmlFor="email">
                            <i className="bi bi-envelope-at-fill"></i>
                        </label>
                        <input type="text" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pass">
                            <i className="bi bi-key-fill"></i>
                        </label>
                        <input type="text" id="pass" />
                    </div>
                    <Button>Acessar</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}