import { useNavigate } from "react-router-dom";
import { useWizard } from "../context/FormWizardContext";

export default function DatosStep() {
    const { dispatch } = useWizard();
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        dispatch({ type: "UPDATE_STEP", step: "datos", payload: { nombre } });
        navigate("/registro/direccion");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Paso 1: Datos personales</h3>
            <input name="nombre" placeholder="Nombre" required />
            <button type="submit">Siguiente</button>
        </form>
    );
}