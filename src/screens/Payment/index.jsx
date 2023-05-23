import { Button, Form, Modal, Table } from "react-bootstrap";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import qrcode from "../../assets/images/test.svg";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config/api-config";
import { toast } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";

export default function Payment() {

    const { id } = useParams();
    const { handleSubmit, register, formState: { errors, isSubmitted } } = useForm();
    const navigate = useNavigate();
    const { userLogged } = useContext(AuthContext);

    const [card, setCard] = useState(false);
    const [pix, setPix] = useState(false);
    const [paymentError, setPaymentError] = useState(true);
    const [ticket, setTicket] = useState(null);

    useEffect(()=> {
        const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
            axios.get(`${config.BASE_URL}/tickets/${id}`, { headers }).then(response => {
                setTicket(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    function checkCard(e) {
        const check = e.target.checked;
        setCard(check);
        setPix(false);
        setPaymentError(false);
    }

    function checkPix(e) {
        const check = e.target.checked;
        setPix(check);
        setCard(false);
        setPaymentError(false);
    }

    const validatePayment = {
        required: {
            value: true,
            message: "Selecione o método de pagamento."
        }
    };

    const validateOwnerCard = {
        required: {
            value: true,
            message: "O nome do titular é obrigatório."
        },
        maxLength: {
            value: 150,
            message: "O nome do titular não pode ultrapassar 150 caracteres."
        }
    };

    const validateCPFCard = {
        required: {
            value: true,
            message: "O CPF é obrigatório."
        },
        maxLength: {
            value: 11,
            message: "O CPF não pode ultrapassar 11 caracteres."
        }
    };

    const validateNumberCard = {
        required: {
            value: true,
            message: "O número do cartão é obrigatório."
        },
        maxLength: {
            value: 50,
            message: "O CPF não pode ultrapassar 50 caracteres."
        }
    };

    const validateTermCard = {
        required: {
            value: true,
            message: "A data de vencimento do cartão é obrigatório."
        },
        maxLength: {
            value: 10,
            message: "A data de vencimento do cartão não pode ultrapassar 10 caracteres."
        }
    };

    const validateCodeCard = {
        required: {
            value: true,
            message: "O código de segurança do cartão é obrigatório."
        },
        maxLength: {
            value: 3,
            message: "O código de segurança do cartão não pode ultrapassar 3 caracteres."
        }
    };

    function onSubmit(data) {
        if(id && !paymentError) {
            const headers = { "Authorization": `${userLogged.tokenType} ${userLogged.accessToken}` };
            axios.post(`${config.BASE_URL}/tickets/reserves/finalize/${id}`, {}, { headers }).then(() => {
                navigate("/tickets");
                toast.success("Compra realizada com sucesso!", { duration: 2500, position: "top-right" });
            }).catch(error => {
                console.log(error);
                toast.error("Algo deu errado!", { duration: 2500, position: "top-right" });
            });
        }
    }

    return (
        <div className="payment">
            <div className="sec">
                <h2>Falta pouco! Complete seus dados e finalize sua compra.</h2>
                <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="box mb-5">
                        <legend>Escolha o formato de pagamento</legend>
                        <Form.Check type="radio" label="Cartão" id="card" name="payment" className={(paymentError && isSubmitted) && "mb-2 is-invalid"} onChange={checkCard} />
                        <Form.Check type="radio" label="Pix" id="pix" name="payment" className={(paymentError && isSubmitted) && "mb-2 is-invalid"} onChange={checkPix} />
                        {(paymentError && isSubmitted) && <Form.Text className="invalid-feedback">Selecione o método de pagamento.</Form.Text>}
                    </fieldset>

                        {card && <fieldset disabled={!card} className="box mb-5">
                        <legend>Complete com os dados do cartão</legend>
                        <div className="fields">
                            <Form.Group style={{width: "48%"}} className="mb-2">
                                <Form.Label>Titular</Form.Label>
                                <Form.Control type="text" className={errors.owner && "mb-2 is-invalid"} {...register("owner", validateOwnerCard)} />
                                {errors.owner && <Form.Text className="invalid-feedback">{errors.owner.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group style={{width: "48%"}} className="mb-2">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" className={errors.cpf && "mb-2 is-invalid"} {...register("cpf", validateCPFCard)} />
                                {errors.cpf && <Form.Text className="invalid-feedback">{errors.cpf.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group style={{width: "48%"}} className="mb-2">
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="number" className={errors.number && "mb-2 is-invalid"} {...register("number", validateNumberCard)} />
                                {errors.number && <Form.Text className="invalid-feedback">{errors.number.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group style={{width: "22%"}} className="mb-2">
                                <Form.Label>Vecimento</Form.Label>
                                <Form.Control type="number" className={errors.term && "mb-2 is-invalid"} {...register("term", validateTermCard)} />
                                {errors.term && <Form.Text className="invalid-feedback">{errors.term.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group style={{width: "22%"}} className="mb-2">
                                <Form.Label>Código de segurança</Form.Label>
                                <Form.Control type="number" className={errors.code && "mb-2 is-invalid"} {...register("code", validateCodeCard)} />
                                {errors.code && <Form.Text className="invalid-feedback">{errors.code.message}</Form.Text>}
                            </Form.Group>
                        </div>
                    </fieldset>}

                    {pix && <fieldset className="box mb-5">
                        <legend>Complete com o escaneamento do QR Code</legend>
                        <div className="w-100 mt-5 d-flex flex-column align-items-center">
                            <img src={qrcode} alt="QRCode" className="qrcode" />
                            <span className="mt-3">4gghjyjtvm6v7h4v674v7467n4v67n4v7n4v</span>
                        </div>
                    </fieldset>}

                    <fieldset className="box mb-5">
                        <legend>Resumo da Compra</legend>
                        <div className="w-100 d-flex justify-content-between align-items-end">
                            <div className="pay w-50 d-flex flex-column">
                                <span className="resume">{ticket?.flight?.from} - {ticket?.flight?.to}</span>
                                <span className="price">R$ <strong>{ticket?.price}</strong></span>
                            </div>
                            <Button className="w-50" type="submit">Finalizar compra</Button>
                        </div>
                    </fieldset>
                </Form>
            </div>
        </div>
    );
}