import "./style.css";
import background from "../../assets/images/beach.jpg"
import { Button } from "react-bootstrap";

export default function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
            {/* <a href="https://br.freepik.com/fotos-gratis/vista-deslumbrante-da-praia-e-do-mar-sob-o-ceu-azul-capturado-em-mombasa-quenia_9076682.htm#query=Fortaleza&position=47&from_view=search&track=sph">Imagem de wirestock</a> no Freepik */}
            <div className="filter-flight">
                <h3>Busque pôr passagens aéreas</h3>
                <div className="filters">
                    <Button variant="secondary" className="filter">
                        <div className="filter-text">
                            <i className="bi bi-search"></i>
                            <small>Origem</small>
                        </div>
                        Origem
                    </Button>
                    <Button variant="secondary" className="filter">
                        <div className="filter-text">
                            <i className="bi bi-search"></i>
                            <small>Destino</small>
                        </div>
                        Destino
                    </Button>
                    <Button variant="secondary" className="filter">
                        <div className="filter-text">
                            <i className="bi bi-calendar-week"></i>
                            <small>Data</small>
                        </div>
                        Data
                    </Button>
                    <Button variant="secondary" className="filter">
                        <div className="filter-text">
                            <i className="bi bi-arrow-down-up"></i>
                            <small>Situação</small>
                        </div>
                        IDA
                    </Button>
                    <Button variant="success" className="btn-filter">Buscar</Button>
                </div>
            </div>
        </div>
    );
}