import { Box, Typography } from "@mui/material";
import { colors } from "../Utils/Colors";

interface CommonCardProps {
  readonly title: string;
  readonly description: string;
}

export default function CommonCard({
  title,
  description,
}: CommonCardProps): JSX.Element {
  return (
    <Box
      sx={{
        width: 300,
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: 5,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#0d47a1", fontWeight: "bold", marginBottom: 1 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: "30px",
          height: "2px",
          backgroundColor: colors.orangeColorLine,
          margin: "0 auto 16px auto",
        }}
      />
      <Typography variant="body2" sx={{ color: "#757575" }}>
        {description}
      </Typography>
    </Box>
  );
}
