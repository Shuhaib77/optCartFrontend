import { Box } from "@mui/material";
import StyledButton from "../Atoms/Buttons";
import StyledInput from "../Atoms/Styled_inputs/Input";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  return (
    <div style={{ h: "100%" }}>
      <Box
        sx={{ background: "rgba(0, 0, 95, 0.88)", width: 1, height: "50px" }}
      ></Box>
      <Box
        sx={{
          background: "rgb(48, 95, 171)",
          width: 1,
          height: "70px",
          display: "flex",
          justifyContent:"space-around",
          color:"white",
          position:'sticky',
          top:0
        }}
      >
        <Box sx={{ w: 1 / 3,display:"flex",justifyContent:"center",alignItems:"center"  }}>
          <h1>OPTCART</h1>
        </Box>
        <Box sx={{ w: 1,display:"flex",columnGap:5,justifyContent:"center",alignItems:"center"  }}>
          <h5>dxgcfhvbjknlm</h5>
          <h5>dxgcfhvbjknlm</h5>
          <h5>dxgcfhvbjknlm</h5>
          <h5>dxgcfhvbjknlm</h5>
        </Box>
        <Box sx={{ w: 1 / 3,display:"flex",columnGap:5,justifyContent:"center",alignItems:"center" }}>
             <h5>search</h5>
          <StyledButton sx={{backgroundColor:"rgb(64, 202, 97)",width:"200px",height:"50px"}} onClick={()=>{navigate("/")}} >LOGIN</StyledButton>
        </Box>
      </Box>
      <Box sx={{ background: "green", width: 1, display: "flex" }}>
        <Box
          sx={{
            background: "black",
            width: 1 / 2,
            height: "400px",
            padding: 10,
            color: "white",
          }}
        >
          <h1>Pronto Xi Cloud ERP Hosted Solutions</h1>
          <p>
            Providing flexible software-as-a-service (SaaS) delivery options and
            service levels that support organizational growth.
          </p>
        </Box>
        <Box sx={{ background: "", width: 1, height: "400px" }}>
          <img
            src="https://www.psainc.ca/wp-content/uploads/2020/05/psa-cloud-banner.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "600px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            src="https://www.psainc.ca/wp-content/uploads/2020/05/PSA-Flowcentric-BPM-Software.png"
            alt=""
            style={{ objectFit: "cover", width: "800px", height: "" }}
          />
        </Box>
        <Box sx={{ flex: 1 / 2, background: "" }}>
          <h1>Flexible Cloud ERP software options.</h1>
          <p>
            PSA provides a range of flexible cloud-hosted options for Pronto Xi
            Enterprise Resource Planning Software, from disaster recovery to
            full managed services. Our PSA cloud team helps to determine the
            best implementation method based on requirements that factor in your
            existing IT infrastructure, IT team support availability, and
            expected organizational growth.
          </p>
          <h1>Cloud options include:</h1>
          <h5>fdwcwcwcdwcwdcdcceff</h5>
          <h5>fdwcwcwcdwcwdcdcceff</h5>
          <h5>fdwcwcwcdwcwdcdcceff</h5>
          <h5>fdwcwcwcdwcwdcdcceff</h5>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgb(48, 95, 171)",
          width: 1,

          // display: "grid",
          // gridTemplateColumns: "repeat(3, 1fr)",
          // rowGap: 2,
          // my: 5,
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: 2,
            my: 5,
          }}
        >
          <Box
            sx={{
              background: "rgba(3, 3, 106, 0.85)",
              "&:hover": {
                backgroundColor: "rgb(64, 202, 97)",
                color: "black",
              },
              color: "white",
              width: "400px",
              height: "300px",
              m: 5,
              padding: 2,
              border: "2px solid rgb(64, 202, 97)",
            }}
          >
            <img
              src="https://www.psainc.ca/wp-content/uploads/2020/06/erp-software-icon.png"
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h1>Easy to Scale ERP Software</h1>
            <p>
              Systems are easily scaled by PSA with no hardware purchases,
              upgrade or time commitments from your internal IT team.
            </p>
          </Box>
          <Box
            sx={{
              background: "rgba(3, 3, 106, 0.85)",
              "&:hover": {
                backgroundColor: "rgb(64, 202, 97)",
                color: "black",
              },
              color: "white",
              width: "400px",
              height: "300px",
              m: 5,
              padding: 2,
              border: "2px solid rgb(64, 202, 97)",
              overflow: "auto",
            }}
          >
            <img
              src="https://www.psainc.ca/wp-content/uploads/2020/06/flex-cloud-icon.png"
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h1>Flexible Cloud Hosted Services</h1>
            <p>
              PSA services range from disaster recovery (DRaaS) to complete ERP
              software management (MaaS). Whatever your requirement, we have a
              hosted solution to fit your specification.
            </p>
          </Box>
          <Box
            sx={{
              background: "rgba(3, 3, 106, 0.85)",
              "&:hover": {
                backgroundColor: "rgb(64, 202, 97)",
                color: "black",
              },
              color: "white",
              width: "400px",
              height: "250px",
              m: 5,
              padding: 2,
              border: "2px solid rgb(64, 202, 97)",
              overflow: "auto",
            }}
          >
            <img
              src="https://www.psainc.ca/wp-content/uploads/2020/06/pay-cloud-icon.png"
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h1>
              Pay-as-you-Go Cloud ERP Software Subscription with no capital
              expenditures
            </h1>
            <p>
              Preferred by CFOs, ERP software subscription eliminates the need
              for capital expenditure making the start of an ERP project more
              accessible.
            </p>
          </Box>
          <Box
            sx={{
              background: "rgba(3, 3, 106, 0.85)",
              "&:hover": {
                backgroundColor: "rgb(64, 202, 97)",
                color: "black",
              },
              color: "white",
              width: "400px",
              height: "300px",
              m: 5,
              padding: 2,
              border: "2px solid rgb(64, 202, 97)",
              overflow: "auto",
            }}
          >
            <img
              src="https://www.psainc.ca/wp-content/uploads/2020/06/pay-cloud-icon.png"
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h1>
              Pay-as-you-Go Cloud ERP Software Subscription with no capital
              expenditures
            </h1>
            <p>
              Preferred by CFOs, ERP software subscription eliminates the need
              for capital expenditure making the start of an ERP project more
              accessible.
            </p>
          </Box>
          <Box
            sx={{
              background: "rgba(3, 3, 106, 0.85)",
              "&:hover": {
                backgroundColor: "rgb(64, 202, 97)",
                color: "black",
              },
              color: "white",
              width: "400px",
              height: "300px",
              m: 5,
              padding: 2,
              border: "2px solid rgb(64, 202, 97)",
              overflow: "auto",
            }}
          >
            <img
              src="https://www.psainc.ca/wp-content/uploads/2020/06/pay-cloud-icon.png"
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h1>
              Pay-as-you-Go Cloud ERP Software Subscription with no capital
              expenditures
            </h1>
            <p>
              Preferred by CFOs, ERP software subscription eliminates the need
              for capital expenditure making the start of an ERP project more
              accessible.
            </p>
          </Box>
          <Box
            sx={{
              background: "rgba(3, 3, 106, 0.85)",
              "&:hover": {
                backgroundColor: "rgb(64, 202, 97)",
                color: "black",
              },
              color: "white",
              width: "400px",
              height: "300px",
              m: 5,
              padding: 2,
              border: "2px solid rgb(64, 202, 97)",
              overflow: "auto",
            }}
          >
            <img
              src="https://www.psainc.ca/wp-content/uploads/2020/06/pay-cloud-icon.png"
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <h1>
              Pay-as-you-Go Cloud ERP Software Subscription with no capital
              expenditures
            </h1>
            <p>
              Preferred by CFOs, ERP software subscription eliminates the need
              for capital expenditure making the start of an ERP project more
              accessible.
            </p>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", width: 1 }}>
          <StyledButton
            sx={{
              textAlign: "center",
              width: "200px",
              backgroundColor: "rgb(64, 202, 97)",
              mb: 4,
            }}
          >
            cefccdcdcef
          </StyledButton>
        </Box>
      </Box>
      <Box
        sx={{
          background: "black",
          width: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          columnGap: 5,
          color: "white",
        }}
      >
        {/* <Box sx={{ background: "blue", width: 1 / 2, height: "400px" }}> */}
        <img
          src="https://www.psainc.ca/wp-content/uploads/2020/04/Pronto-Xi-ERP-Software-Splash-Screen.png"
          alt=""
          style={{ width: "400px", height: "100%", objectFit: "cover" }}
        />
        {/* </Box> */}
        <Box sx={{ background: "", width: 1 / 2, height: "100%" }}>
          <h1>Pronto Xi ERP Software as a Service.</h1>
          <p>
            Software-as-a-Service delivers Pronto Xi ERP software to your
            company via internet connection from our secure and reliable
            datacenters. Subscription based, companies are charged monthly for
            use of the platform and ERP software which is configured to
            specification
          </p>
          <p>
            Each implementation is maintained in its own secure server location
            and delivered as a full-featured, robust application through an
            internet browser window. Whether on-premise or hosted, Pronto Xi
            delivers the same functionality.
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgb(48, 95, 171)",
          color: "white",
          width: "full",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "50px",
        }}
      >
        <Box sx={{ background: "", height: "500px" }}>
          <h1>
            Boost your ERP strategy with Pronto Xi ERP Management as a Service.
          </h1>
          <p>
            Pronto Xi ERP Management as a Service takes you to the next level
            with additional services to help maintain and manage your ERP
            solution. To provide context to the depth of service provided with a
            MaaS solution, below are examples of just some of the specific
            duties performed. This is over and above regular monitoring and
            support, system administration, and database administration provided
            with our cloud hosting services.
          </p>
          <h5>ERP license tracking including user adds and removals.</h5>
          <h5>ERP license tracking including user adds and removals.</h5>
          <h5>ERP license tracking including user adds and removals.</h5>
          <h5>ERP license tracking including user adds and removals.</h5>
        </Box>
        <Box sx={{ background: "", height: "500px" }}>
          <img
            src="https://www.psainc.ca/wp-content/uploads/2020/05/Pronto-Xi-ERP-in-the-cloud-for-improved-mobility.png"
            alt=""
            style={{ width: "400px", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgb(64, 202, 97)",
          width: 1,
          height: "150px",
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>It’s time to transform the way you do business. </h1>
        <StyledButton sx={{ bgcolor: "white", m: 2, color: "black" }}>
          lets Talk
        </StyledButton>
      </Box>
      <Box
        sx={{
          background: "green",
          width: 1,
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          height: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{ background: "", flex: 1, height: "400px" }}>
          <h1>OPTICART</h1>
          <p>
            Pronto Solutions Alliance Inc. (PSA) helps business clients reach
            and exceed their potential through implementation of Enterprise
          </p>
          <p>
            Resource Planning Software. We are the leading North American
            reseller of Pronto Xi ERP Business Software.
          </p>
          <p>
            Pronto Solutions Alliance Inc. (PSA) helps business clients reach
            reseller of Pronto Xi ERP Business Software.
          </p>
        </Box>
        <Box sx={{ background: "", flex: 1, m: "auto", height: "400px" }}>
          <h1>OPTICART</h1>
          <h3> Navigation</h3>
          <h5> Navigation</h5>
          <h5> Support</h5>
          <h5> Company</h5>
          <h5> Resources</h5>
          <h5>Privacy Policy</h5>
        </Box>
        <Box sx={{ background: "", flex: 1, m: "auto", height: "400px" }}>
          <h1>OPTICART</h1>

          <h3> Navigation</h3>
          <h5> Navigation</h5>
          <h5> Support</h5>
          <h5> Company</h5>
          <h5> Resources</h5>
          <h5>Privacy Policy</h5>
        </Box>
        <Box sx={{ background: "", flex: 1, height: "400px" }}>
          <h1>OPTICART</h1>

          <h3> Navigation</h3>
          <h5> Navigation</h5>
          <h5> Support</h5>
          <h5> Company</h5>
          <h5> Resources</h5>
          <h5>Privacy Policy</h5>
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgba(11, 142, 85, 0.91)",
          width: 1,
          height: "100px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h5>@ALL Rights Reserved 2024 Pronto Solutions Alliance</h5>
        <h5>Website Designed By Kinex Media</h5>
      </Box>
    </div>
  );
};

export default Home;
