import "./style.css";
import { useContext, useEffect, useState } from "react";
import Ticket from "../../components/Ticket";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import config from "../../config/api-config";
import { useSearchParams } from "react-router-dom";

export default function Flights() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [params, setParams] = useState(null);
    const { userLogged } = useContext(AuthContext);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const queryParams = {
            from: searchParams.get("from"),
            to: searchParams.get("to"),
            dateHourFlight: searchParams.get("dateHourFlight")
        };
        setParams(queryParams);
    }, []);

    useEffect(() => {
        if(userLogged && params) {
            const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
            axios.post(`${config.BASE_URL}/flights/filter`, params, { headers }).then(response => {
                setFlights(response.data);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [userLogged, params]);

    return (
        <div className="flitghs sec">
            <h2>Voos</h2>
            {flights.length == 0 ?
                <span className="search-empty">Nenhum voo encontrado.</span> : 
                flights.map(flight => <Ticket {...flight} />)
            }
        </div>
    );
}