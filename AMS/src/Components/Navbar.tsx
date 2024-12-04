// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import {
  AppBar,
  Box,
  Chip,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { colors } from "../Utils/Colors";
import CollegeLogo from "../Utils/Images/CollegeLogo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const getCurrentDateandTime = (): string => {
    return moment().format("DD-MM-YYYY hh:mm:ss");
  };
  const [currentDateandTime, setCurrentDateandTime] = useState<string>(
    getCurrentDateandTime()
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateandTime(getCurrentDateandTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AppBar
        sx={{
          background: `linear-gradient(to right, ${colors.bgGradientPink}, ${colors.bgGradientPurple})`,
          height: "3.5rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              size="medium"
              color="inherit"
              sx={{ mr: 1 }}
              // onClick={handleSidebarToggle}
            >
              <img
                src={CollegeLogo}
                alt="RCOEM"
                style={{ height: 30, width: 30 }}
              />
            </IconButton>

            <Typography>
              Shri Ramdeobaba College of Engineering and Management
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Chip label="Home" sx={{ mr: 1 }} />
            <Chip label="About Us" sx={{ mr: 1 }} />
            <Chip label="Academics" sx={{ mr: 1 }} />
            <Chip label="Placements" sx={{ mr: 1 }} />
            <Chip label="Gallery" sx={{ mr: 1 }} />
            <Chip label="News & Events" sx={{ mr: 1 }} />
            <Chip label="Admissions" sx={{ mr: 1 }} />
            <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Join us @
              <FaFacebookSquare style={{ marginLeft: "6px" }} />
              <GrInstagram style={{ marginLeft: "6px" }} />
              <FaLinkedin style={{ marginLeft: "6px" }} />
              <FaXTwitter style={{ marginLeft: "6px" }} />
            </Typography>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon style={{ marginRight: 10 }} />
            {currentDateandTime}
          </Box> */}
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};
export default Navbar;
