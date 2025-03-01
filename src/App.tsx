import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme/theme"; // Importando o tema
import Login from "./pages/Login/login"; // Importando a tela de login

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza os estilos globais */}
      <Login />
    </ThemeProvider>
  );
};

export default App;

