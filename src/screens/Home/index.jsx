import "./style.css";
import background from "../../assets/images/beach.jpg"
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/api-config";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Home() {

    const [cities, setCities] = useState([]);
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();

    useEffect(() => {
        axios.get(config.IBGE_CITIES).then(response => {
            setCities(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    function onSubmit(data) {
        const { dateHourFlight, from, to } = data;
        navigate(`/flights?from=${from}&to=${to}&dateHourFlight=${dateHourFlight}`);
    }

    return (
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
            {/* <a href="https://br.freepik.com/fotos-gratis/vista-deslumbrante-da-praia-e-do-mar-sob-o-ceu-azul-capturado-em-mombasa-quenia_9076682.htm#query=Fortaleza&position=47&from_view=search&track=sph">Imagem de wirestock</a> no Freepik */}
            <div className="filter-flight">
                <h3>Busque pôr passagens aéreas</h3>
                <form className="filters" onSubmit={handleSubmit(onSubmit)}>
                    <label className={errors.from && "field-invalid"}>
                        <i className="bi bi-search me-2"></i> Origem <br />
                        <input type="text" placeholder="Origem" list="cities" {...register("from", { required: true })} />
                    </label>
                    <label className={errors.to && "field-invalid"}>
                        <i className="bi bi-search me-2"></i> Destino <br />
                        <input type="text" placeholder="Destino" list="cities" {...register("to", { required: true })} />
                    </label>
                    <label className={errors.dateHourFlight && "field-invalid"}>
                        <i className="bi bi-calendar-week me-2"></i> Data <br />
                        <input type="date" placeholder="Data" {...register("dateHourFlight", { required: true })} />
                    </label>
                    <label>
                        <i className="bi bi-arrow-down-up me-2"></i> Situação <br />
                        <input type="text" placeholder="Situação" value="IDA" disabled />
                    </label>
                    <Button variant="success" type="submit">Buscar</Button>
                    <datalist id="cities">
                        {cities.map(city => <option key={city["municipio-id"]} value={`${city["municipio-nome"]}, ${city["UF-sigla"]}`} />)}
                    </datalist>
                </form>
            </div>
            <Link to="/manager" className="btn-gear">
                <i className="bi bi-gear-fill"></i>
            </Link>
        </div>
    );
}