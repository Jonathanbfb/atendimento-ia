import { Container, TextField, Button, Typography, Box, Paper, InputAdornment, Select, MenuItem } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import fundoLogin from "../../assets/fundo-login.jpg";
import logo from "../../assets/logo.svg";
import loginStyles from "./Login.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"medico" | "paciente">("medico"); // Estado para definir se é médico ou paciente

  const handleLogin = () => {
    localStorage.setItem("userRole", userType); // Armazena o tipo de usuário no localStorage
    if (userType === "medico") {
      navigate("/patients"); // Redireciona para a tabela de pacientes
    } else {
      navigate("/patientHome"); // Redireciona para a tela inicial do paciente
    }
  };

  return (
    <Container maxWidth={false} disableGutters sx={{ ...loginStyles.container, backgroundImage: `url(${fundoLogin})` }}>
      <Paper elevation={3} sx={loginStyles.paper}>
        <Typography sx={loginStyles.title}>ÁREA DE ACESSO</Typography>
        <Box sx={loginStyles.logoBox}>
          <img src={logo} alt="PAeSD Logo" style={loginStyles.logo} />
        </Box>
        <Typography color="textSecondary" gutterBottom sx={{ fontSize: 15 }}>
          Para usuários cadastrados, utilize suas credenciais abaixo:
        </Typography>

        {/* Selecionar se é Médico ou Paciente */}
        <Select
          fullWidth
          value={userType}
          onChange={(e) => setUserType(e.target.value as "medico" | "paciente")}
          variant="outlined"
          sx={{ mt: 1, mb: 1 }}
        >
          <MenuItem value="medico">Sou Médico</MenuItem>
          <MenuItem value="paciente">Sou Paciente</MenuItem>
        </Select>

        <Box mt={2}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Usuário"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Senha"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography sx={loginStyles.forgotPassword}>Esqueceu a senha? Clique aqui.</Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={loginStyles.button}
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
