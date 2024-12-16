import { Box } from "@mui/material";
import { placementData } from "../Utils/Data/PlacementData";

const OurRecruiter = () => {
  const companyName = placementData.find(
    (data) => data.id === 5
  )?.ourRecruiters;
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Responsive grid layout
          gap: 5,
          padding: 1,
        }}
      >
        {companyName?.map((item) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "whitesmoke",
              borderRadius: 2,
              boxShadow: 2,
              padding: 1,
            }}
          >
            <img
              src={item.recruiter}
              alt={item.recruiter}
              style={{ width: "100%", height: "auto", maxWidth: "10rem" }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default OurRecruiter;
