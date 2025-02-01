/* eslint-disable react/prop-types */
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = ({ demo, role, val }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter data based on role and update the state
    const filteredData = demo.filter((e) => e.role === val);
    setData(filteredData);
  }, [role, demo, val]);

  return (
    <Box sx={{ height: "100vh" }}>
      {/* Static Sidebar */}
      <Box
        sx={{
          width: 270,
          backgroundColor: "white",
          color: "background.default",
          boxShadow: "5px 5px rgba(230, 171, 171, 0.02)",
          height: "100vh",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
            paddingTop: "20px",
          }}
        >
          {role}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            {data[0]?.value?.map((e, i) => (
              e.value === 'Dashboard' ? (
                <Box
                  key={i}
                  sx={{
                    color:"black",
                    width: "100%",
                    marginBottom: "10px",
                    border: "1px solid #ccc", // Add border
                    borderRadius: "4px", // Optional: Add border radius
                    backgroundColor: "#f5f5f5", // Add background color
                    padding: "8px 16px", // Add padding
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: "#e0e0e0", // Hover effect
                    },
                  }}
                  onClick={() => navigate(`/${val}/dashboard`)}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {e.value}
                  </Typography>
                </Box>
              ) : (
                <Accordion key={i} sx={{ width: "100%", marginBottom: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${i}-content`}
                    id={`panel-${i}-header`}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>{e.value}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {e?.data?.map((m, index) => (
                      <Box key={index} sx={{ paddingLeft: "20px", cursor: 'pointer' }} onClick={() => navigate(`/${val}/${m?.url}`)}>
                        <Typography component='li'>
                          {m?.value}
                        </Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              )
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;