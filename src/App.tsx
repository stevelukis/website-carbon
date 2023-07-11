import {Box} from "@mui/material";
import BackgroundImage from "./assets/background.svg";

function App() {
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        bgcolor: "customBackground.primary",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default App;
