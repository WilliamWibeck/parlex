import { useState } from "react";
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      alert("Login successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <Paper
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "row",
        width: "90vw",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%", height: "100%" }}></Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderRightWidth: 2, borderColor: "white" }}
      />
      <Box
        sx={{
          width: "50%",
          margin: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Login :)</h1>
        <Box
          sx={{ display: "flex", flexDirection: "column", maxWidth: "600px" }}
        >
          <form onSubmit={handleLogin}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <TextField
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Button variant="outlined" type="submit">
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};

export default Signup;
