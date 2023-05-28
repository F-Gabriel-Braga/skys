import "./style.css";
import { Button } from "react-bootstrap";
import middleIcon from "../../assets/icons/span.svg"

export default function Ticket({ id, type, dateHourFlight, from, to, price, confirmReserve }) {
    dateHourFlight = dateHourFlight ? new Date(dateHourFlight).toLocaleDateString() : dateHourFlight;
    return (
        <div className="ticket mb-4">
            <div className="date-situation">
                <span className="situation">{type}</span>
                <span className="date">{dateHourFlight}</span>
            </div>
            <div className="span">
                
            </div>
            <div className="detail-point">
                <span className="title-detail">Origem</span>
                <span className="city-detail mb-3">{from}</span>
            </div>
            <div className="middle">
                <img src={middleIcon} alt="Middle icon" />
            </div>
            <div className="detail-point">
                <span className="title-detail">Destino</span>
                <span className="city-detail mb-3">{to}</span>
            </div>
            <div className="price-details">
                <span className="title-price">Preço</span>
                <span className="price-detail">R$ <strong>{price}</strong></span>
                <Button variant="primary" onClick={() => confirmReserve({ id, dateHourFlight, from, to, price })}>Reservar</Button>
            </div>
        </div>
    );
}