import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    function handleLogin(role) {
        dispatch({ type: "LOGIN", payload: { user: { name: "Alonso" }, role } });
        navigate(from, { replace: true });
    }

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <button onClick={() => handleLogin("user")}>Entrar como usuario</button>
            <button onClick={() => handleLogin("admin")}>Entrar como admin</button>
        </div>
    );
}