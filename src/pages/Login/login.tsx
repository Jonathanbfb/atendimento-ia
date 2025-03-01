import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import fundoLogin from "../../assets/fundo-login.jpg";
import logo from "../../assets/logo.svg"

const Login = () => {
  return (
    <Container maxWidth="xl"   
    style={{ 
      display: "flex", 
      height: "100vh", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundImage: `url(${fundoLogin})`, 
      backgroundSize: "cover", 
    }}>
      <Paper elevation={3} style={{ padding: 24, width: "30%",  borderRadius: 12 }}>
        <Typography color="textSecondary" gutterBottom sx={{fontSize: 10}}>
          ÁREA DO MÉDICO
        </Typography>
        <Box display="flex" justifyContent="center" mb={4} mt={4}>
          <img src={logo} alt="PAeSD Logo" style={{ height: 100 }} />
        </Box>
        <Typography variant="body2" color="textSecondary" gutterBottom sx={{fontSize: 12, alignItems: 'right'}}>
          Para usuários cadastrados, utilize suas credenciais abaixo:
        </Typography>
        <Box mt={2}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Usuário"
            InputProps={{
              startAdornment: <PersonOutlinedIcon style={{ marginRight: 8 }} />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Senha"
            type="password"
            InputProps={{
              startAdornment: <LockOutlinedIcon style={{ marginRight: 8 }} />,
            }}
          />
          <Typography variant="body2" style={{ cursor: "pointer", marginTop: 8, fontSize: 12 }}>
            Esqueceu a senha? Clique aqui.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 16 }}
          >
            LOGIN
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;