import { Button, Table } from "react-bootstrap";
import "./style.css";

export default function Tickets() {
    return (
        <div className="tickets sec">
            <h2>Reservas</h2>
            <Table striped bordered hover>
                <colgroup>
                    <col style={{width: "15%"}} />
                    <col style={{width: "25%"}} />
                    <col style={{width: "25%"}} />
                    <col style={{width: "15%"}} />
                    <col style={{width: "20%"}} />
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
                            <Button variant="danger">Cancelar</Button>
                            <Button>Comprar</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button variant="danger">Cancelar</Button>
                            <Button>Comprar</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button variant="danger">Cancelar</Button>
                            <Button>Comprar</Button>
                        </td>
                    </tr>
                </tbody>
            </Table><br />
            <h2>Viagens</h2>
            <Table striped bordered hover>
                <colgroup>
                    <col style={{width: "15%"}} />
                    <col style={{width: "25%"}} />
                    <col style={{width: "25%"}} />
                    <col style={{width: "20%"}} />
                    <col style={{width: "15%"}} />
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
                            <Button>Bilhete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button>Bilhete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ida</td>
                        <td>Fortaleza, CE</td>
                        <td>São Paulo, SP</td>
                        <td>20/6/2023</td>
                        <td className="d-flex flex-row gap-2 justify-content-center">
                            <Button>Bilhete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table><br />
        </div>
    );
}