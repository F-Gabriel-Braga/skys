import { Button, Modal, Table } from "react-bootstrap";
import "./style.css";
import { useState } from "react";

export default function Tickets() {

    const [showTicket, setShowTicket] = useState(false);
    const [showDelTicket, setShowDelTicket] = useState(false);

    const handleCloseTicket = () => setShowTicket(false);
    const handleShowTicket = () => setShowTicket(true);

    const handleCloseDelTicket = () => setShowDelTicket(false);
    const handleShowDelTicket = () => setShowDelTicket(true);

    return (
        <div className="tickets sec">
            <h2>Reservas</h2>
            <Table striped bordered hover>
                <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "25%" }} />
                    <col style={{ width: "25%" }} />
                    <col style={{ width: "15%" }} />
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
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button variant="danger" onClick={handleShowDelTicket}>Cancelar</Button>
                            <Button>Comprar</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button variant="danger" onClick={handleShowDelTicket}>Cancelar</Button>
                            <Button>Comprar</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button variant="danger" onClick={handleShowDelTicket}>Cancelar</Button>
                            <Button>Comprar</Button>
                        </td>
                    </tr>
                </tbody>
            </Table><br />
            <h2>Viagens</h2>
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
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button onClick={handleShowTicket}>Bilhete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button onClick={handleShowTicket}>Bilhete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button onClick={handleShowTicket}>Bilhete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table><br />

            <Modal show={showTicket} onHide={handleCloseTicket}>
                <Modal.Header closeButton>
                    <Modal.Title>Fortaleza <i className="bi bi-arrow-right"></i> São Paulo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>N° 123</span>
                    <span>Fortaleza, CE <i className="bi bi-arrow-right"></i> São Paulo, SP</span>
                    <span>20/6/2023</span>
                    <span>02:35 - 7:35</span>
                    <span className="pay">Pagamento realizado com sucesso</span>
                </Modal.Body>
            </Modal>

            <Modal show={showDelTicket} onHide={handleCloseDelTicket}>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja cancelar esta reserva?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Fortaleza, CE <i className="bi bi-arrow-right"></i> São Paulo, SP</span>
                    <span>20/6/2023</span>
                    <span>02:35 - 7:35</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseDelTicket}>
                        Fechar
                    </Button>
                    <Button variant="primary">
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}