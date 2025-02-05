import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Registro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Email: ${user.name}\nSenha: ${user.age}\nIdade: ${user.email}\nNome: ${user.password}`
    );
  };

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ margin: 1, backgroundColor: " rgb(154, 154, 154)" }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Box
          component="form"
          sx={{ margin: 1 }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            color="rgb(154, 154, 154"
            rgb="#169, 169, 169"
            margin="normal"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            color="rgb(154, 154, 154"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="age"
            label="Idade"
            name="age"
            color="rgb(154, 154, 154"
            margin="normal"
            value={user.age}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            color="rgb(154, 154, 154"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />
          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: " rgb(154, 154, 154)" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Registro;
