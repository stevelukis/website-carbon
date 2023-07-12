import PaperBox from "./PaperBox.ts";
import { Stack, Typography } from "@mui/material";

const Error = () => {
  return (
    <PaperBox textAlign="center">
      <Stack gap={3}>
        <Typography variant="h5" fontWeight="bold">
          Error
        </Typography>
        <Typography>Cannot retrieve result.</Typography>
      </Stack>
    </PaperBox>
  );
};

export default Error;
