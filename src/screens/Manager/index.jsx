import "./style.css";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Manager() {
    return (
        <>
            <div className="manager">
                <div className="sec">
                    <h1>Gerenciamento de voos</h1>
                    <Table className="mt-3" striped bordered hover>
                        <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "6%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Data voo</th>
                                <th>Data pouso</th>
                                <th>Preço</th>
                                <th>Capacidade</th>
                                <th>Duração</th>
                                <th>Companhia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fortaleza, CE</td>
                                <td>São Paulo, SP</td>
                                <td>20/6/2023</td>
                                <td>21/6/2023</td>
                                <td>R$ 12000</td>
                                <td>50</td>
                                <td>4,5 horas</td>
                                <td>Latam</td>
                                <td className="d-flex flex-row gap-2 justify-content-center">
                                    <Button variant="danger">Excluir</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Fortaleza, CE</td>
                                <td>São Paulo, SP</td>
                                <td>20/6/2023</td>
                                <td>21/6/2023</td>
                                <td>R$ 12000</td>
                                <td>50</td>
                                <td>4,5 horas</td>
                                <td>Latam</td>
                                <td className="d-flex flex-row gap-2 justify-content-center">
                                    <Button variant="danger">Excluir</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Fortaleza, CE</td>
                                <td>São Paulo, SP</td>
                                <td>20/6/2023</td>
                                <td>21/6/2023</td>
                                <td>R$ 12000</td>
                                <td>50</td>
                                <td>4,5 horas</td>
                                <td>Latam</td>
                                <td className="d-flex flex-row gap-2 justify-content-center">
                                    <Button variant="danger">Excluir</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table><br />
                    <Form className="mt-4">
                        <fieldset className="box mb-5">
                            <legend>Cadastrar novo voo  </legend>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Estado de origem</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Cidade de origem</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Estado de destino</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Cidade de destino</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Data de voo</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Data de pouso</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Capacidade</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Duração</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Preço passagem</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Companhia</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                        </fieldset>

                        <div className="double">
                            <Button as={Link} to="/signin" variant="danger" className="w-100">
                                Limpar
                            </Button>
                            <Button type="submit" className="w-100">
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}