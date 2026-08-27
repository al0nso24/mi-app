import { useAuth } from "../context/AuthContext";

export default function Profile() {
    const { user, dispatch } = useAuth();
    return (
        <div>
            <h2 style={{marginTop: 30}}>Bienvenido, {user.name} :D</h2>
            <button onClick={() => dispatch({ type: "LOGOUT" })}>
                Cerrar sesión
            </button>
        </div>
    );
}