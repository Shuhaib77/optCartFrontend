// export default JobOpenings
import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import UseModal from "../Modals/JobOpening";
import Editmodal from "../Modals/EditJobOpenings";

function JobOpenings() {
  return (
    <div>
      <Box  >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "10px",
            marginRight: "15px",
            width:"100%"
          }}
        >
          <UseModal />
        </Box>
        <Card sx={{ minHeight: 150, margin: "15px" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box>
                <Typography variant="h4">MERN stack developer</Typography>
                <Typography variant="h6" fontWeight="basic">
                  Description
                </Typography>
                <Typography variant="h6">post:1</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
                  <Editmodal />
                  <Button variant="contained" sx={{ bgcolor: "#3F72AF" }}>
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default JobOpenings;
