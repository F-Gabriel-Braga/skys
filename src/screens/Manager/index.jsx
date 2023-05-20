import "./style.css";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Manager() {

    const { handleSubmit, register, formState: { errors } } = useForm();

    const validateUfFrom = {
        required: {
            value: true,
            message: "O estado de origem é obrigatório."
        },
        maxLength: {
            value: 100,
            message: "O estado não pode ultrapassar 100 caracteres."
        }
    };

    const validateCityFrom = {
        required: {
            value: true,
            message: "A cidade de origem é obrigatória."
        },
        maxLength: {
            value: 100,
            message: "A cidade não pode ultrapassar 100 caracteres."
        }
    };

    const validateUfTo = {
        required: {
            value: true,
            message: "O estado de destino é obrigatório."
        },
        maxLength: {
            value: 100,
            message: "O estado não pode ultrapassar 100 caracteres."
        }
    };

    const validateCityTo = {
        required: {
            value: true,
            message: "A cidade de destino é obrigatória."
        },
        maxLength: {
            value: 100,
            message: "A cidade não pode ultrapassar 100 caracteres."
        }
    };

    const validateDateFlight = {
        required: {
            value: true,
            message: "A data de voo é obrigatória."
        },
        maxLength: {
            value: 50,
            message: "A data de voo não pode ultrapassar 50 caracteres."
        }
    };

    const validateDateLanding = {
        required: {
            value: true,
            message: "A data de pouso é obrigatória."
        },
        maxLength: {
            value: 50,
            message: "A data de pouso não pode ultrapassar 50 caracteres."
        }
    };

    const validateCapacity = {
        required: {
            value: true,
            message: "A capacidade é obrigatória."
        },
        min: {
            value: 1,
            message: "A capacidade não pode ser menor que 1."
        },
        max: {
            value: 200,
            message: "A capacidade não pode ultrapassar 200."
        }
    };

    const validateDuration = {
        required: {
            value: true,
            message: "A duração é obrigatória."
        },
        min: {
            value: 0,
            message: "A duração não pode ser menor que 0."
        },
        max: {
            value: 100,
            message: "A duração não pode ultrapassar 100 horas."
        }
    };

    const validatePrice = {
        required: {
            value: true,
            message: "O preço é obrigatório."
        },
        min: {
            value: 0,
            message: "O preço não pode ser menor que 0."
        },
        max: {
            value: 1000000000,
            message: "O preço não pode ultrapassar 1000000000 reais."
        }
    };

    const validateCompany = {
        required: {
            value: true,
            message: "A companhia é obrigatória."
        },
        maxLength: {
            value: 50,
            message: "A companhia não pode ultrapassar 100 caracteres."
        }
    };

    function onSubmit(data) {
        alert("Cadastrado");
    }

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
                    <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="box mb-5">
                            <legend>Cadastrar novo voo  </legend>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Estado de origem</Form.Label>
                                    <Form.Control type="text" className={errors.ufFrom && "is-invalid"} {...register("ufFrom", validateUfFrom)} />
                                    {errors.ufFrom && <Form.Text className="invalid-feedback">{errors.ufFrom.message}</Form.Text>}
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Cidade de origem</Form.Label>
                                    <Form.Control type="text" className={errors.cityFrom && "is-invalid"} {...register("cityFrom", validateCityFrom)} />
                                    {errors.cityFrom && <Form.Text className="invalid-feedback">{errors.cityFrom.message}</Form.Text>}
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Estado de destino</Form.Label>
                                    <Form.Control type="text" className={errors.ufTo && "is-invalid"} {...register("ufTo", validateUfTo)} />
                                    {errors.ufTo && <Form.Text className="invalid-feedback">{errors.ufTo.message}</Form.Text>}
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Cidade de destino</Form.Label>
                                    <Form.Control type="text" className={errors.cityTo && "is-invalid"} {...register("cityTo", validateCityTo)} />
                                    {errors.cityTo && <Form.Text className="invalid-feedback">{errors.cityTo.message}</Form.Text>}
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Data de voo</Form.Label>
                                    <Form.Control type="text" className={errors.dateHourFlight && "is-invalid"} {...register("dateHourFlight", validateDateFlight)} />
                                    {errors.dateHourFlight && <Form.Text className="invalid-feedback">{errors.dateHourFlight.message}</Form.Text>}
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Data de pouso</Form.Label>
                                    <Form.Control type="text" className={errors.dateHourLanding && "is-invalid"} {...register("dateHourLanding", validateDateLanding)} />
                                    {errors.dateHourLanding && <Form.Text className="invalid-feedback">{errors.dateHourLanding.message}</Form.Text>}
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Capacidade</Form.Label>
                                    <Form.Control type="text" className={errors.capacity && "is-invalid"} {...register("capacity", validateCapacity)} />
                                    {errors.capacity && <Form.Text className="invalid-feedback">{errors.capacity.message}</Form.Text>}
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Duração</Form.Label>
                                    <Form.Control type="text" className={errors.duration && "is-invalid"} {...register("duration", validateDuration)} />
                                    {errors.duration && <Form.Text className="invalid-feedback">{errors.duration.message}</Form.Text>}
                                </Form.Group>
                            </div>
                            <div className="double">
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Preço passagem</Form.Label>
                                    <Form.Control type="text" className={errors.price && "is-invalid"} {...register("price", validatePrice)} />
                                    {errors.price && <Form.Text className="invalid-feedback">{errors.price.message}</Form.Text>}
                                </Form.Group>
                                <Form.Group className="w-100 mb-3">
                                    <Form.Label>Companhia</Form.Label>
                                    <Form.Control type="text" className={errors.company && "is-invalid"} {...register("company", validateCompany)} />
                                    {errors.company && <Form.Text className="invalid-feedback">{errors.company.message}</Form.Text>}
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