import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import EventNoteIcon from "@mui/icons-material/EventNote";
import WorkIcon from "@mui/icons-material/Work";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4">HR Management Dashboard</Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <PeopleIcon fontSize="large" color="primary" />
            <CardContent>
              <Typography variant="h6">Total Employees</Typography>
              <Typography variant="h4" color="primary">120</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <EventNoteIcon fontSize="large" color="secondary" />
            <CardContent>
              <Typography variant="h6">Leave Requests</Typography>
              <Typography variant="h4" color="secondary">8</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <WorkIcon fontSize="large" color="success" />
            <CardContent>
              <Typography variant="h6">Open Positions</Typography>
              <Typography variant="h4" color="success">5</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <TrendingUpIcon fontSize="large" color="warning" />
            <CardContent>
              <Typography variant="h6">Employee Growth</Typography>
              <Typography variant="h4" color="warning">12%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Recent Activity
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography>
            <strong>John Doe</strong> applied for leave.
          </Typography>
          <Typography>
            <strong>Jane Smith</strong> updated her profile.
          </Typography>
          <Typography>
            <strong>HR Team</strong> added a new company policy.
          </Typography>
          <Typography>
            <strong>David Johnson</strong> completed the annual compliance training.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
