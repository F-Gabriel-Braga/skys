import { Button, Modal, Table } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import Ticket from "../../components/Ticket";

export default function Flights() {

    const [showConfTicket, setShowConfTicket] = useState(false);

    const handleCloseConfTicket = () => setShowConfTicket(false);
    const handleShowConfTicket = () => setShowConfTicket(true);

    const tickets = [
        {
            id: 1,
            situation: "IDA",
            date: "22/7/2023",
            hour: "12:00",
            from: "Fortaleza, CE",
            to: "São Paulo, SP",
            price: 1200
        },
        {
            id: 1,
            situation: "IDA",
            date: "22/7/2023",
            hour: "12:00",
            from: "Fortaleza, CE",
            to: "São Paulo, SP",
            price: 1200
        },
        {
            id: 1,
            situation: "IDA",
            date: "22/7/2023",
            hour: "12:00",
            from: "Fortaleza, CE",
            to: "São Paulo, SP",
            price: 1200
        },
        {
            id: 1,
            situation: "IDA",
            date: "22/7/2023",
            hour: "12:00",
            from: "Fortaleza, CE",
            to: "São Paulo, SP",
            price: 1200
        },
        {
            id: 1,
            situation: "IDA",
            date: "22/7/2023",
            hour: "12:00",
            from: "Fortaleza, CE",
            to: "São Paulo, SP",
            price: 1200
        },
        {
            id: 1,
            situation: "IDA",
            date: "22/7/2023",
            hour: "12:00",
            from: "Fortaleza, CE",
            to: "São Paulo, SP",
            price: 1200
        }
    ]

    return (

        <div className="flitghs sec">
            <h2>Voos</h2>
            {tickets.map(ticket => <Ticket {...ticket} />)}
        </div>
    );
}