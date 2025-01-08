import { Grid, Box, Typography } from "@mui/material";
import DashboardCard from "../../components/DashboardCard";


function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Admin Dashboard
        </Typography>

        {/* Dashboard Cards */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Users" value="150" icon="users" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Revenue" value="$12,000" icon="money" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Orders" value="450" icon="cart" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Pending Orders" value="35" icon="pending" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Active Staff" value="25" icon="staff" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
