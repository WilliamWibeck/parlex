import { FormEvent, useState } from "react";
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import { signup } from "../../firebase/auth";
import eiffelTower from "../../assets/eiffel1.jpg";

type Props = {};

const Signup = (props: Props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signup({ email, password, firstName, lastName });
      alert("login successful!!");
    } catch {
      alert("error");
    }
    console.log(
      `Email: ${email}, Password: ${password}, first name: ${firstName}, last name: ${lastName}`
    );
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
        <h1>Create an account!</h1>
        <Box
          sx={{ display: "flex", flexDirection: "column", maxWidth: "600px" }}
        >
          <form onSubmit={handleSignup}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <TextField
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              ></TextField>
              <TextField
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              ></TextField>
            </Box>
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
                Create account
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};

export default Signup;
