

import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import './style.css';

const ProductSideBar = (props) => {
    const data = props.data;
    const selectedCategory = props.selectedCategory;
    const setSelectedCategory = props.setSelectedCategory;
    const [openItems, setOpenItems] = useState([]);

    const handleClick = (id) => {
        if (openItems.includes(id)) {
            setOpenItems(openItems.filter(item => item !== id));
        } else {
            setOpenItems([...openItems, id]);
        }
    };

    const handleCheckboxClick = (id) => {
        console.log("Clicked checkbox with ID:", id);
        console.log("Selected Category before:", selectedCategory);
        const selectedCategoryArray = selectedCategory.split(',').filter((item) => item !== '');

        if (selectedCategoryArray.includes(id)) {

            const updatedCategoryArray = selectedCategoryArray.filter((item) => item !== id);

            setSelectedCategory(updatedCategoryArray.join(','));
        } else {

            const updatedCategoryArray = [...selectedCategoryArray, id];

            setSelectedCategory(updatedCategoryArray.join(','));
        }

        console.log("Selected Category after:", selectedCategory);
    };

    const renderListItems = (items) => {
        return (
            <List>
                {items.map((item) => (
                    <div key={item.id}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleClick(item.id)}>
                                <Checkbox
                                    edge="start"
                                    checked={selectedCategory.split(',').includes(item.id)}

                                    tabIndex={-1}
                                    disableRipple
                                    disablePadding
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxClick(item.id);
                                    }}
                                />
                                <ListItemText primary={item.name} />
                                {item.children && item.children.length > 0 ? (
                                    openItems.includes(item.id) ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )
                                ) : null}
                            </ListItemButton>
                        </ListItem>
                        {openItems.includes(item.id) && item.children && item.children.length > 0 && (
                            <div style={{ paddingLeft: 16 }}>
                                {renderListItems(item.children)}
                            </div>
                        )}
                    </div>
                ))}
            </List>
        );
    };

    return (
        <div className="sideBar">
            <h3>CATEGORIES</h3>
            {renderListItems(data)}
        </div>
    );
};

export default ProductSideBar;
