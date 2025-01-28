import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tables from "../Common/Tables";

function Attendence_emoloye() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#112D4E",
      color: "#F9F7F7",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData("Frozen yoghurt", 159, "Present", 24),
    createData("Ice cream sandwich", 237, "Late", 37),
    createData("Eclair", 262, "Excused", 24),
    createData("Cupcake", 305, "UnExcused", 67),
    createData("Gingerbread", 356, "Present", 49),
  ];
  return (
    <div>
      <div>
        <Box
          sx={{
            padding: "15px",
            borderRadius: "6px",
            width: "full",
            height: "full",
           
          }}
        >
          <Tables
            rows={rows}
            tableH1={"Name"}
            tableH2={"Total"}
            tableH3={"Designation"}
            tableH4={"Role"}
          />
        </Box>
        <Box sx={{ marginTop: "10px", padding: "15px", borderRadius: "6px" }}>
          <Box >
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Typography variant="h4" fontFamily="bold">
                Leave Request
              </Typography>
            </Box>
            <TableContainer sx={{ borderRadius: "6px" }}>
              <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">
                      Total Attendanceba
                    </StyledTableCell>
                    <StyledTableCell align="right">Today&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">
                      weekly&nbsp;
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Attendence_emoloye;
