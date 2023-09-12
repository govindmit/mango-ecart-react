import React, { useState } from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Checkbox, TextField } from "@mui/material";
import './style.css'

const ProductSideBar = () => {
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [mensWearOpen, setMensWearOpen] = useState(false);
    const [womensWearOpen, setWomensWearOpen] = useState(false);
    const [mensFootwearOpen, setMensFootwearOpen] = useState(false);
    const [womensFootWearOpen, setWomensFootWearOpen] = useState(false)
    const [decorationOpen, setDecorationOpen] = useState(false);
    const [furniterOpen, setFurnitureOpen] = useState(false);
    const [livingRoomOpen, setLivingRoomOpen] = useState(false);
    const [kitchenOpen, setKitchenOpen] = useState(false);
    const [bedroomOpen, setBedroomOpen] = useState(false);
    const [appliancesopen, setAppliancesOpen] = useState(false);
    const [homeAppliancesOpen, setHomeAppliancesOpen] = useState(false);
    const [kitchenAppliancesOpen, setKitchenAppliancesOpen] = useState(false);
    const [mobileAccessoriesOpen, setMobileAccessoriesOpen] = useState(false)


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

    const handleHomeDecorationClick = () => {
        setDecorationOpen(!decorationOpen);
    };
    const handleFurnitureClick = () => {
        setFurnitureOpen(!furniterOpen);
    };
    const handleLivingClick = () => {
        setLivingRoomOpen(!livingRoomOpen);
    };
    const handleKitchenClick = () => {
        setKitchenOpen(!kitchenOpen);
    };
    const handleBedRoomclick = () => {
        setBedroomOpen(!bedroomOpen);
    };

    const handleAppliancesClick = () => {
        setAppliancesOpen(!appliancesopen);
    };
    const handleHomeAppliancesClick = () => {
        setHomeAppliancesOpen(!homeAppliancesOpen);
    };
    const handleKitchenAppliancesClick = () => {
        setKitchenAppliancesOpen(!kitchenAppliancesOpen);
    };
    const handleMobileAccessoriesClick = () => {
        setMobileAccessoriesOpen(!mobileAccessoriesOpen);
    };
    return (
        <div className="sideBar"
        >

            <Divider />
            <h3>CATEGORIES</h3>
            <List>

                <ListItem key={"Categories"} disablePadding>
                    <ListItemButton onClick={handleCategoriesClick}>
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Apparels" />
                        {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                {categoriesOpen && (
                    <List sx={{ pl: 3 }}>
                        <ListItem key={"MensWear"} disablePadding>
                            <ListItemButton onClick={handleMensWearClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary=" Men's wear" />
                                {mensWearOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {mensWearOpen && (
                            <List sx={{ pl: 3 }}>
                                <ListItem key={"MensBottoms"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary=" Men's bottoms" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key={"MensShirts"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Men's Shirts" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key={"MensAccessories"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Men's accessories" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}


                        <ListItem key={"MensFootwear"} disablePadding>
                            <ListItemButton onClick={handleMensFootwearClick}>

                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary=" Men's footwear" />
                                {mensFootwearOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {mensFootwearOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"Shoes"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary=" Shoes" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}

                        <ListItem key={"WomensWear"} disablePadding>
                            <ListItemButton onClick={handleWomensWearClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary=" Women's wear" />
                                {womensWearOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {womensWearOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"WomensBottoms"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary=" Women's bottoms" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key={"WomensShirts"} disablePadding>
                                    <ListItemButton>

                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Women's Shirts" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}

                        <ListItem key={"WomensFootWear"} disablePadding>
                            <ListItemButton onClick={handleWomensFootWearClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary=" Women's foot wear" />
                                {womensFootWearOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {womensFootWearOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"Heels"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Heels" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key={"Flats"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Flats" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}
                    </List>
                )}


                <ListItem key={"homeDecoration"} disablePadding>

                    <ListItemButton onClick={handleHomeDecorationClick}>
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Home Decoration" />
                        {decorationOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                {decorationOpen && (
                    <List sx={{ pl: 3 }}>

                        <ListItem key={"Monitors"} disablePadding>
                            <ListItemButton>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Monitors" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                )}



                <ListItem key={"Furniture"} disablePadding>
                    <ListItemButton onClick={handleFurnitureClick}>
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding

                        />
                        <ListItemText primary="Furniture" />
                        {furniterOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                </ListItem>
                {furniterOpen && (
                    <List sx={{ pl: 3 }}>

                        <ListItem key={"LivingRoom"} disablePadding>
                            <ListItemButton onClick={handleLivingClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Living Room" />
                                {livingRoomOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {livingRoomOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"ShoeCabinet"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Shoe cabinet" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key={"Sofas"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary=" Sofas" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}


                        <ListItem key={"KitcenDining"} disablePadding>
                            <ListItemButton onClick={handleKitchenClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Kitchen and Dining" />
                                {kitchenOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {kitchenOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"DiningTable"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Dining Table" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        )}

                        <ListItem key={"BedRoom"} disablePadding>
                            <ListItemButton onClick={handleBedRoomclick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Bedroom" />
                                {bedroomOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {bedroomOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"Bed"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Bed" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key={"Chair"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Chair" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}

                    </List>
                )}



                <ListItem key={"Appliances"} disablePadding>

                    <ListItemButton onClick={handleAppliancesClick}>
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Appliances" />
                        {appliancesopen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                {appliancesopen && (
                    <List sx={{ pl: 3 }}>

                        <ListItem key={"HomeAppliances"} disablePadding>
                            <ListItemButton onClick={handleHomeAppliancesClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Home Appliances" />
                                {homeAppliancesOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {homeAppliancesOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"Telivision"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Telivision" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key={"Ac"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary=" AC" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )}

                        <ListItem key={"KitchenAppliances"} disablePadding>
                            <ListItemButton onClick={handleKitchenAppliancesClick}>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Kitchen appliances" />
                                {kitchenAppliancesOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        {kitchenAppliancesOpen && (
                            <List sx={{ pl: 3 }}>

                                <ListItem key={"Handblender"} disablePadding>
                                    <ListItemButton>
                                        <Checkbox
                                            edge="start"
                                            // checked={categoriesOpen}
                                            tabIndex={-1}
                                            disableRipple
                                            disablePadding
                                        />
                                        <ListItemText primary="Hand blender" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        )}

                    </List>
                )}

                <ListItem key={"Car Accessories"} >

                    <ListItemButton >
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Car Accessories" />
                    </ListItemButton>
                </ListItem>

                <ListItem key={"Toys "} >

                    <ListItemButton >
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Toys " />
                    </ListItemButton>
                </ListItem>

                <ListItem key={"MobileAccessories"} disablePadding>

                    <ListItemButton onClick={handleMobileAccessoriesClick}>
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Mobile Accessories" />
                        {mobileAccessoriesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                {mobileAccessoriesOpen && (
                    <List sx={{ pl: 3 }}>

                        <ListItem key={"Charger"} disablePadding>
                            <ListItemButton>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Charger" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={"BackCover"} disablePadding>
                            <ListItemButton>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Back Cover" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={"EarBuds"} disablePadding>
                            <ListItemButton>
                                <Checkbox
                                    edge="start"
                                    // checked={categoriesOpen}
                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                />
                                <ListItemText primary="Ear Buds" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                )}

                <ListItem key={"Virtual Products"} >

                    <ListItemButton >
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="Virtual Products" />
                    </ListItemButton>
                </ListItem>

                <ListItem key={"testing"} >

                    <ListItemButton >
                        <Checkbox
                            edge="start"
                            // checked={categoriesOpen}
                            tabIndex={-1}
                            disableRipple
                            disablePadding
                        />
                        <ListItemText primary="testing" />
                    </ListItemButton>
                </ListItem>


            </List>
            <Divider />

        </div>
    )
}
export default ProductSideBar;