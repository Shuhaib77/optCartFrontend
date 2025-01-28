// import React from "react";
import { Box, FormControl, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../Atoms/Buttons";

import StyledInput from "../../Atoms/Styled_inputs/Input";
import { useFormik } from "formik";
import axios from "axios";

function Authentication() {
  const navigate = useNavigate();
  const val = "admin";
  const url = 'createadmin'

  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      axios.post("");
    },
  });
  return (
    <div>
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "full",
            bgcolor: "",
          }}
        >
          <Box
            sx={{
              bgcolor: "rgb(48, 95, 171)",
              width: "900px",
              height: "500px",
              display: "flex",
              gap: 4,
              borderRadius: "10px",
            }}
          >
            <Box sx={{ bgcolor: "", flex: 1 }}>
              <img
                src="https://requis.com/wp-content/uploads/2020/10/Death-of-ERP-abstract.png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "  ", // Ensures image covers the entire box
                }}
              />
            </Box>

            <FormControl
              sx={{
                bgcolor: "rgb(48, 95, 171)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                borderRadius: "10px",
              }}
              onSubmit={handleSubmit}
            >
              <Typography
                style={{
                  fontFamily: "serif",
                  fontStyle: "normal",
                  fontSize: "33px",
                  color: "white",
                }}
              >
                LOGIN
              </Typography>
              {/* <StyledInput  variant="outlined" sx={{ width: "85%" }} label="dcwdc"></StyledInput> */}
              <StyledInput
                margin="normal"
                variant="outlined"
                sx={{ width: "85%" }}
                label="dcwdc"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              ></StyledInput>
              <StyledInput
                margin="normal"
                variant="outlined"
                sx={{ width: "85%" }}
                label="dcwdc"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              ></StyledInput>
              {/* <StyledInput
                margin="normal"
                variant="outlined"
                sx={{ width: "85%" }}
                label="dcwdc"
              ></StyledInput> */}
              <StyledButton
                type="submit"
                sx={{ bgcolor: "rgb(64, 202, 97)", width: "85%" }}
                onClick={() => {
                  navigate(`/dashboard/${val}/${url}`);
                }}
              >
                LOGIN
              </StyledButton>
            </FormControl>
            {console.log(values)}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Authentication;
