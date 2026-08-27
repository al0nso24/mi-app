import { Outlet } from "react-router-dom";
import { WizardProvider } from "../context/FormWizardContext";

export default function RegistroLayout() {
    return (
        <WizardProvider>
            <Outlet />
        </WizardProvider>
    );
}