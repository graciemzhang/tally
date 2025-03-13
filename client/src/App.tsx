import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Paper } from "@mui/material";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios.get(`${API_URL}/`)
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Finance Tracker
        </Typography>
        <Typography variant="body1">Backend says: {message}</Typography>
      </Paper>
    </Container>
  );
}

export default App;
