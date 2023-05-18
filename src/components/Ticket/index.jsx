import "./style.css";
import { Button } from "react-bootstrap";
import middleIcon from "../../assets/icons/span.svg"

export default function Ticket({ id, situation, date, hour, from, to, price }) {
    return (
        <div className="ticket mb-4">
            <div className="date-situation">
                <span className="situation">{situation}</span>
                <span className="date">{date}</span>
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
                <Button variant="primary">Reservar</Button>
            </div>
        </div>
    );
}