import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate=useNavigate()
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path:'/hr/employeemangement' },
    { text: "Job Openings", icon: <InfoIcon /> ,path:'/hr/jobopenings' },
    { text: "Leave and request", icon: <ContactMailIcon />, path:'/hr/AttendanceAndLeave' },
  ];

  return (
    <Box sx={{  height: "100vh", position:'relative'}}>
      {/* Static Sidebar */}
      <Box
        sx={{
          width:250,
          backgroundColor: "#3F72AF",
          color: "#F9F7F7",
          padding: "20px 10px",
          height:'150vh',
          position:'fixed'
        
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "center" }}>
          My App
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#F9F7F7" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} onClick={()=>navigate(item.path)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      {/* <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Typography variant="h4">Welcome to My App</Typography>
        <Typography>
          This is the main content area. The sidebar remains visible on the left.
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Sidebar;
