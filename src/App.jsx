import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button 
        variant="contained" 
        sx={{
          backgroundColor: 'green',
          color: 'white',
          '&:hover': { backgroundColor: 'darkgreen' },
        }}
      >
        Custom Styled Button
      </Button>
    </div>
  );
}

export default App;
