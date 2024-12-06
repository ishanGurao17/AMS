import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Grid from "@mui/material/Grid2";
import { Carousel } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import "../App.css";
import { colors } from "../Utils/Colors";
import accordionData from "../Utils/Data/AccordionData";
import collegecampus from "../Utils/Images/CollegeCampus.jpg";
import collegeInfra from "../Utils/Images/CollegeInfra.jpg";
import image1 from "../Utils/Images/Image1.jpg";
import studentAdmission from "../Utils/Images/image5.jpg";
import interaction from "../Utils/Images/interact.jpg";
import studentActivity from "../Utils/Images/StudentActivity.jpg";

const Dashboard = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const handleChange =
    (id: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-400 mt-12">
      <Carousel arrows autoplaySpeed={3000} autoplay infinite={true}>
        <Box>
          <Box
            className="relative flex justify-between items-center px-32 h-[24rem]"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box className="w-[70%]">
              <h1
                className="text-6xl #2a3d66 font-acme font-bold mb-4 leading-tight"
                style={{ color: "#2a3d66" }}
              >
                Shri Ramdeobaba College of Engineering and Management
              </h1>
              <p
                className="mb-4"
                style={{ color: "A6B6D9", fontWeight: "bold" }}
              >
                With strong focus on academic excellence and practical training,
                RCOEM provides a solid foundation for students to kickstart
                their careers in various engineering fields.
              </p>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            className="relative flex justify-between items-center px-32 h-[24rem]"
            style={{
              backgroundImage: `url(${interaction})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box className="w-[70%]">
              <h1
                className="text-6xl #2a3d66 font-acme font-bold mb-4 leading-tight"
                style={{ color: "white" }}
              >
                Spark of Genius
              </h1>
              <p className="mb-4" style={{ color: "white" }}>
                We offer students an eco-system that fosters creativity,
                innovation, and out-of-the-box thinking, encouraging students to
                push the boundaries of conventional thought and spark their
                genius.
              </p>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            className="relative flex justify-between items-center px-32 h-[24rem]"
            style={{
              backgroundImage: `url(${collegecampus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box className="w-[70%]">
              <h1
                className="text-6xl #2a3d66 font-acme font-bold mb-4 leading-tight"
                style={{ color: "white" }}
              >
                Lavish Green Campus
              </h1>
              <p className="mb-4" style={{ color: "white" }}>
                Our campus is a vibrant and bustling hub of activity. It houses
                not only classrooms and labs but also a variety of student
                organizations, clubs, and societies. From sports teams to
                cultural groups, there is something for everyone on campus.
              </p>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            className="relative flex justify-between items-center px-32 h-[24rem]"
            style={{
              backgroundImage: `url(${studentActivity})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box className="w-[70%]">
              <h1
                className="text-6xl #2a3d66 font-acme font-bold mb-4 leading-tight"
                style={{ color: "white" }}
              >
                Student Activity
              </h1>
              <p className="mb-4" style={{ color: "white" }}>
                Students indulge in varied academic, sports, and extra
                curricular activities for their holistic development. A number
                of events are organized to help students grow in every area
                possible.
              </p>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            className="relative flex justify-between items-center px-32 h-[24rem]"
            style={{
              backgroundImage: `url(${collegeInfra})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box className="w-[70%]">
              <h1
                className="text-6xl #2a3d66 font-acme font-bold mb-4 leading-tight"
                style={{ color: "white" }}
              >
                Infrastructure
              </h1>
              <p
                className="mb-4"
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Our infrastructure consists of spacious classrooms, labs,
                libraries, sports facilities and comfortable hostels.
              </p>
            </Box>
          </Box>
        </Box>
      </Carousel>
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3">
        <Marquee speed={50} style={{ color: "white" }}>
          Shri Ramdeobaba College of Engineering and Management (RCOEM) is now
          "Ramdeobaba University (RBU)" | New Semester Admissions Open for
          2024-2025 session
        </Marquee>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          color: colors.fontColor,
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            minHeight: "230px",
            width: "30%",
            textAlign: "left",
            padding: 2,
            boxShadow: 5,
            border: `1px solid ${colors.lightGradientPink}`,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            RCOEM College
          </Typography>
          <Typography>
            RCOEM is the <strong>best engineering college in Nagpur</strong>,
            Maharashtra, India. Established in 1984, the college offers
            undergraduate and postgraduate programs in various fields of
            engineering, management, and computer applications.
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: "230px",
            width: "30%",
            textAlign: "left",
            padding: 2,
            boxShadow: 5,
            backgroundColor: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
            border: `1px solid ${colors.lightGradientPurple}`,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Top 20 Ranked
          </Typography>
          <Typography>
            Our college has been consistently ranked among top engineering
            colleges in India by various agencies, including National
            Institutional Ranking Framework, Ministry of Human Resource
            Development, India Today Ranking, and more.
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: "230px",
            width: "30%",
            textAlign: "left",
            padding: 2,
            boxShadow: 5,
            backgroundColor: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
            border: `1px solid ${colors.lightGradientPurple}`,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Global Connections
          </Typography>
          <Typography>
            MoUs with reputed universities of USA, UK, and Australia.
            Additionally, we have signed 9 MoUs with government organizations, 4
            with industry associations, and 27 with varied industry players.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
          <Grid
            sx={{
              marginLeft: "4rem",
              width: "35rem",
            }}
          >
            <Typography
              sx={{ marginBottom: 1.5, fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Why Choose To Study In RCOEM?
            </Typography>
            {accordionData.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                style={{ marginBottom: 4 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    bgcolor: colors.lightGradientPink,
                  }}
                >
                  {item.summary}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    bgcolor: colors.lighterPurpleAccordion,
                    color: colors.fontColor,
                  }}
                >
                  {item.details}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid
            sx={{
              width: "35rem",
              marginLeft: 5,
            }}
          >
            <Typography
              sx={{
                marginBottom: 1.5,
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: colors.fontColor,
              }}
            >
              RCOEM Corporate Film
            </Typography>
            <ReactPlayer url="https://youtu.be/3G3H0ROaTJk" />
          </Grid>
        </Grid>
      </Box>

      <Box
        className="relative flex justify-between items-center px-32 h-[24rem]"
        sx={{
          backgroundImage: `url(${studentAdmission})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: 1,
          opacity: 1,
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Take the first step of your learning journey
          <Button
            sx={{
              justifyContent: "flex-start",
              backgroundColor: "black",
              color: "white",
              width: "20%",
            }}
          >
            Enroll Today
          </Button>
        </Typography>
      </Box>
      <Box sx={{ padding: 5 }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "bolder",
          }}
        >
          “An investment in knowledge pays the best interest.” – Benjamin
          Franklin
        </Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
