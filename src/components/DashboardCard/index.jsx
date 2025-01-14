/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Box } from "@mui/material";
import { People, ShoppingCart, AttachMoney, HourglassEmpty, Group } from "@mui/icons-material";

const icons = {
  users: <People fontSize="large" />,
  cart: <ShoppingCart fontSize="large" />,
  money: <AttachMoney fontSize="large" />,
  pending: <HourglassEmpty fontSize="large" />,
  staff: <Group fontSize="large" />,
};

function DashboardCard({ title, value, icon ,description}) {
  return (
    <Card sx={{ minHeight: 150 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {icons[icon]}
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
            <Typography variant="h6">
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
