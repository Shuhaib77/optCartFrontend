import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Typography}  from '@mui/material';
import TextField from '@mui/material/TextField';
import WcSharpIcon from '@mui/icons-material/WcSharp';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const  Employeemangement=()=> {
  return (
<Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    marginTop:5,
    width:'500px',
    boxShadow:3
  }}
  noValidate
  autoComplete="off"
>
<Typography variant="h5" sx={{ marginLeft: 2 }}>
         <WcSharpIcon/> Add Employees
</Typography>
  
  <TextField
    id="outlined-basic"
    label="name"
    variant="outlined"
    style={{ width: '500px' }}
  />
  <TextField
    id="outlined-basic"
    label="address"
    variant="outlined"
    style={{ width: '500px' }}
  />

   <TextField
      id="outlined-basic"
      variant="outlined"
      type="email"
      label='email'
      style={{width:"500px"}}
    />

<TextField
      id="outlined-basic"
      variant="outlined"
      type="text"
      label='Role'
      style={{width:"500px"}}
    />
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 1, // adds spacing between the fields
    }}
  >
    <TextField
      id="outlined-basic"
      label="age"
      variant="outlined"
      type="number"
      sx={{ flex: 1 }} // makes this field take equal space
    />
    <TextField
      id="outlined-basic"
      variant="outlined"
      type="file"
      sx={{ flex: 1 }} // makes this field take equal space
    />
    
  </Box>
  
 
</Box>


</Box>
  );
}


export default Employeemangement;