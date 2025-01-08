import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../../Atoms/Buttons'; // Import your styled button

function LoginCard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '97vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Left side: Content (Login Form) */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
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
              {/* Use the StyledButton instead of the default Button */}
              <StyledButton
                variant="contained"
                onClick={() => navigate("/")}
                fullWidth
                sx={{
                  mt: 2,
                }}
              >
                Login
              </StyledButton>
            </form>
          </CardContent>
        </Card>
      </Box>

      {/* Right side: Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/authImage.jpg"
          alt="Login"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
}

export default LoginCard;
