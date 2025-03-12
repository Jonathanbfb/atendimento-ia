import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Button, TextField, Paper, List, ListItem, ListItemText } from "@mui/material";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Altere para a URL do backend

const MedicalChat: React.FC = () => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simula um tempo de espera antes de iniciar o chat
    const timer = setTimeout(() => {
      setIsWaiting(false);
    }, 5000); // Tempo de espera antes do chat aparecer

    // WebSocket - Recebe mensagens em tempo real
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      clearTimeout(timer);
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = { sender: "Paciente", text: message };
      socket.emit("message", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", mt: 5, textAlign: "center" }}>
      {isWaiting ? (
        <Box>
          <Typography variant="h5">Aguardando atendimento...</Typography>
          <CircularProgress sx={{ mt: 2 }} />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Um médico estará disponível em breve.
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5">Chat com o Médico</Typography>
          <Paper sx={{ height: 300, overflowY: "auto", mt: 2, p: 2 }}>
            <List>
              {messages.map((msg, index) => (
                <ListItem key={index}>
                  <ListItemText primary={msg.text} secondary={msg.sender} />
                </ListItem>
              ))}
            </List>
          </Paper>
          <Box sx={{ display: "flex", mt: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={sendMessage} sx={{ ml: 2 }}>
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MedicalChat;
