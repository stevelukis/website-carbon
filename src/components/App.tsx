import { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BackgroundImage from "../assets/background.svg";
import Result from "./Result.tsx";
import useSite from "../hooks/useSite.ts";
import Error from "./Error.tsx";

function App() {
  const [url, setUrl] = useState("");
  const { data, refetch, fetchStatus, isError } = useSite(url);
  const isLoading = fetchStatus == "fetching";
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
      <Container sx={{ minHeight: "100vh" }} maxWidth="lg">
        <Stack
          height={{ xs: "auto", lg: "100vh" }}
          direction={{ xs: "column", lg: "row" }}
        >
          <Stack
            maxWidth="600px"
            height="100%"
            pt={{ xs: 10, md: 0 }}
            pr={{ xs: 0, lg: 5 }}
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
                      {isLoading ? (
                        <CircularProgress size={20} />
                      ) : (
                        <SearchIcon />
                      )}
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
              This result is cached and will only test the same URL once every
              24 hours.
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            pt={{ xs: 5, lg: 0 }}
            pl={{ xs: 0, lg: 5 }}
          >
            <Zoom in={data !== undefined && !isLoading}>
              <Box>{data && <Result site={data} />}</Box>
            </Zoom>
            <Zoom in={isError}>
              <Box>
                <Error />
              </Box>
            </Zoom>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
