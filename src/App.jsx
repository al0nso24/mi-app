import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StepGuard from "./components/StepGuard";
import RegistroLayout from "./pages/RegistroLayout";
import DatosStep from "./pages/DatosStep";
import DireccionStep from "./pages/DireccionStep";
import ConfirmacionStep from "./pages/ConfirmacionStep";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registro/datos" replace />} />

        <Route path="/registro" element={<RegistroLayout />}>
          <Route index element={<Navigate to="datos" replace />} />
          <Route path="datos" element={<DatosStep />} />

          <Route element={<StepGuard requiredStep="datos" />}>
            <Route path="direccion" element={<DireccionStep />} />
          </Route>

          <Route element={<StepGuard requiredStep="direccion" />}>
            <Route path="confirmacion" element={<ConfirmacionStep />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}