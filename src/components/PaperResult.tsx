import { Box, Stack, styled, Typography } from "@mui/material";
import { Site } from "../entities.ts";

interface Props {
  site: Site;
}

const PaperResult = ({ site }: Props) => {
  const TextHighlight = styled(Typography)({
    display: "inline",
    backgroundColor: "#fffd9b",
  });
  return (
    <Box
      maxWidth="500px"
      sx={{
        backgroundColor: `paperBackground.primary`,
        borderRadius: "20px",
      }}
    >
      <Stack p={4} gap={3}>
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Carbon Result
        </Typography>
        <Typography>
          This website is
          <TextHighlight>
            {" "}
            cleaner than {site.cleanerThan * 100}%
          </TextHighlight>{" "}
          of web pages tested.
        </Typography>
        <Typography>
          <TextHighlight>
            {site.statistics.co2.grid.grams.toFixed(2)}g of CO2
          </TextHighlight>{" "}
          is produced every time someone visits this web page.
        </Typography>
        <Typography>
          This web page appears to be running on{" "}
          <TextHighlight>{site.green && "un"}sustainable energy.</TextHighlight>
        </Typography>
      </Stack>
    </Box>
  );
};

export default PaperResult;
