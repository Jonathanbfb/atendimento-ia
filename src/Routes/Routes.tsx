import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import PatientListScreen from "../pages/Patient/Patient";
import HealthRiskForm from "../pages/HealthRiskForm";
import ManageQuestions from "../pages/ManageQuestions";
import PatientHome from "../pages/PatientHome";
import MedicalChat from "../pages/MedicalChat";
/* import NotFound from "./pages/NotFound"; */

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/patients" element={<PatientListScreen />} />
        <Route path="/healthRiskForm" element={<HealthRiskForm />} />
        <Route path="/manageQuestions" element={<ManageQuestions />} />
        <Route path="/patientHome" element={<PatientHome />} />
        <Route path="/medicalChat" element={<MedicalChat />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
