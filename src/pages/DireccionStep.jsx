import { useNavigate } from "react-router-dom";
import { useWizard } from "../context/FormWizardContext";

export default function DireccionStep() {
    const { dispatch } = useWizard();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const calle = e.target.calle.value;
        dispatch({ type: "UPDATE_STEP", step: "direccion", payload: { calle } });
        navigate("/registro/confirmacion");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Paso 2: Dirección</h3>
            <input name="calle" placeholder="Calle" required />
            <button type="submit">Siguiente</button>
        </form>
    );
}
