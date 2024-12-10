import { Box, Typography } from "@mui/material";
import { colors } from "../Utils/Colors";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-400 mt-12">
      <Box sx={{ padding: 1.5, borderBottom: `3px solid ${colors.fontColor}` }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: colors.fontColor,
            fontSize: "1.2rem",
          }}
        >
          ABOUT US
        </Typography>
        <Typography sx={{ color: colors.fontColor }}>
          RCOEM owes its beginnings to the Shri Ramdeobaba Sarvajanik Samiti
          (SRSS)
        </Typography>
      </Box>
    </div>
  );
};

export default AboutUs;
