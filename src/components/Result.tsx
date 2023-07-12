import { Box, Stack, styled, Typography } from "@mui/material";
import { Site } from "../entities.ts";
import PaperBox from "./PaperBox.ts";

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

const Result = ({ site }: Props) => {
  return (
    <PaperBox>
      <Stack gap={3}>
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
          {site.cleanerThan >= 50 ? (
            <TextHighlightSuccess>
              cleaner than {site.cleanerThan}%
            </TextHighlightSuccess>
          ) : (
            <TextHighlightFail>
              dirtier than {100 - site.cleanerThan}%
            </TextHighlightFail>
          )}{" "}
          of web pages tested.
        </Typography>
        <Typography>
          {site.co2 < 0.5 ? (
            <TextHighlightSuccess>
              {site.co2.toFixed(2)}g of CO2
            </TextHighlightSuccess>
          ) : (
            <TextHighlightFail>{site.co2.toFixed(2)}g of CO2</TextHighlightFail>
          )}{" "}
          is produced every time someone visits this web page.
        </Typography>
      </Stack>
    </PaperBox>
  );
};

export default Result;
