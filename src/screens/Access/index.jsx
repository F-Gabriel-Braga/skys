import "./style.css";
import background from "../../assets/images/beach.jpg";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Access() {
    return (
        <>
            <div className="access" style={{ backgroundImage: `url(${background})` }}>
                <div className="options">
                    <h2>Acesse agora</h2>
                    <Button>Acesse com e-mail</Button>
                    <Button>Cadastre-se</Button>
                </div>
                {/* <a href="https://br.freepik.com/fotos-gratis/vista-deslumbrante-da-praia-e-do-mar-sob-o-ceu-azul-capturado-em-mombasa-quenia_9076682.htm#query=Fortaleza&position=47&from_view=search&track=sph">Imagem de wirestock</a> no Freepik */}
            </div>
            <Footer />
        </>
    );
}