import Sidebar from "../../components/Common/Sidebar";

import Add_admine from "../../components/super_admin/Add_admine";
import { Box } from "@mui/material";
// import DashboardCard from "../../components/DashboardCard";
import { useParams } from "react-router-dom";
import JobOpenings from "../../components/hr/JobOpenings";
import Attendence_emoloye from "../../components/hr/Attendence_emoloye";
import EmployeeManagement from "../../components/hr/EmployeeManggement";
import AttendancePage from "../user";
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
      : val === "superadmin"
      ? "Superadmin"
      : val === "hr"
      ? "HR"
      :"null";

  const demo = [
    {
      id: 1,
      name: "home",
      value: [
        {
          value: "user_managementr",
          icon: "user",
          url: "admincreate",
          data: [
            { value: "Add ", icon: "user", url: "add" },
            { value: "Attendance", url: "attdancelist" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "user",
          icon: "user",
          url: "AttendanceAndLeav",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "user",
    },
    {
      id: 2,
      name: "home",
      value: [
        {
          value: "admin",
          icon: "user",
          url: "admincreate",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "user",
          icon: "user",
          url: "AttendanceAndLeav",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "admin",
    },
    {
      id: 3,
      name: "home",
      value: [
        {
          value: "user_managementr",
          icon: "user",
          url: "admincreate",
          data: [
            { value: "Attendance ", icon: "user", url: "attendanceandemployee" },
            { value: "Employee ", icon: "user", url: "employeemanagement" },
            { value: "Job ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "user",
          icon: "user",
          url: "AttendanceAndLeav",
          data: [
            { value: "Attendance ", icon: "user", url: "attendanceandemployee" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "hr",
    },
    {
      id: 1,
      name: "home",
      value: [
        {
          value: "user_managementr",
          icon: "user",
          url: "admincreate",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "user",
          icon: "user",
          url: "AttendanceAndLeav",
          data: [
            { value: "Add ", icon: "user", url: "adadmin" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "superadmin",
    },
  ];

  // const admin_item = [
  //   {
  //     user_management: [
  //       { value: "Add User", icon: "user", url: "admincreate" },
  //       {
  //         value: "View Attendance",
  //         icon: "user",
  //         url: "AttendanceAndLeave",
  //       },
  //       { value: "Product Management", icon: "user", url: "newwwww" },
  //     ],

  //     user: [
  //       { value: "Add ", icon: "user", url: "employeemangement" },
  //       { value: "View ", icon: "user", url: "AttendanceAndLeave" },
  //       { value: "Product ", icon: "user", url: "jobopenings" },
  //     ],
  //   },
  // ];
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
  //       { value: "Add ", icon: "user", url: "adadmin" },
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
          <Sidebar demo={demo} role={role} val={val}/>
        </Box>
        {
          // id.map((item) => {
          //   return item.
          val === "user" ? (
            <Box sx={{ width: "100%" }}>
              {url === "createadmin" && <Add_admine />}
              {url === "attdancelist" && <AttendancePage/>}
            </Box>
          ) : val === "superadmin" ? (
            <Box sx={{ width: "100%" }}>
              {url === "adadmin" && <Add_admine />}
            </Box>
          ) : val === "admin" ? (
            <Box sx={{ width: "100%" }}>
              {url === "admincreate" && <Add_admine />}
            </Box>
          ) : val === "hr"? (
            <Box sx={{ width: "100%" }}>
              {url === 'attendanceandemployee'&& <Attendence_emoloye/>}
              {url === 'employeemanagement ' && <EmployeeManagement/>}
              {url === "jobopenings" && <JobOpenings />}
              </Box>
          ):(
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
