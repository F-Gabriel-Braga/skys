import "./style.css";
import { Button, Form } from "react-bootstrap";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <div className="signup">
                <div className="sec">
                    <h1>Cadastro de Conta</h1>
                    <Form className="mt-4">
                        <fieldset>
                            <legend>E-mail</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar e-mail</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <legend>Senha</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar senha</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <legend>Dados pessoais</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="tel" />
                            </Form.Group>
                        </fieldset>
                        <div className="double">
                            <Button as={Link} to="/signin">
                                Voltar para Login
                            </Button>
                            <Button type="submit">
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}