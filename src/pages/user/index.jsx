/* eslint-disable react/prop-types */
// import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AttendancePage = () => {
  // Mock attendance data
  const attendanceData = [
    { name: "John Doe", date: "2025-01-27", status: "Present" },
    { name: "Jane Smith", date: "2025-01-27", status: "Absent" },
    { name: "Bob Johnson", date: "2025-01-27", status: "Present" },
    { name: "Alice Brown", date: "2025-01-27", status: "Present" },
  ];

  // Summary data for the pie chart
  const attendanceSummary = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [
          attendanceData.filter((item) => item.status === "Present").length,
          attendanceData.filter((item) => item.status === "Absent").length,
        ],
        backgroundColor: ["#4caf50", "#f44336"], // Colors for the pie chart
      },
    ],
  };

  // Bar chart data (attendance over a week)
  const barChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Present",
        data: [20, 22, 18, 25, 21], // Mock data
        backgroundColor: "#4caf50",
      },
      {
        label: "Absent",
        data: [5, 3, 7, 2, 4], // Mock data
        backgroundColor: "#f44336",
      },
    ],
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        Attendance Dashboard
      </Typography>

      {/* Attendance Table */}
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        Attendance Records
      </Typography>
      <TableContainer component={Paper} sx={{ marginBottom: "30px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell sx={{ color: row.status === "Present" ? "#4caf50" : "#f44336" }}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Charts */}
      <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {/* Pie Chart */}
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Attendance Summary
          </Typography>
          <Pie data={attendanceSummary} />
        </Box>

        {/* Bar Chart */}
        <Box sx={{ flex: 2, minWidth: "400px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Weekly Attendance Trends
          </Typography>
          <Bar data={barChartData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AttendancePage;
