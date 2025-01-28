import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({
  user_item,
  admin_item,
  super_item,
  hr_item,
role,
}) => {
  const navigate = useNavigate();
  // console.log(values, "bdbxc");
  const [dropDown, setdrpdown] = useState(false);

  // const menuItems = [
  //   { text: "Home", icon: <HomeIcon />, path: "/hr/employeemangement" },
  //   { text: "Job Openings", icon: <InfoIcon />, path: "/hr/jobopenings" },
  //   {
  //     text: "Leave and request",
  //     icon: <ContactMailIcon />,
  //     path: "/hr/AttendanceAndLeave",
  //   },
  // ];

  // console.log(values, "sxed");

  const { val } = useParams();
  console.log(val, "sofffyt");

  return (
    <Box sx={{ height: "100vh" }}>
      {/* Static Sidebar */}
      <Box
        sx={{
          width: 255,
          backgroundColor: "white",
          color: "background.default",
          boxShadow: "5px 5px rgba(230, 171, 171, 0.02)",

          // padding: "30px 10px",
          height: "100vh",
        }}
      >
        <Typography
          // variant="h6"
          sx={{
            // marginBottom: 2,
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
            paddingTop: "20px",
          }}
        >
          {role}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{}}>
            {hr_item
              ? hr_item.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        style={{}}
                        onClick={() => {
                          dropDown ? setdrpdown(false) : setdrpdown(true);
                        }}
                      >
                        <li style={{ fontSize: "20px", marginRight: 5 }}>
                          {Object.keys(item)}
                          <span>
                            {" "}
                            {dropDown ? (
                              <i
                                class="fa-solid fa-caret-up"
                                style={{ color: "background.default" }}
                              ></i>
                            ) : (
                              <i
                                class="fa-solid fa-caret-down "
                                style={{ color: "background.default" }}
                              ></i>
                            )}
                          </span>
                        </li>
                        <div>
                          {item?.user_management.map((item) => {
                            return (
                              <div
                                style={{
                                  display: dropDown ? "block" : "none",
                                  fontSize: "18px",
                                  marginLeft: "20px",
                                }}
                                onClick={() => {
                                  console.log(item.url);

                                  navigate(`/dashboard/${val}/${item.url}`);
                                }}
                              >
                                <li>{item.value}</li>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })
              : admin_item
              ? admin_item.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        style={{}}
                        onClick={() => {
                          dropDown ? setdrpdown(false) : setdrpdown(true);
                        }}
                      >
                        <li style={{ fontSize: "20px", marginRight: 5 }}>
                          {Object.keys(item)}
                          <span>
                            {" "}
                            {dropDown ? (
                              <i
                                class="fa-solid fa-caret-up"
                                style={{ color: "background.default" }}
                              ></i>
                            ) : (
                              <i
                                class="fa-solid fa-caret-down "
                                style={{ color: "background.default" }}
                              ></i>
                            )}
                          </span>
                        </li>
                        <div>
                          {item?.hrgfrh4ff.map((item) => {
                            return (
                              <div
                                style={{
                                  display: dropDown ? "block" : "none",
                                  fontSize: "18px",
                                  marginLeft: "20px",
                                }}
                                onClick={() => {
                                  console.log(item.url, "w4tyhbvcv nf");
                                  navigate(`/dashboard/${val}/${item.url}`);
                                }}
                              >
                                <li>{item.value}</li>
                                {/* <li>rfegteg</li>
                  <li>rfegteg</li> */}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })
              : super_item
              ? super_item.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        style={{}}
                        onClick={() => {
                          dropDown ? setdrpdown(false) : setdrpdown(true);
                        }}
                      >
                        <li style={{ fontSize: "20px", marginRight: 5 }}>
                          {Object.keys(item)}
                          <span>
                            {" "}
                            {dropDown ? (
                              <i
                                class="fa-solid fa-caret-up"
                                style={{ color: "background.default" }}
                              ></i>
                            ) : (
                              <i
                                class="fa-solid fa-caret-down "
                                style={{ color: "background.default" }}
                              ></i>
                            )}
                          </span>
                        </li>
                      </div>
                      {item?.user_management.map((item) => {
                        return (
                          <div
                            style={{
                              display: dropDown ? "block" : "none",
                              fontSize: "18px",
                              marginLeft: "20px",
                            }}
                            onClick={() => {
                              console.log(item.url);
                              navigate(`/dashboard/${val}/${item.url}`);
                            }}
                          >
                            <li>{item.value}</li>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              : user_item.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        style={{}}
                        onClick={() => {
                          dropDown ? setdrpdown(false) : setdrpdown(true);
                        }}
                      >
                        <li style={{ fontSize: "20px", marginRight: 5 }}>
                          {Object.keys(item)}
                          <span>
                            {" "}
                            {dropDown ? (
                              <i
                                class="fa-solid fa-caret-up"
                                style={{ color: "background.default" }}
                              ></i>
                            ) : (
                              <i
                                class="fa-solid fa-caret-down "
                                style={{ color: "background.default" }}
                              ></i>
                            )}
                          </span>
                        </li>
                        <div>
                          {item?.user_management.map((item) => {
                            return (
                              <div
                                style={{
                                  display: dropDown ? "block" : "none",
                                  fontSize: "18px",
                                  marginLeft: "20px",
                                }}
                                onClick={() => {
                                  console.log(item.url);
                                  navigate(`/dashboard/${val}/${item.url}`);
                                }}
                              >
                                <li>{item.value}</li>
                                {/* <li>rfegteg</li>
                  <li>rfegteg</li> */}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
