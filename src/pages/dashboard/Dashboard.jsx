import React from "react";
import Sidebar from "../../components/Common/Sidebar";

import Add_admine from "../../components/super_admin/Add_admine";
import { Box } from "@mui/material";
// import DashboardCard from "../../components/DashboardCard";
import { useParams } from "react-router-dom";
import JobOpenings from "../../components/hr/JobOpenings";
function Dashboard() {
  const { val } = useParams();
  console.log(val, "valll");
  const { url } = useParams();
  console.log(url, "urlll");

  const role =
    val === "user"
      ? "User"
      : val === "admin"
      ? "Admin"
      : val === "user"
      ? "superadmin"
      : "Hr";

  const admin_item = [
    {
      hrgfrh4ff: [
        { value: "Add User", icon: "user", url: "amincreate" },
        {
          value: "View Attendance",
          icon: "user",
          url: "AttendanceAndLeave",
        },
        { value: "Product Management", icon: "user", url: "newwwww" },
      ],
      user: [
        { value: "Add User", icon: "user", url: "employeemangement" },
        { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
        { value: "Product Management", icon: "user", url: "jobopenings" },
      ],
    },
  ];
  // const hr_item = [
  //   {
  //     user_management: [
  //       { value: "Add User", icon: "user", url: "adadmin" },
  //       { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product Management", icon: "user", url: "jobopenings" },
  //     ],
  //     user: [
  //       { value: "Add User", icon: "user", url: "employeemangement" },
  //       { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product Management", icon: "user", url: "jobopenings" },
  //     ],
  //   },
  // ];
  // const user_item = [
  //   {
  //     user_management: [
  //       { value: "Add User", icon: "user", url: "adadmin" },
  //       { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product Management", icon: "user", url: "jobopenings" },
  //     ],
  //     user: [
  //       { value: "Add User", icon: "user", url: "employeemangement" },
  //       { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product Management", icon: "user", url: "jobopenings" },
  //     ],
  //   },
  // ];
  // const super_item = [
  //   {
  //     user_management: [
  //       { value: "Add User", icon: "user", url: "employeemangement" },
  //       { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product Management", icon: "user", url: "jobopenings" },
  //     ],
  //     user: [
  //       { value: "Add User", icon: "user", url: "employeemangement" },
  //       { value: "View Attendance", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product Management", icon: "user", url: "jobopenings" },
  //     ],
  //   },
  // ];
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "" }}>
        <Box>
          <Sidebar
            // user_item={user_item}
            // hr_item={hr_item}
            // super_item={super_item}
            admin_item={admin_item}
            role={role}
          />
        </Box>
        {
          // id.map((item) => {
          //   return item.
          val === "user" ? (
            <Box sx={{ width: "100%" }}>
              {url === "createadmin" && <Add_admine />}
            </Box>
          ) : val === "superadmin" ? (
            <Box sx={{ width: "100%" }}>
              {url === "adadmin" && <Add_admine />}
            </Box>
          ) : val === "admin" ? (
            <Box sx={{ width: "100%" }}>
              {url === "amincreate" && <Add_admine />}
            </Box>
          ) : (
            <Box
              sx={{
                flex: 1,
                height: "full",
                padding: "20px",
                overflow: "auto",
              }}
            >
              {url === "admin/adadmin" || <JobOpenings />}
            </Box>
          )
        }
      </Box>
    </>
  );
}

export default Dashboard;
