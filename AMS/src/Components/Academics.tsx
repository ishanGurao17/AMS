import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { colors } from "../Utils/Colors";
import {
  pgPrograms,
  phdPrograms,
  ugPrograms,
} from "../Utils/Data/AcademicsData";

const Academics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-400 mt-12">
      <Box
        sx={{
          padding: 1.5,
          display: "flex",
          flexDirection: "column",
          borderBottom: `3px solid ${colors.fontColor}`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: colors.fontColor,
            fontSize: "1.3rem",
            marginBottom: 0.5,
          }}
        >
          ACADEMICS
        </Typography>
        <Typography sx={{ color: colors.fontColor }}>
          All UG and PG programs are affiliated to Rashtrasant Tukadoji Maharaj
          Nagpur University Nagpur (RTMNU) College name is listed in the list of
          affiliated colleges RTMNU, Nagpur at serial no. 32 which can be
          verified from the university’s website on the link{" "}
          <b>
            <a
              href="https://www.nagpuruniversity.ac.in/pdf/LIST_OF_AFFILIATED_COLLEGES_311019.pdf"
              target="_blank"
            >
              Click Here
            </a>
          </b>
        </Typography>
      </Box>
      <Box sx={{ padding: 1, display: "flex", flexDirection: "row", gap: 2 }}>
        <Box sx={{ padding: 1 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: colors.fontColor,
              fontSize: "1.1rem",
              marginBottom: 0.5,
            }}
          >
            UG Programs
          </Typography>
          <Box
            sx={{
              width: "10%",
              height: "2px",
              backgroundColor: colors.orangeColorLine,
              marginBottom: 1,
            }}
          />
          <TableContainer>
            <Table
              sx={{
                minWidth: 450,
                border: "1px solid black",
              }}
            >
              <TableHead
                sx={{
                  backgroundColor: colors.lightGradientPink,
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      color: colors.fontColor,
                      fontWeight: "bold",
                      border: "1px solid black",
                    }}
                  >
                    Sr.No.
                  </TableCell>
                  <TableCell
                    sx={{
                      color: colors.fontColor,
                      fontWeight: "bold",
                      border: "1px solid black",
                    }}
                  >
                    Programme Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: colors.fontColor,
                      fontWeight: "bold",
                      border: "1px solid black",
                    }}
                  >
                    Programme Duration
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ugPrograms.map((item) => (
                  <TableRow
                    sx={{
                      backgroundColor:
                        item.id % 2 === 0
                          ? colors.lightGradientPink
                          : colors.lighterPurpleAccordion,
                    }}
                    className="table-row"
                  >
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      {item.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      {item.program}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      {item.duration}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ padding: 1 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: colors.fontColor,
              fontSize: "1.1rem",
              marginBottom: 0.5,
            }}
          >
            PG Programs
          </Typography>
          <Box
            sx={{
              width: "10%",
              height: "2px",
              backgroundColor: colors.orangeColorLine,
              marginBottom: 1,
            }}
          />
          <TableContainer>
            <Table sx={{ minWidth: 450 }}>
              <TableHead
                sx={{
                  backgroundColor: colors.lightGradientPink,
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      color: colors.fontColor,
                      fontWeight: "bold",
                      border: "1px solid black",
                    }}
                  >
                    Sr.No.
                  </TableCell>
                  <TableCell
                    sx={{
                      color: colors.fontColor,
                      fontWeight: "bold",
                      border: "1px solid black",
                    }}
                  >
                    Programme Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: colors.fontColor,
                      fontWeight: "bold",
                      border: "1px solid black",
                    }}
                  >
                    Programme Duration
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pgPrograms.map((item) => (
                  <TableRow
                    sx={{
                      backgroundColor:
                        item.id % 2 === 0
                          ? colors.lightGradientPink
                          : colors.lighterPurpleAccordion,
                    }}
                    className="table-row"
                  >
                    <TableCell sx={{ border: "1px solid black" }}>
                      {item.id}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid black" }}>
                      {item.program}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid black" }}>
                      {item.duration}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Typography align="center" padding={4} fontSize={"1.1rem"}>
        In addition to above, the following departments of the college are
        recognized as a place for higher learning and research (Doctoral
        Programme) by the Rashtrasant Tukadoji Maharaj Nagpur University,
        Nagpur- 440001
      </Typography>
      <Box
        sx={{
          paddingTop: 1,
          paddingLeft: "5rem",
          paddingRight: "5rem",
          paddingBottom: 2,

          display: "flex",
        }}
      >
        <TableContainer>
          <Table
            sx={{
              width: "50%",
              margin: "auto",
              border: "1px solid black",
            }}
          >
            <TableHead
              sx={{
                backgroundColor: colors.lightGradientPink,
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    color: colors.fontColor,
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  Sr.No.
                </TableCell>
                <TableCell
                  sx={{
                    color: colors.fontColor,
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  Program Name
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {phdPrograms.map((item) => (
                <TableRow
                  sx={{
                    backgroundColor:
                      item.id % 2 === 0
                        ? colors.lightGradientPink
                        : colors.lighterPurpleAccordion,
                  }}
                  className="table-row"
                >
                  <TableCell sx={{ border: "1px solid black" }}>
                    {item.id}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    {item.program}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Academics;
