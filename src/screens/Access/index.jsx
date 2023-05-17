import "./style.css";
import background from "../../assets/images/urban.jpg";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Access() {
    return (
        <>
            <div className="access" style={{ backgroundImage: `url(${background})` }}>
                {/* Imagem de <a href="https://br.freepik.com/fotos-gratis/vista-aerea-complexa-da-cidade_14481982.htm#query=s%C3%A3o%20paulo&position=0&from_view=search&track=ais">Freepik</a> */}
                <div className="options">
                    <h2>Acesse agora</h2>
                    <Button>Acesse com e-mail</Button>
                    <Button>Cadastre-se</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}