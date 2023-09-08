import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import CategoryIcon from "@mui/icons-material/Category";
import EditAttributesOutlinedIcon from "@mui/icons-material/EditAttributesOutlined";
import AttributionOutlinedIcon from "@mui/icons-material/AttributionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import Header from "../header/index";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [currentComponent, setCurrentComponent] = useState("Dashboard");

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, fontSize: ".800rem" }}
            align="right"
            component="div"
          >
            <Header />
          </Typography>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"Dashboard"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/dashboard")}>
              <ListItemIcon>
                <PersonalVideoIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Category"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/category-list")}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Attribute"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/attribute-list")}>
              <ListItemIcon>
                <EditAttributesOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Attribute" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Attribute Family"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/attribute-family")}>
              <ListItemIcon>
                <AttributionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Attribute Family" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Product"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/products")}>
              <ListItemIcon>
                <Inventory2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Banners"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/banners")}>
              <ListItemIcon>
                <ViewCarouselOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Banners" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Orders"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/orders")}>
              <ListItemIcon>
                <StorefrontOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Invoices"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/invoices")}>
              <ListItemIcon>
                <ReceiptOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Invoices" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Shipmments"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/shipmments")}>
              <ListItemIcon>
                <LocalShippingOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Shipmments" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Refunds"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/refunds")}>
              <ListItemIcon>
                <AssignmentReturnOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Refunds" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key={"Static Pages"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/pages-list")}>
              <ListItemIcon>
                <AutoStoriesOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Static Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Configuration"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/configure")}>
              <ListItemIcon>
                <ToggleOffOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Configuration" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contact-Config"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/contactUs-configure")}>
              <ListItemIcon>
                <ContactEmergencyOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contact-Config" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key={"Manage Home Page"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/manage-home-page")}>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Email-Subscribs"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/email-subscribe-list")}>
              <ListItemIcon>
                <AlternateEmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Email-Subscribs" />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contact To Admins"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin/contact-to-admin")}>
              <ListItemIcon>
                <SupervisorAccountOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contact To Admins" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
