import "./App.css";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Logout from "./components/Auth/Logout";
import Dashboard from "./components/Dashboard/Dashboard";
import CenteringWrapper from "./components/CenteringWrapper";
import AdminPage from "./components/AdminPage/AdminPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logout />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <CenteringWrapper>
                  <Dashboard />
                </CenteringWrapper>
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
