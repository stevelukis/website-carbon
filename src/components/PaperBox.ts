import { Box, styled } from "@mui/material";

const PaperBox = styled(Box)(({ theme }) => ({
  width: "500px",
  padding: "20px",
  backgroundColor: theme.palette.paperBackground.primary,
  borderRadius: "20px",
}));

export default PaperBox;
