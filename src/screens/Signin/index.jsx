import "./style.css";
import { Button, Form } from "react-bootstrap";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import config from "../../config/api-config";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Signin() {
    
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { setUserLogged } = useContext(AuthContext);

    function onSubmit(data) {
        const { email, password } = data;
        axios.post(`${config.BASE_URL}/auth/signin`, { email, password }).then(response => {
            setUserLogged(response.data);
            toast.success("Bem-vindo!", { duration: 2500, position: "top-right" });
            navigate("/");
        }).catch(error => {
            toast.error("Acesso negado!", { duration: 2500, position: "top-right" });
            console.log(error);
        });
    }

    const validateEmail = {
        required: {
            value: true,
            message: "O e-mail é obrigatório."
        },
        maxLength: {
            value: 150,
            message: "O e-mail não pode ultrapassar 150 caracteres."
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "O e-mail é não é válido."
        }
    };

    const validatePassword = {
        required: {
            value: true,
            message: "A senha é obrigatória."
        },
        maxLength: {
            value: 20,
            message: "A senha não pode ultrapassar 20 caracteres."
        }
    };

    return (
        <>
            <div className="signin">
                <Form className="options" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Faça seu login</h2>
                    <div className="input-group">
                        <label htmlFor="email">
                            <i className="bi bi-envelope-at-fill"></i>
                        </label>
                        <input type="text" id="email" {...register("email", validateEmail)} />
                        {errors.email && <span className="text-danger mt-1">{errors.email.message}</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="pass">
                            <i className="bi bi-key-fill"></i>
                        </label>
                        <input type="text" id="pass" {...register("password", validatePassword)} />
                        {errors.password && <span className="text-danger mt-1">{errors.password.message}</span>}
                    </div>
                    <Button type="submit">Acessar</Button>
                </Form>
            </div>
            <Footer />
            <Toaster />
        </>
    );
}