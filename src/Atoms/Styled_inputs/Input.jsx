import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledInput = styled(TextField)`
  &.MuiTextField-root {
    background-color: rgb(255, 255, 255); /* Background color */
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused {
      border-color: rgb(60, 203, 63); /* Focused border color */
    }
  }

  & .MuiInputLabel-outlined {
    color: rgb(28, 104, 158); /* Label color */
    &.Mui-focused {
      border-color: rgb(60, 203, 63); /* Focused border color */
    }
  
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: rgb(14, 148, 90); /* Border color */
  }
`;


export default StyledInput;
