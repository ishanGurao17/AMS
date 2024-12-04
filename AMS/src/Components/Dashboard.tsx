import { Box } from "@mui/material";
import { Carousel } from "antd";
import Marquee from "react-fast-marquee";
import "../App.css";
import image1 from "../Utils/Images/Image1.jpg";
import interaction from "../Utils/Images/interact.jpg";

const Dashboard = () => {
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
      </Carousel>
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3">
        <Marquee speed={50}>
          New Semester Admissions Open | Upcoming Webinar on Engineering Careers
          | Sports Day Event on December 15
        </Marquee>
      </div>
    </div>
  );
};

export default Dashboard;
