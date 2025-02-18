import Sidebar from "../../components/Common/Sidebar";
import Add_admine from "../../components/super_admin/Add_admine";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import JobOpenings from "../../components/hr/JobOpenings";
import Attendence_emoloye from "../../components/hr/Attendence_emoloye";
import EmployeeManagement from "../../components/hr/EmployeeManggement";
import AttendancePage from "../user";
import HrDashboard from "../../components/hr/hr_dashboard";

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
      value: [
        {
          value:"Dashboard",
          icon: "user",
          url: "dashboard",
        },
        {
          value: "Admin Management",
          icon: "user",
          url: "adminmanagement",
          data: [
            { value: "Admins", url: "admins" },
            { value: "Add ", icon: "user", url: "addadmin" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Global Policy Configuration",
          icon: "user",
          url: "gloabalpolicyconfiguration",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Analytics & Reporting",
          icon: "user",
          url: "analyticsandreporting",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Audit Logs",
          icon: "user",
          url: "auditlogs",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "superadmin",
    },
    {
      id: 2,
      value: [
        {
          value:"Dashboard",
          icon: "user",
          url: "dashboard",
        },
        {
          value: "Branch Management",
          icon: "user",
          url: "branchmanagement",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Employee Management",
          icon: "user",
          url: "employeemanagement",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Operational Oversight",
          icon: "user",
          url: "operationaloversight",
          data: [
            { value: "Add ", icon: "user", url: "employeemangement" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Reporting & Audits",
          icon: "user",
          url: "reportingandaudits",
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
      value: [
        {
          value:"Dashboard",
          icon: "user",
          url: "dashboard",
        },
        {
          value: "Recruitment",
          icon: "user",
          url: "recruitment",
          data: [
            { value: "Job Openings ", icon: "user", url: "jobopenings" },
            { value: "Employee ", icon: "user", url: "employeemanagement" },
            { value: "Job ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Employee Onboarding",
          icon: "user",
          url: "employeeonboarding",
          data: [
            { value: "View ", icon: "user", url: "employeemanagementf" },
            { value: "Add employees ", icon: "user", url: "employeemanagement" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Payroll Management",
          icon: "user",
          url: "payrollmanagement",
          data: [
            { value: "Attendance ", icon: "user", url: "attendanceandemployee" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
        {
          value: "Attendance & Leave Tracking",
          icon: "user",
          url: "attendanceandleavetracking",
          data: [
            { value: "Attendance ", icon: "user", url: "attdancelist" },
            { value: "Approve Leaves ", icon: "user", url: "attendanceemployee" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "hr",
    },
    {
      id: 4,
      value: [
        {
          value:"Dashboard",
          icon: "user",
          url: "dashboard",
        },
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
            { value: "Add ", icon: "user", url: "attdancelist" },
            { value: "View ", icon: "user", url: "AttendanceAndLeave" },
            { value: "Product ", icon: "user", url: "jobopenings" },
          ],
        },
      ],
      role: "user",
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
            </Box>
          ) : val === "superadmin" ? (
            <Box sx={{ width: "100%" }}>
              {url === "addadmin" && <Add_admine />}
            </Box>
          ) : val === "admin" ? (
            <Box sx={{ width: "100%" }}>
              {url === "admincreate" && <Add_admine />}
            </Box>
          ) : val === "hr"? (
            <Box sx={{ width: "100%" }}>
              {url === 'dashboard' && <HrDashboard/>}
              {url === "attdancelist" && <AttendancePage/>}
              {url === 'attendanceemployee'&& <Attendence_emoloye/>}
              {url === 'employeemanagement' &&  <EmployeeManagement/>}
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
              {url === "admin/adadmin" }
            </Box>
          )
        }
      </Box>
    </>
  );
}

export default Dashboard;
