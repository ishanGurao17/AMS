import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Tabs, Typography } from "antd";
import { useState } from "react";
import { colors } from "../Utils/Colors";
import { placementData } from "../Utils/Data/PlacementData";
import ComapniesByYear from "./CompaniesByYear";
import OurRecruiter from "./OurRecruiter";

const { TabPane } = Tabs;

const Placements = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-400 mt-12">
      <Typography
        style={{
          fontWeight: "bold",
          color: colors.fontColor,
          fontSize: "1.3rem",
          padding: "1rem",
        }}
      >
        PLACEMENTS
      </Typography>
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        tabPosition="left"
        style={{ padding: "0.8rem" }}
      >
        {placementData.map((item) => (
          <TabPane
            tab={
              <b
                style={{
                  color:
                    activeTab === item.id.toString()
                      ? colors.activePageColor
                      : colors.bgGradientPink,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.icon}
                {item.label}
              </b>
            }
            key={item.id}
            style={{
              maxHeight: "700px",
              overflowY: "auto",
            }}
          >
            <Box
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                backgroundColor: colors.lighterPurpleAccordion,
                padding: 5,
                color: colors.fontColor,
                borderRadius: "0.2rem",
                display: "inline-block",
                marginBottom: 5,
              }}
            >
              {item.heading}
            </Box>
            <img src={item?.image} />
            <Typography
              style={{
                marginTop: 5,
                marginBottom: 5,
                whiteSpace: "pre-line",
                lineHeight: "1.5",
              }}
            >
              {item.description}
            </Typography>
            {item.batchWiseData?.map((i) => (
              <>
                <Box
                  sx={{
                    backgroundColor: colors.bgGradientPurple,
                    color: "whitesmoke",
                    fontWeight: "bold",
                    display: "inline-block",
                    padding: 0.8,
                    borderRadius: 1,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  {i.year}
                </Box>
                <TableContainer sx={{ width: "99%" }}>
                  <Table>
                    <TableBody>
                      {i.report.map((m) => (
                        <TableRow
                          sx={{
                            backgroundColor:
                              m.id % 2 === 0
                                ? colors.lighterPurpleAccordion
                                : colors.lightGradientPink,
                          }}
                        >
                          <TableCell
                            sx={{
                              border: "1px solid black",
                            }}
                          >
                            {m.label}
                          </TableCell>
                          <TableCell
                            sx={{
                              border: "1px solid black",
                            }}
                          >
                            {m.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ))}
            <Typography style={{ marginBottom: "0.5rem" }}>
              {item.id === 1 && (
                <>
                  <b>Key Amenities</b> <br />
                  At CDPC, we offer a range of amenities designed to enhance
                  student employability and career readiness:
                </>
              )}
            </Typography>
            {item.placementGraph?.map((i) => (
              <>
                <Box
                  sx={{
                    backgroundColor: colors.bgGradientPurple,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: 1,
                    marginBottom: 1,
                    marginTop: 1,
                    borderRadius: 2,
                    display: "inline-block",
                    textTransform: "uppercase",
                  }}
                >
                  {i.label}
                </Box>
                <img src={i.graph} style={{ width: "40rem" }} />
              </>
            ))}
            {item.amenities?.map((i) => (
              <Typography>
                <ul>
                  <li>
                    <b style={{ marginRight: "0.2rem" }}>{i.title}:</b>
                    {i.description}
                  </li>
                </ul>
              </Typography>
            ))}
            {item.id === 4 && <ComapniesByYear />}
            {item.id === 5 && <OurRecruiter />}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Placements;
