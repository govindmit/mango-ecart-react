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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";

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

export default function SideBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [currentComponent, setCurrentComponent] = useState("Dashboard");
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [mensWearOpen, setMensWearOpen] = useState(false);
    const [womensWearOpen, setWomensWearOpen] = useState(false);
    const [mensFootwearOpen, setMensFootwearOpen] = useState(false);
    const [womensFootWearOpen, setWomensFootWearOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCategoriesClick = () => {
        setCategoriesOpen(!categoriesOpen);
    };

    const handleMensWearClick = () => {
        setMensWearOpen(!mensWearOpen);
    };

    const handleWomensWearClick = () => {
        setWomensWearOpen(!womensWearOpen);
    };

    const handleMensFootwearClick = () => {
        setMensFootwearOpen(!mensFootwearOpen);
    };
    const handleWomensFootWearClick = () => {
        setWomensFootWearOpen(!womensFootWearOpen);
    };

    return (
        <Box sx={{ display: "flex" }}>
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
                    <ListItem key={"Categories"} disablePadding>
                        <ListItemButton onClick={handleCategoriesClick}>
                            <ListItemText primary="Apparels" />
                            {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    {categoriesOpen && (
                        <List sx={{ pl: 3 }}>
                            <ListItem key={"MensWear"} disablePadding>
                                <ListItemButton onClick={handleMensWearClick}>
                                    <ListItemText primary=" Men's wear" />
                                    {mensWearOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            {mensWearOpen && (
                                <List sx={{ pl: 3 }}>
                                    <ListItem key={"MensBottoms"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary=" Men's bottoms" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={"MensShirts"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Men's Shirts" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={"MensAccessories"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Men's accessories" />
                                        </ListItemButton>
                                    </ListItem>
                                    {/* Add more subcategories here */}
                                </List>
                            )}

                            {/* Add more top-level categories here */}


                            <ListItem key={"MensFootwear"} disablePadding>
                                <ListItemButton onClick={handleMensFootwearClick}>
                                    <ListItemText primary=" Men's footwear" />
                                    {mensFootwearOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            {mensFootwearOpen && (
                                <List sx={{ pl: 3 }}>
                                    <ListItem key={"Shoes"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary=" Shoes" />
                                        </ListItemButton>
                                    </ListItem>
                                    {/* Add more subcategories for Men's footwear */}
                                </List>
                            )}
                            <ListItem key={"WomensWear"} disablePadding>
                                <ListItemButton onClick={handleWomensWearClick}>
                                    <ListItemText primary=" Women's wear" />
                                    {womensWearOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            {womensWearOpen && (
                                <List sx={{ pl: 3 }}>
                                    <ListItem key={"WomensBottoms"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary=" Women's bottoms" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={"WomensShirts"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Women's Shirts" />
                                        </ListItemButton>
                                    </ListItem>
                                    {/* Add more subcategories for Women's wear */}
                                </List>
                            )}

                            <ListItem key={"WomensFootWear"} disablePadding>
                                <ListItemButton onClick={handleWomensFootWearClick}>
                                    <ListItemText primary=" Women's foot wear" />
                                    {womensFootWearOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            {womensFootWearOpen && (
                                <List sx={{ pl: 3 }}>
                                    <ListItem key={"Heels"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Heels" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={"Flats"} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Flats" />
                                        </ListItemButton>
                                    </ListItem>
                                    {/* Add more subcategories for Women's wear */}
                                </List>
                            )}
                        </List>
                    )}

                    <ListItem key={"Categories"} disablePadding>
                        <ListItemButton onClick={handleCategoriesClick}>
                            <ListItemText primary="" />
                            {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>

                </List>
                <Divider />
                {/* Add more lists for other sections */}
            </Drawer>
        </Box>
    );
}
