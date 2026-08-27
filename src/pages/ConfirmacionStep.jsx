import { useWizard } from "../context/FormWizardContext";

export default function ConfirmacionStep() {
    const { data } = useWizard();
    return (
        <div>
            <h3>Confirma tus datos</h3>
            <p>Nombre: {data.datos?.nombre}</p>
            <p>Dirección: {data.direccion?.calle}</p>
        </div>
    );
}