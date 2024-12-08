import Grid from "@mui/material/Grid2";
import Logout from "../Auth/Logout";
import { getAuth } from "firebase/auth";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";
type Props = {};

const Dashboard = (props: Props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user?.displayName);

  const data1 = [
    { value: 400 },
    { value: 300 },
    { value: 300 },
    { value: 200 },
    { value: 278 },
    { value: 189 },
  ];

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#2C2C2C",
        width: "90vw",
        height: "90vh",
        display: "flex",
        borderRadius: "5px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ height: "100%", width: "100%", margin: "20px" }}
      >
        <Paper
          sx={{ backgroundColor: "#3C3C3C", width: "220px", height: "220px" }}
        />
        <Paper
          sx={{
            backgroundColor: "#3C3C3C",
            width: "220px",
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PieChart
            series={[
              {
                data: data1,
              },
            ]}
          >
            <PieCenterLabel>Center label</PieCenterLabel>
          </PieChart>
        </Paper>

        <Paper
          sx={{ backgroundColor: "#3C3C3C", width: "220px", height: "220px" }}
        />
        <Paper
          sx={{ backgroundColor: "#3C3C3C", width: "220px", height: "220px" }}
        />
        <Logout />
      </Grid>
    </Box>
  );
};

export default Dashboard;
