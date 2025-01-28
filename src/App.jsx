import { Route, Routes, useLocation } from "react-router-dom";
// import LoginCard from "./pages/auth/Login";
// import Sidebar from "./components/Common/Sidebar";
import Home from "./pages/HomePage";
// import Dashboard from "./pages/Admin/AdminDashboard"
// import Employeemangement from "./pages/HR/EmployeeManggement";
// import JobOpenings from "./pages/HR/JobOpenings";
// import AttendenceandLeave from "./pages/HR/Attendence&Leave";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./Atoms/Themecolor/Theme";
// import Create_admin from "./pages/Super_admin/Create_admin";
// import Super_admin_dashboard from "./pages/Super_admin/Super_admin_dashboard";
// import Attendence_emoloye from "./components/hr/Attendence_emoloye";
// import EmployeeManggement from "./components/hr/EmployeeManggement";
// import JobOpenings from "./components/hr/JobOpenings";
// import Hr_dashboard from "./pages/hr/Hr_dashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login";
// import LoginCard from "./pages/auth/login";

function App() {
  const location = useLocation();
  const noSidebarPaths = ["/"];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:val/:url" element={<Dashboard/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
