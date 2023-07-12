import { Box, Stack, styled, Typography } from "@mui/material";
import { Site } from "../entities.ts";

interface Props {
  site: Site;
}

const TextHighlight = styled(Typography)({
  padding: 6,
  borderRadius: "10px",
  display: "inline",
});

const TextHighlightSuccess = styled(TextHighlight)(({ theme }) => ({
  backgroundColor: theme.palette.highlight.success,
}));

const TextHighlightFail = styled(TextHighlight)(({ theme }) => ({
  backgroundColor: theme.palette.highlight.fail,
}));

const PaperResult = ({ site }: Props) => {
  const co2 = site.statistics.co2.grid.grams;
  return (
    <Box
      width="500px"
      sx={{
        backgroundColor: `paperBackground.primary`,
        borderRadius: "20px",
      }}
    >
      <Stack p={4} gap={3}>
        <Box>
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            Carbon Result
          </Typography>
          <Typography textAlign="center">
            {site.url.length > 30
              ? site.url.substring(0, 30) + "..."
              : site.url}
          </Typography>
        </Box>
        <Typography>
          This website is{" "}
          {site.cleanerThan >= 0.5 ? (
            <TextHighlightSuccess>
              cleaner than {site.cleanerThan * 100}%
            </TextHighlightSuccess>
          ) : (
            <TextHighlightFail>
              dirtier than {(1 - site.cleanerThan) * 100}%
            </TextHighlightFail>
          )}{" "}
          of web pages tested.
        </Typography>
        <Typography>
          {co2 < 0.5 ? (
            <TextHighlightSuccess>
              {co2.toFixed(2)}g of CO2
            </TextHighlightSuccess>
          ) : (
            <TextHighlightFail>{co2.toFixed(2)}g of CO2</TextHighlightFail>
          )}{" "}
          is produced every time someone visits this web page.
        </Typography>
        <Typography>
          This web page appears to be running on{" "}
          {site.green ? (
            <TextHighlightSuccess>sustainable energy</TextHighlightSuccess>
          ) : (
            <TextHighlightFail>unsustainable energy</TextHighlightFail>
          )}
          .
        </Typography>
      </Stack>
    </Box>
  );
};

export default PaperResult;
