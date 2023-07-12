import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BackgroundImage from "../assets/background.svg";
import SearchIcon from "@mui/icons-material/Search";
import PaperResult from "./PaperResult.tsx";
import useSite from "../hooks/useSite.ts";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const { data, refetch } = useSite(url);
  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        bgcolor: "homeBackground.primary",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom",
        backgroundSize: { xs: "100% auto", md: "cover" },
      }}
    >
      <Container sx={{ height: "100vh" }} maxWidth="lg">
        <Stack
          maxWidth="600px"
          height="100%"
          pt={{ xs: 16, md: 0 }}
          direction="column"
          justifyContent={{ xs: "start", md: "center" }}
          gap={4}
        >
          <Typography variant="h1" fontSize={{ xs: 36, md: 52 }}>
            How is your website impacting the planet?
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // noinspection JSIgnoredPromiseFromCall
              refetch();
            }}
          >
            <TextField
              variant="standard"
              fullWidth={true}
              label="URL"
              value={url}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </form>
          <Typography maxWidth="400px">
            This app will do a test in real time to calculate the carbon
            emissions generated per page view.
            <br />
            <br />
            This result is cached and will only test the same URL once every 24
            hours.
          </Typography>
          {data && <PaperResult site={data} />}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
