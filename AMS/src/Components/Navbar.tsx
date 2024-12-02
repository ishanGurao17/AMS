import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { colors } from "../Utils/Colors";

const Navbar = () => {
  const getCurrentDateandTime = (): string => {
    return moment().format("DD-MM-YYYY hh:mm:ss");
  };
  const [currentDateandTime, setCurrentDateandTime] = useState<string>(
    getCurrentDateandTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateandTime(getCurrentDateandTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-pink-300 to-purple-300">
      <AppBar
        sx={{
          background: `linear-gradient(to right, ${colors.bgGradientPink}, ${colors.bgGradientPurple})`,
          height: "3rem",
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
            }}
          >
            <IconButton size="medium" color="inherit" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography>Attendence Management System</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon style={{ marginRight: 10 }} />
            {currentDateandTime}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
