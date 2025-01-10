import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import UseModal from "../../components/Modals/JobOpening"
import Editmodal from "../../components/Modals/EditJobOpenings"

const JobOpenings = () => {
  return (
    <Box >
        <Box sx={{display:'flex',justifyContent:'center', marginTop:'10px'}}>
          <UseModal/>
        </Box>
        <Card sx={{ minHeight: 150 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
         
          <Box>
            <Typography variant="h4">MERN stack developer</Typography>
            <Typography variant="h6" fontWeight="basic">
              Description
            </Typography>
            <Typography variant="h6">
              post:1
            </Typography>
            <Box sx={{display:'flex',flexDirection:"row", gap:4}}>
            <Editmodal/>
            <Button variant="contained"
            sx={{bgcolor:'#3F72AF'}}
            >
              Delete
            </Button>
            </Box>
            
          </Box>
        </Box>
      </CardContent>
    </Card>
        

    </Box>
  )
}

export default JobOpenings