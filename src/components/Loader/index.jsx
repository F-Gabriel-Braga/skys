import { Spinner } from "react-bootstrap";

export default function Loader() {
    return (
        <div className="loader w-100 d-flex gap-2 justify-content-center align-items-center my-3">
            <Spinner variant="primary" /> Carregando...
        </div>
    );
}