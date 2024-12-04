import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import { Box, Chip, Drawer } from "@mui/material";
import React from "react";
import { colors } from "../Utils/Colors";

interface iSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const chipItems = [
  {
    label: "Dashboard",
    icon: <DashboardCustomizeTwoToneIcon />,
  },
  { label: "Our Curriculum", icon: <CategoryTwoToneIcon /> },
  {
    label: "Extra-Curricular Activites",
    icon: <SportsEsportsTwoToneIcon />,
  },
  {
    label: "Notable Alumini",
    icon: <SchoolTwoToneIcon />,
  },
  {
    label: "Social Activities",
    icon: <Diversity3TwoToneIcon />,
  },
];
const Sidebar: React.FC<iSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "320px",
        },
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(to right, ${colors.bgGradientPink}, ${colors.bgGradientPurple})`,
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        Attendence Management System <CalendarMonthIcon sx={{ ml: 1 }} />
      </Box>
      <Box
        sx={{
          background: `linear-gradient(to right, ${colors.lightGradientPink}, ${colors.lightGradientPurple})`,
          width: "100%",
          height: "100vh",
          color: "white",
          padding: 2,
        }}
      >
        {chipItems.map((chip, index) => (
          <Chip
            label={chip.label}
            icon={chip.icon}
            sx={{
              background: `linear-gradient(to right, ${colors.lightGradientPink}, ${colors.lightGradientPurple})`,
              width: "70%",
              marginTop: index === 0 ? 0 : 2,
              display: "flex",
              justifyContent: "flex-start",
            }}
          />
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
