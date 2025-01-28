import React from "react";
import { Box, FormControl, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../Atoms/Buttons";

import StyledInput from "../../Atoms/Styled_inputs/Input";
import { useFormik } from "formik";
import axios from "axios";

function Add_admine() {
  const { handleBlur, handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      axios.post("");
    },
  });
  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "full",
            bgcolor: "primary.main",
          }}
        >
          <Typography
            style={{
              fontFamily: "serif",
              // fontStyle: "normal",
              fontSize: "43px",
              textAlign: "center",
            }}
          >
        
          </Typography>
          <Box
            sx={{
              bgcolor: "secondary.contrastText",
              width: "900px",
              height: "700px",
              display: "flex",
              gap: 4,
              borderRadius: "10px",
            }}
          >
            {/* <Box sx={{ bgcolor: "", flex: 1 }}>
              <img
                src="https://media.istockphoto.com/id/1364217879/photo/a-businessman-uses-a-computer-to-organize-documents-for-erp-the-concept-of-enterprise.jpg?s=612x612&w=0&k=20&c=6-jbdvcdlgZkv4UHASEeUU0Y4DMIvhNOg7g9cUvJVHA="
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px", // Ensures image covers the entire box
                }}
              />
            </Box> */}

            <FormControl
              sx={{
                bgcolor: "",
                flex: 1,
                display: "grid",
                // flexDirection: "row",
                gridTemplateColumns: "repeat(2, 1fr)",
                placeContent: "center",
                placeItems: "center",
                // flexWrap:"wrap",
                justifyContent: "center",
                alignItems: "center",
                width: "full",
                rowGap: 5,
              }}
              onSubmit={handleSubmit}
            >
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
              <StyledInput
                margin="normal"
                variant="outlined"
                sx={{ width: "85%" }}
                label="dcwdc"
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
              <div style={{ textAlign: "center", width: "100px" }}>
                <StyledButton
                  type="submit"
                  sx={{ bgcolor: "background.default", width: "500px" }}
                >
                  LOGIN
                </StyledButton>
              </div>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Add_admine;
