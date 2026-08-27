import { Navigate, Outlet } from "react-router-dom";
import { useWizard } from "../context/FormWizardContext";

export default function StepGuard({ requiredStep }) {
    const { completedSteps } = useWizard();
    
    if (requiredStep && !completedSteps.includes(requiredStep)) {
        return <Navigate to="/registro/datos" replace />;
    }
    return <Outlet />;
}