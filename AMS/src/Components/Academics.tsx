import { Box, Typography } from "@mui/material";
import { colors } from "../Utils/Colors";

const Academics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-400 mt-12">
      <Box sx={{ padding: 1.5, display: "flex", flexDirection: "row" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: colors.fontColor,
            fontSize: "1.3rem",
            marginBottom: 0.5,
          }}
        >
          ACADEMICS
        </Typography>
        <Typography sx={{ color: colors.fontColor }}>
          <b>Shri Ramdeobaba College of Engineering and Management </b>(RCOEM)
          is a premier institution founded by the{" "}
          <b>Shri Ramdeobaba Sarvajanik Samiti</b> (SRSS) to promote excellence
          in education. Known for its world-class infrastructure and dedicated
          faculty, RCOEM offers cutting-edge programs in{" "}
          <b>engineering, management, and technology</b>. With a focus on
          innovation, values, and holistic development, it prepares students to
          excel globally and contribute meaningfully to society.
        </Typography>
      </Box>
    </div>
  );
};

export default Academics;
