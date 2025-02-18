import { Route, Routes,  } from "react-router-dom";
import Home from "./pages/HomePage";
import { ThemeProvider } from "@mui/material";
import theme from "./Atoms/Themecolor/Theme";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login";

function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:val/:url" element={<Dashboard/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
