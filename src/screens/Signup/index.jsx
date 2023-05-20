import "./style.css";
import { Button, Form } from "react-bootstrap";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {

    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    const validateEmail = {
        required: {
            value: true,
            message: "Este e-mail é obrigatório."
        },
        maxLength: {
            value: 150,
            message: "Este e-mail não pode ultrapassar 150 caracteres."
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "O e-mail é não é válido."
        }
    };

    const validateEmailConf = {
        required: {
            value: true,
            message: "Este e-mail é obrigatório."
        },
        maxLength: {
            value: 150,
            message: "Este e-mail não pode ultrapassar 150 caracteres."
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "O e-mail é não é válido."
        },
        validate: {
            matchesEmail: value => value === watch('email') || 'Os e-mails não coincidem.',
        }
    };

    const validatePassword = {
        required: {
            value: true,
            message: "Esta senha é obrigatória."
        },
        maxLength: {
            value: 50,
            message: "Esta senha não pode ultrapassar 50 caracteres."
        }
    };

    const validatePasswordConf = {
        required: {
            value: true,
            message: "Esta senha é obrigatória."
        },
        maxLength: {
            value: 50,
            message: "Esta senha não pode ultrapassar 50 caracteres."
        },
        validate: {
            matchesPassword: value => value === watch('password') || 'As senhas não coincidem.',
        }
    };

    const validateName = {
        required: {
            value: true,
            message: "O nome/sobrenome é obrigatório."
        },
        maxLength: {
            value: 150,
            message: "O nome/sobrenome não pode ultrapassar 150 caracteres."
        }
    };

    const validateCPF = {
        required: {
            value: true,
            message: "O CPF é obrigatório."
        },
        maxLength: {
            value: 11,
            message: "O CPF não pode ultrapassar 11 caracteres."
        }
    };

    const validatePhone = {
        required: {
            value: true,
            message: "O telefone é obrigatório."
        },
        maxLength: {
            value: 10,
            message: "O telefone não pode ultrapassar 10 caracteres."
        }
    };

    function onSubmit(data) {
        alert("Cadastrado");
    }

    return (
        <>
            <div className="signup">
                <div className="sec">
                    <h1>Cadastro de Conta</h1>
                    <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="box mb-5">
                            <legend>E-mail</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" className={errors.email && "is-invalid"} {...register("email", validateEmail)} />
                                {errors.email && <Form.Text className="invalid-feedback">{errors.email.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar e-mail</Form.Label>
                                <Form.Control type="email" className={errors.emailConf && "is-invalid"} {...register("emailConf", validateEmailConf)} />
                                {errors.emailConf && <Form.Text className="invalid-feedback">{errors.emailConf.message}</Form.Text>}
                            </Form.Group>
                        </fieldset>

                        <fieldset className="box mb-5">
                            <legend>Senha</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" className={errors.password && "is-invalid"} {...register("password", validatePassword)} />
                                {errors.password && <Form.Text className="invalid-feedback">{errors.password.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar senha</Form.Label>
                                <Form.Control type="password" className={errors.passwordConf && "is-invalid"} {...register("passwordConf", validatePasswordConf)} />
                                {errors.passwordConf && <Form.Text className="invalid-feedback">{errors.passwordConf.message}</Form.Text>}
                            </Form.Group>
                        </fieldset>

                        <fieldset className="box mb-5">
                            <legend>Dados pessoais</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" className={errors.firstName && "is-invalid"} {...register("firstName", validateName)} />
                                {errors.firstName && <Form.Text className="invalid-feedback">{errors.firstName.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control type="text" className={errors.lastName && "is-invalid"} {...register("lastName", validateName)} />
                                {errors.lastName && <Form.Text className="invalid-feedback">{errors.lastName.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" className={errors.cpf && "is-invalid"} {...register("cpf", validateCPF)} />
                                {errors.cpf && <Form.Text className="invalid-feedback">{errors.cpf.message}</Form.Text>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="tel" className={errors.phone && "is-invalid"} {...register("phone", validatePhone)} />
                                {errors.phone && <Form.Text className="invalid-feedback">{errors.phone.message}</Form.Text>}
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