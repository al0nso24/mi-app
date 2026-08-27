import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireRole({ role }) {
    const { role: userRole } = useAuth();
    
    if (userRole !== role) {
        return (
            <Navigate
                to="/dashboard"
                state={{ message: "No tienes permisos para acceder a esa sección." }}
                replace
            />
        );
    }
    return <Outlet />;
}