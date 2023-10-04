import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Paper,
  Divider,
} from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function information({ orderData }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log("da", orderData);
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> Order and Account </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Paper elevation={3} style={{ flex: "1" }}>
              <Box p={2}>
                <Typography variant="h5">Order Information</Typography>
                <Typography>
                  Order Date :- Aug 7, 2023, 2:56:49 PM <br />
                  Order Status :- complete
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={3} style={{ flex: "1" }}>
              <Box p={2}>
                <Typography variant="h5">Account Information</Typography>
                <Typography>
                  Customer Name :- Keely Cooke Email :-cipizohad@mailinator.com
                </Typography>
              </Box>
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Paper elevation={3} style={{ flex: "1" }}>
              <Box p={2}>
                <Typography variant="h5">Billing Address</Typography>
                <Typography>
                  Name :- Kim <br />
                  Address :- 74 Old Parkway <br />
                  Post Code :- <br />
                  City :- Minima reprehenderit <br />
                  State :- 538 <br />
                  Country :- 106 <br />
                  Contact :- 7474747474 <br />
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={3} style={{ flex: "1" }}>
              <Box p={2}>
                <Typography variant="h5">Shipping Address</Typography>
                <Typography>
                  Name :- Kim <br />
                  Address :- 74 Old Parkway <br />
                  Post Code :- <br />
                  City :- Minima reprehenderit <br />
                  State :- 538 <br />
                  Country :- 106 <br />
                  Contact :- 7474747474 <br />
                </Typography>
              </Box>
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> Payment and Shipping </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Paper elevation={3} style={{ flex: "1" }}>
              <Box p={2}>
                <Typography variant="h5">Payment Information</Typography>
                <Typography>
                  Payment Method :- stripe <br />
                  Currency :- USD
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={3} style={{ flex: "1" }}>
              <Box p={2}>
                <Typography variant="h5">Shipping Information</Typography>
                <Typography>
                  Shipping Method :- flatrate <br />
                  Shipping Price :- $ 78
                </Typography>
              </Box>
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography> Products Ordered </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SKU</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Subtotal</TableCell>
                  <TableCell>Grand Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>toysku</TableCell>
                  <TableCell>Toy gun</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>$78.00</TableCell>
                  <TableCell>$78.00</TableCell>
                  <TableCell>
                    Subtotal - <br />
                    Shipping & Handling - $78.00
                    <Divider />
                    Grand Total - $78.00 <br />
                    Total Paid - $78.00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default information