import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../Utils/Colors";
import aboutData from "../Utils/Data/AboutData";
import cardData from "../Utils/Data/CardData";
import historyImage from "../Utils/Images/ourHistory.jpg";
import visionImage from "../Utils/Images/vision.jpg";
import CommonCard from "./CommonCard";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-400 mt-12">
      <Box sx={{ padding: 1.5, borderBottom: `3px solid ${colors.fontColor}` }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: colors.fontColor,
            fontSize: "1.3rem",
            marginBottom: 0.5,
          }}
        >
          ABOUT US
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          marginTop: 0.5,
          padding: 2,
          marginLeft: 3,
        }}
      >
        <div>
          <Typography
            style={{
              color: colors.fontColor,
              fontSize: "1.3rem",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Our History
            <Box
              sx={{
                width: "3rem",
                height: "2px",
                backgroundColor: colors.orangeColorLine,
              }}
            />
          </Typography>
          <Typography>
            {aboutData.map((item) => item.id === 1 && item.text)}
          </Typography>
        </div>
        <Box>
          <img
            src={historyImage}
            alt="Our History"
            style={{ height: "16rem", width: "150rem", borderRadius: "0.5rem" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: 1,
          marginLeft: 3,
        }}
      >
        <img
          src={visionImage}
          alt="Our History"
          style={{ height: "16rem", width: "30%", borderRadius: "0.5rem" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {aboutData
            .filter((item) => item.id >= 2)
            .map((item) => (
              <Box key={item.id} sx={{ marginBottom: 2 }}>
                <Typography
                  style={{
                    color: colors.fontColor,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                  <Box
                    sx={{
                      width: "2.5rem",
                      height: "3px",
                      backgroundColor: colors.orangeColorLine,
                    }}
                  />
                </Typography>
                <Typography>{item.text}</Typography>
              </Box>
            ))}
        </Box>
      </Box>

      <Box sx={{ padding: 3, bgcolor: colors.lighterPurpleAccordion }}>
        <Typography>
          <b style={{ fontSize: "1.3rem" }}>Core Values </b>
          <br />
          <u>
            The bedrock of our esteemed institution is built upon our core
            values.
          </u>
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            marginTop: 2,
          }}
        >
          {cardData.map((card) => (
            <CommonCard title={card.title} description={card.description} />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
