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
import { useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../Utils/Colors";
import routes from "../Utils/Data/RouteData";
import rbulogo from "../Utils/Images/rbulogo.png";
import Sidebar from "./Sidebar";

interface iIconHovered {
  isFaceBook: boolean;
  isInstagram: boolean;
  isLinkedin: boolean;
  isX: boolean;
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <div>
      <AppBar
        sx={{
          background: `linear-gradient(to right, ${colors.bgGradientPink}, ${colors.bgGradientPurple})`,
          height: "3.4rem",
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
            <IconButton size="medium" color="inherit" sx={{ mr: 1 }}>
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
            {routes.map((route) => {
              const isActive = location.pathname === route.pathname;
              return (
                <Chip
                  label={route.label}
                  sx={{
                    mr: 1,
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: isActive
                      ? colors.activePageColor
                      : "transparent",
                  }}
                  onClick={() => navigate(route.pathname)}
                />
              );
            })}

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
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};
export default Navbar;
