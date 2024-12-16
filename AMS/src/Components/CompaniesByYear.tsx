import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { colors } from "../Utils/Colors";
import { companiesByYear } from "../Utils/Data/CompaniesData";

const ComapniesByYear = () => {
  return (
    <>
      {companiesByYear.map((item) => (
        <>
          <Box
            sx={{
              backgroundColor: colors.bgGradientPurple,
              color: "whitesmoke",
              display: "inline-block",
              padding: 0.5,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: 1,
              marginTop: item.id !== 1 ? 1 : "",
            }}
          >
            {item.year} Batch
          </Box>
          <TableContainer sx={{ width: "99%" }}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    bgcolor: colors.bgGradientPurple,
                  }}
                >
                  <TableCell sx={{ border: "1px solid black", color: "white" }}>
                    Sr.No
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black", color: "white" }}>
                    Company Name
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black", color: "white" }}>
                    Package (LPA)
                  </TableCell>
                  {item.id !== 1 && (
                    <TableCell
                      sx={{ border: "1px solid black", color: "white" }}
                    >
                      Offers
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>
              {item.companiesVisited.map((company) => (
                <TableBody
                  sx={{
                    bgcolor:
                      company.id % 2 !== 0
                        ? colors.lightGradientPink
                        : colors.lighterPurpleAccordion,
                  }}
                >
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      {company.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      {company.company}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      {company.package}
                    </TableCell>
                    {item.id !== 1 && (
                      <TableCell
                        sx={{
                          border: "1px solid black",
                        }}
                      >
                        {"offers" in company ? company.offers : "NA"}
                      </TableCell>
                    )}
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </>
      ))}
    </>
  );
};

export default ComapniesByYear;
