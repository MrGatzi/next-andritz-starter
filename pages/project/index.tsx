import { Box, Typography } from "@mui/material";

export const Page = () => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h1">Start Here</Typography>
      <Typography variant="h2">First Step: Change me</Typography>
      <Typography variant="body1">
        <Box component="span" color={"primary.dark"}>
          or :{" "}
        </Box>
          Do whatever :)
        </Typography>
    </Box>
  );
};

export default Page;
