import { useLocation } from "react-router-dom";

export default function Dashboard() {
    const location = useLocation();
    const mensaje = location.state?.message;
    return (
        <div>
            {mensaje && <p role="alert">{mensaje}</p>}
            <h2>Panel de usuario</h2>
        </div>
    );
}