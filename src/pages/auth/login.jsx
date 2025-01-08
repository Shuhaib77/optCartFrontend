import { Box, Card, CardContent, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={navigate("/home")}
              fullWidth
              sx={{
                mt: 2,
              }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginCard;
