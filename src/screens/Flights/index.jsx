import "./style.css";
import { useContext, useEffect, useState } from "react";
import Ticket from "../../components/Ticket";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import config from "../../config/api-config";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { toast } from "react-hot-toast";

export default function Flights() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [params, setParams] = useState(null);
    const { userLogged } = useContext(AuthContext);
    const [flights, setFlights] = useState([]);
    const [flight, setFlight] = useState(null);
    const [showReserFlight, setShowReserFlight] = useState(false);
    const navigate = useNavigate();

    const handleShowReserFlight = (flight) => {
        setFlight(flight);
        setShowReserFlight(true);
    };

    const handleCloseReserFlight = () => {
        setFlight(null);
        setShowReserFlight(false);
    };

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
            });
        }
    }, [userLogged, params]);

    function reserveFlight() {
        const payload = jwtDecode(userLogged.accessToken);
        const idClient = payload.id;
        const idFlight = flight.id;
        const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
        axios.post(`${config.BASE_URL}/tickets`, { idClient, idFlight }, { headers }).then(response => {
            toast.success("Voo reservado.", { duration: 2500, position: "top-right" });
            navigate("/tickets");
        }).catch(error => {
            console.log(error);
            toast.success("Algo deu errado.", { duration: 2500, position: "top-right" });
        });
    }

    return (
        <div className="flitghs sec">
            <h2>Voos</h2>
            {flights.length == 0 ?
                <span className="search-empty">Nenhum voo encontrado.</span> : 
                flights.map(flight => <Ticket {...flight} confirmReserve={handleShowReserFlight} />)
            }
            <Modal show={showReserFlight} onHide={handleCloseReserFlight}>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja reservar este voo?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>{flight?.from} <i className="bi bi-arrow-right"></i> {flight?.to}</span>
                    <span>{flight?.dateHourFlight}</span>
                    <span>R$ {flight?.price}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseReserFlight}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={reserveFlight}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}