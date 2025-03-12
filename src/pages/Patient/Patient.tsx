import { Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import AppHeader from "../../Components/AppHeader/AppHeader";
import { useNavigate } from "react-router-dom";

interface Patient {
  id: string;
  name: string;
  age: string;
  arrivalTime: string;
  temperature: string;
  bloodPressure: string;
}

const patients: Patient[] = [
  { id: "001", name: "Beatriz Araújo Monteiro", age: "38 anos", arrivalTime: "06:50:10", temperature: "37", bloodPressure: "120/80" },
  { id: "022", name: "Carlos Henrique Figueira Lopes", age: "24 anos", arrivalTime: "07:12:10", temperature: "30", bloodPressure: "110/80" },
  { id: "112", name: "Larissa Mendes Barbosa", age: "45 anos", arrivalTime: "07:24:10", temperature: "32", bloodPressure: "140/60" },
  { id: "013", name: "Eduardo Vinícius Rangel", age: "78 anos", arrivalTime: "07:44:10", temperature: "35", bloodPressure: "175/75" },
  { id: "101", name: "Sabrina Nunes Costa", age: "18 anos", arrivalTime: "08:03:10", temperature: "26", bloodPressure: "180/160" },
  { id: "123", name: "Victor Hugo Almeida Ribeiro", age: "12 anos", arrivalTime: "08:24:10", temperature: "30", bloodPressure: "100/50" },
  { id: "234", name: "Amanda Patrícia Teixeira Moraes", age: "24 anos", arrivalTime: "09:10:10", temperature: "32", bloodPressure: "80/40" },
  { id: "544", name: "Gabriel dos Santos Neves", age: "45 anos", arrivalTime: "09:15:10", temperature: "32,5", bloodPressure: "190/120" },
  { id: "890", name: "Júlia Fernanda Magalhães", age: "52 anos", arrivalTime: "10:10:00", temperature: "31,5", bloodPressure: "112/78" }
];

const PatientListScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "90vh",  p: 2, mt: 10 }}>
      <AppHeader />
      <Button color="primary" variant="contained" onClick={()=> navigate ("/manageQuestions")} sx={{width: 200, mb: 3, ml: 1}}>Criar Formulário</Button>
      <Paper sx={{ flex: 1, p: 3, borderRadius: 3, overflow: "auto" }}>
        <Typography variant="h5" gutterBottom>Pacientes</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Pacientes</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Chegada</TableCell>
                <TableCell>Temp°C</TableCell>
                <TableCell>PA mmHg</TableCell>
                <TableCell>Ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.arrivalTime}</TableCell>
                  <TableCell>{patient.temperature}</TableCell>
                  <TableCell>{patient.bloodPressure}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" onClick={()=> navigate ("/medicalChat")}>Atender</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default PatientListScreen;
