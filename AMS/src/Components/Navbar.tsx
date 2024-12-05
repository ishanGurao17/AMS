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
import { Tooltip } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { colors } from "../Utils/Colors";
import rbulogo from "../Utils/Images/rbulogo.png";
import Sidebar from "./Sidebar";

interface iIconHovered {
  isFaceBook: boolean;
  isInstagram: boolean;
  isLinkedin: boolean;
  isX: boolean;
}

const Navbar = () => {
  const getCurrentDateandTime = (): string => {
    return moment().format("DD-MM-YYYY hh:mm:ss");
  };
  const [currentDateandTime, setCurrentDateandTime] = useState<string>(
    getCurrentDateandTime()
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isIconHovered, setIsIconHovered] = useState<iIconHovered>({
    isFaceBook: false,
    isInstagram: false,
    isLinkedin: false,
    isX: false,
  });

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
                src={rbulogo}
                alt="RCOEM"
                style={{ height: 35, width: 35 }}
              />
            </IconButton>

            <Typography sx={{ fontWeight: "bolder" }}>
              Shri Ramdeobaba University
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Chip
              label="Home"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Chip
              label="About Us"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Chip
              label="Academics"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Chip
              label="Placements"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Chip
              label="Gallery"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Chip
              label="News & Events"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Chip
              label="Admissions"
              sx={{ mr: 1, color: "white", fontWeight: "bold" }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mr: 1, borderColor: "white" }}
            />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Tooltip placement="bottomLeft" title={"Follow us @Facebook"}>
                <FaFacebookSquare
                  style={{
                    marginLeft: "6px",
                    cursor: "pointer",
                    color: isIconHovered.isFaceBook
                      ? colors.facebookIconColor
                      : "white",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={() =>
                    setIsIconHovered({ ...isIconHovered, isFaceBook: true })
                  }
                  onMouseLeave={() =>
                    setIsIconHovered({ ...isIconHovered, isFaceBook: false })
                  }
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/RCOEM.Official/",
                      "_blank"
                    )
                  }
                />
              </Tooltip>
              <Tooltip placement="bottomLeft" title={"Follow us @Instagram"}>
                <GrInstagram
                  style={{
                    marginLeft: "6px",
                    cursor: "pointer",
                    color: isIconHovered.isInstagram
                      ? colors.instagramIconColor
                      : "white",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={() =>
                    setIsIconHovered({ ...isIconHovered, isInstagram: true })
                  }
                  onMouseLeave={() =>
                    setIsIconHovered({ ...isIconHovered, isInstagram: false })
                  }
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/rcoem__official/",
                      "_blank"
                    )
                  }
                />
              </Tooltip>

              <Tooltip placement="bottomLeft" title={"Follow us @LinkedIn"}>
                <FaLinkedin
                  style={{
                    marginLeft: "6px",
                    cursor: "pointer",
                    color: isIconHovered.isLinkedin
                      ? colors.linkedinIconColor
                      : "white",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={() =>
                    setIsIconHovered({ ...isIconHovered, isLinkedin: true })
                  }
                  onMouseLeave={() =>
                    setIsIconHovered({ ...isIconHovered, isLinkedin: false })
                  }
                  onClick={() =>
                    window.open(
                      "https://in.linkedin.com/school/srcoemnagpur/",
                      "_blank"
                    )
                  }
                />
              </Tooltip>

              <Tooltip placement="bottomLeft" title={"Follow us @X"}>
                <FaXTwitter
                  style={{
                    marginLeft: "6px",
                    cursor: "pointer",
                    color: isIconHovered.isX ? colors.XIconColor : "white",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={() =>
                    setIsIconHovered({ ...isIconHovered, isX: true })
                  }
                  onMouseLeave={() =>
                    setIsIconHovered({ ...isIconHovered, isX: false })
                  }
                  onClick={() =>
                    window.open("https://x.com/RCOEM_Official", "_blank")
                  }
                />
              </Tooltip>
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
