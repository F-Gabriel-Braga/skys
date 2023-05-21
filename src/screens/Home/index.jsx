import "./style.css";
import background from "../../assets/images/beach.jpg"
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/api-config";

export default function Home() {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get(config.IBGE_CITIES).then(response => {
            setCities(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
            {/* <a href="https://br.freepik.com/fotos-gratis/vista-deslumbrante-da-praia-e-do-mar-sob-o-ceu-azul-capturado-em-mombasa-quenia_9076682.htm#query=Fortaleza&position=47&from_view=search&track=sph">Imagem de wirestock</a> no Freepik */}
            <div className="filter-flight">
                <h3>Busque pôr passagens aéreas</h3>
                <form className="filters">
                    <label>
                        <i className="bi bi-search me-2"></i> Origem <br />
                        <input type="text" placeholder="Origem" list="cities" />
                    </label>
                    <label>
                        <i className="bi bi-search me-2"></i> Destino <br />
                        <input type="text" placeholder="Destino" list="cities" />
                    </label>
                    <label>
                        <i className="bi bi-calendar-week me-2"></i> Data <br />
                        <input type="date" placeholder="Data" />
                    </label>
                    <label>
                        <i className="bi bi-arrow-down-up me-2"></i> Situação <br />
                        <input type="text" placeholder="Situação" value="IDA" disabled />
                    </label>
                    <Button variant="success">Buscar</Button>
                    <datalist id="cities">
                        {cities.map(city => <option key={city["municipio-id"]} value={`${city["municipio-nome"]}, ${city["UF-sigla"]}`} />)}
                    </datalist>
                </form>
            </div>
        </div>
    );
}