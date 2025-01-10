import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AttendenceandLeave = () => {

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#112D4E',
    color: '#F9F7F7',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159,'Present', 24),
  createData('Ice cream sandwich', 237,'Late', 37),
  createData('Eclair', 262, 'Excused', 24),
  createData('Cupcake', 305, 'UnExcused', 67),
  createData('Gingerbread', 356, 'Present', 49, ),
];



  return (
    <div>
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 ,marginTop:'10px'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Total Attendance</StyledTableCell>
            <StyledTableCell align="right">Today&nbsp;</StyledTableCell>
            <StyledTableCell align="right">weekly&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Box>
   <Box sx={{marginTop:'10px'}}>
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography variant='h4' fontFamily='bold'>
            Leave Request
        </Typography>
    </Box>
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
    {
  rows.map((row, index) => (
    <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right"><Button>Accept</Button></TableCell>
              <TableCell align="right"><Button>Reject</Button></TableCell>
            </TableRow>
  ))
}
</TableBody>
</Table>
</TableContainer>
   </Box>
    </div>
  )
}

export default AttendenceandLeave