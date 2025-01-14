import { Table, TableContainer, TableHead,TableRow,TableBody } from '@mui/material'
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";


const Tables = ({rows,tableH1,tableH2,tableH3,tableH4}) => {
    
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

  return (
    <div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700, marginTop: "" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>{tableH1}</StyledTableCell>
                <StyledTableCell align="right">
                  {tableH2}
                </StyledTableCell>
                <StyledTableCell align="right">{tableH3}&nbsp;</StyledTableCell>
                <StyledTableCell align="right">{tableH4}&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Tables