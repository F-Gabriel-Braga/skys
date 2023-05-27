import { Button, Modal, Table } from "react-bootstrap";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config/api-config";
import AuthContext from "../../context/AuthContext";
import jwtDecode from "jwt-decode";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader";

export default function Tickets() {

    const [showTicket, setShowTicket] = useState(false);
    const [showDelTicket, setShowDelTicket] = useState(false);
    const [reserves, setReserves] = useState(null);
    const [travels, setTravels] = useState(null);
    const [payload, setPaylod] = useState(null);
    const [ticket, setTicket] = useState(null);
    const [ticketDel, setTicketDel] = useState(null);

    const handleShowTicket = (ticket) => {
        setTicket(ticket);
        setShowTicket(true);
    };
    const handleCloseTicket = () => {
        setTicket(null);
        setShowTicket(false);
    }

    const handleShowDelTicket = (ticket) => {
        setTicketDel(ticket);
        setShowDelTicket(true);
    };
    const handleCloseDelTicket = () => {
        setTicketDel(null);
        setShowDelTicket(false);
    }

    const { userLogged } = useContext(AuthContext);

    useEffect(() => {
        const payload = jwtDecode(userLogged.accessToken);
        setPaylod(payload);
    }, [userLogged]);

    useEffect(() => {
        if(userLogged && payload) {
            initializaReserves();
            initializaTravels();
        }
    }, [userLogged, payload]);

    function formatDate(data) {
        data.forEach(info => {
            let dateAux = new Date(info.dateHourFlight).toLocaleDateString();
            let hourAux = new Date(info.dateHourFlight).toLocaleTimeString();
            info.dateHourFlight = `${dateAux} ${hourAux}`;
            dateAux = new Date(info.dateHourLanding).toLocaleDateString();
            hourAux = new Date(info.dateHourLanding).toLocaleTimeString();
            info.dateHourLanding = `${dateAux} ${hourAux}`;
        });
    }

    function initializaReserves() {
        const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
        axios.get(`${config.BASE_URL}/tickets/reserves/${payload?.id}`, { headers }).then(response => {
            formatDate(response.data);
            setReserves(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    function initializaTravels() {
        const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
        axios.get(`${config.BASE_URL}/tickets/travels/${payload?.id}`, { headers }).then(response => {
            formatDate(response.data);
            setTravels(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    function deleteReserve() {
        const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
        if(ticketDel && ticketDel.id) {
            axios.delete(`${config.BASE_URL}/tickets/${ticketDel.id}`, { headers }).then(() => {
                handleCloseDelTicket();
                initializaReserves();
                toast.success("Reserva cancelada.", { duration: 2500, position: "top-right" });
            }).catch(error => {
                console.log(error);
                toast.error("Algo deu errado.", { duration: 2500, position: "top-right" });
            });
        }
    }

    return (
        <div className="tickets sec">
            <h2>Reservas</h2>
            {!reserves? <Loader /> :
            <Table striped bordered hover>
                <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "22%" }} />
                    <col style={{ width: "22%" }} />
                    <col style={{ width: "19%" }} />
                    <col style={{ width: "20%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Situação</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {reserves.map(reserve => {
                        return (
                            <tr key={reserve.id}>
                                <td>{reserve.type}</td>
                                <td>{reserve.flight?.from}</td>
                                <td>{reserve.flight?.to}</td>
                                <td>{reserve.dateHourFlight}</td>
                                <td className="d-flex flex-row gap-2 justify-content-center">
                                    <Button variant="danger" onClick={() => handleShowDelTicket(reserve)}>Cancelar</Button>
                                    <Button as={Link} to={`/payment/${reserve.id}`}>Comprar</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>}<br />
            <h2>Viagens</h2>
            {!travels? <Loader /> :
            <Table striped bordered hover>
                <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "25%" }} />
                    <col style={{ width: "25%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "15%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Situação</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {travels.map(travel => {
                        return (
                            <tr key={travel.id}>
                                <td>{travel.type}</td>
                                <td>{travel.flight.from}</td>
                                <td>{travel.flight.to}</td>
                                <td>{travel.dateHourFlight}</td>
                                <td className="d-flex flex-row gap-2 justify-content-center">
                                    <Button onClick={() => handleShowTicket(travel)}>Bilhete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>}<br />

            <Modal show={showTicket} onHide={handleCloseTicket}>
                <Modal.Header closeButton>
                    <Modal.Title>{ticket?.flight?.from} <i className="bi bi-arrow-right"></i> {ticket?.flight?.to}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>N° {ticket?.id}</span>
                    <span>{ticket?.flight?.from} <i className="bi bi-arrow-right"></i> {ticket?.flight?.to}</span>
                    <span>{ticket?.dateHourFlight}</span>
                    <span>{ticket?.dateHourLanding}</span>
                    <span className="pay">Pagamento realizado com sucesso</span>
                </Modal.Body>
            </Modal>

            <Modal show={showDelTicket} onHide={handleCloseDelTicket}>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja cancelar esta reserva?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>{ticketDel?.flight?.from} <i className="bi bi-arrow-right"></i> {ticketDel?.flight?.to}</span>
                    <span>{ticketDel?.dateHourFlight}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseDelTicket}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={deleteReserve}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}