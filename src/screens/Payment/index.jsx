import { Button, Form, Modal, Table } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import qrcode from "../../assets/images/test.svg";

export default function Payment() {
    return (
        <div className="payment">
            <div className="sec">
                <h2>Falta pouco! Complete seus dados e finalize sua compra.</h2>
                <Form className="mt-4">
                    <fieldset className="box mb-5">
                        <legend>Escolha o formato de pagamento</legend>
                        <Form.Check type="radio" label="Cartão" id="card" name="pay" className="mt-2" />
                        <Form.Check type="radio" label="Pix" id="pix" name="pay" className="mt-2" />
                    </fieldset>

                    <fieldset className="box mb-5">
                        <legend>Complete com os dados do cartão</legend>
                        <div className="fields">
                            <Form.Group style={{width: "48%"}} className="mb-3">
                                <Form.Label>Titular</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group style={{width: "48%"}} className="mb-3">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group style={{width: "48%"}} className="mb-3">
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group style={{width: "22%"}} className="mb-3">
                                <Form.Label>Vecimento</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group style={{width: "22%"}} className="mb-3">
                                <Form.Label>Código de segurança</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </div>
                    </fieldset>

                    <fieldset className="box mb-5">
                        <legend>Complete com o escaneamento do QR Code</legend>
                        <div className="w-100 mt-5 d-flex flex-column align-items-center">
                            <img src={qrcode} alt="QRCode" className="qrcode" />
                            <span className="mt-3">4gghjyjtvm6v7h4v674v7467n4v67n4v7n4v</span>
                        </div>
                    </fieldset>

                    <fieldset className="box mb-5">
                        <legend>Resumo da Compra</legend>
                        <div className="w-100 d-flex justify-content-between align-items-end">
                            <div className="pay w-50 d-flex flex-column">
                                <span className="resume">Fortaleza - São Paulo</span>
                                <span className="price">R$ <strong>1200</strong></span>
                            </div>
                            <Button className="w-50 ">Finalizar compra</Button>
                        </div>
                    </fieldset>
                </Form>
            </div>
        </div>
    );
}