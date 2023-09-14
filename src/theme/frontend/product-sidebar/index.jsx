
import { Checkbox, Divider, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import './style.css'
import ProductDataCard from "../product-data";
import ProductSideBar from "./sideBar";
import { useEffect, useState } from "react";
import ProductDetailsCard from "../product-data/product-details";
import PriceSlider from "./price-slider";
import { getAllProduct, getColor, getSize } from '../../../apis/users/home';
import { toast } from "react-toastify";

export default function ProductBanner() {

    const [page, setPage] = useState(1);
    const [pageSize, setpageSize] = useState(10);
    const [myfilterData, setMyfilterData] = useState(null)
    const [productData, setProductData] = useState([])
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const [isProductData, setIsProductData] = useState(true);

console.log(selectedItem,"color");
console.log(selectedSize,"selectedSize");
console.log(selectedCategory,"selectedCategory");


    const myParentChildArray = [];

    productData.forEach((product) => {
        const categoryId = product.id; // Get id from productData

        const category = Object.values(productData).find((product) => {
            return product.categoryTranslations && product.categoryTranslations.some((translation) => translation.categoryId === categoryId);
        });
        const parentId = product.parentId !== null ? product.parentId : null;

        if (category) {
            myParentChildArray.push({
                id: product.id,
                name: category && category.categoryTranslations
                    ? category.categoryTranslations[0].name
                    : null,
                parentId: parentId,
            });
        }
    });
    // Assuming myParentChildArray contains the data as mentioned

    const uniqueMyParentChildArray = myParentChildArray.filter((item, index, self) => {
        return (
            index ===
            self.findIndex((t) => t.id === item.id)
        );
    });


    function buildHierarchy(items, parentId = null) {
        const result = [];

        for (const item of items) {
            if (item.parentId === parentId) {
                const children = buildHierarchy(items, item.id);
                if (children.length) {
                    item.children = children;
                }
                result.push(item);
            }
        }

        return result;
    }

    // Assuming myParentChildArray contains the data as mentioned
    const hierarchicalData = buildHierarchy(uniqueMyParentChildArray);


    const handleCheckboxClick = (id) => {
        const selectedColorArray = selectedItem.split(',').filter((item) => item !== '');
    
        if (selectedColorArray.includes(id)) {
          // Remove the size from the array
          const updatedSizeArray = selectedColorArray.filter((item) => item !== id);
          // Join the array back into a comma-separated string, or an empty string if there are no sizes left
          setSelectedItem(updatedSizeArray.join(','));
        } else {
          // Add the size to the array
          const updatedSizeArray = [...selectedColorArray, id];
          // Join the array back into a comma-separated string
          setSelectedItem(updatedSizeArray.join(','));
        }
    };
  


    const handleSizeCheckboxClick = (id) => {
        // Split the selectedSize string into an array
        const selectedSizeArray = selectedSize.split(',').filter((item) => item !== '');
    
        if (selectedSizeArray.includes(id)) {
          // Remove the size from the array
          const updatedSizeArray = selectedSizeArray.filter((item) => item !== id);
          // Join the array back into a comma-separated string, or an empty string if there are no sizes left
          setSelectedSize(updatedSizeArray.join(','));
        } else {
          // Add the size to the array
          const updatedSizeArray = [...selectedSizeArray, id];
          // Join the array back into a comma-separated string
          setSelectedSize(updatedSizeArray.join(','));
        }
      };
    

    const handleProductShow = () => {
        setIsProductData(!isProductData);
    }

    const reloadPage = () => {
        window.location.reload();
    };

    useEffect(() => {
        getAllProduct(`page=${page}&pageSize=${pageSize}&filter=true&${myfilterData}`)
            .then((res) => {
                let data = res.data;

                if (data.isError) {
                    toast.error(data.message);
                } else {

                    setProductData(data?.result?.data?.rows
                        .map((item) => item.categories).flat()
                    );
                }
            })
            .catch((e) => {
                console.log("error", e);
            });

        getColor()
            .then((res) => {

                let data = res.data;

                if (data.isError) {

                    toast.error(data.message);
                } else {

                    setColor(data?.result?.colors);
                }
            })
            .catch((e) => {
                console.log("error", e);
            })

        getSize()
            .then((res) => {

                let data = res.data;

                if (data.isError) {

                    toast.error(data.message);
                } else {
                 
                    setSize(data?.result?.size);
                }
            })
            .catch((e) => {
                console.log("error", e);
            })
    }, [])

    return (
        <div className="myDivxyz">

            <div className="sideBarDiv">
                <div className="search-basic">
                    <TextField
                        label="Search"
                        variant="standard"
                        size="medium"
                    />
                </div>
                <div>
                    <ProductSideBar data={hierarchicalData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </div>
                <div>
                    <PriceSlider />
                </div>
                <div className="side-bar-div-compo">
                    <h3>COLOR</h3>
                    <Divider />
                    <List>
                        {color.map((color) => (
                            <ListItem key={color.id} disablePadding>
                                <ListItemButton>
                                    <Checkbox
                                        edge="start"
                                
                                        checked={selectedItem.split(',').includes(color.optionValue)}
                                        tabIndex={-1}
                                        disableRipple
                                        disablePadding
                                        onClick={() => handleCheckboxClick(color.optionValue)}
                                    />
                                    <ListItemText primary={color.adminName} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="side-bar-div-compo">
                    <h3>SIZE</h3>
                    <Divider />
                    <List>
                        {size.map((sizeOption) => (
                            <ListItem key={sizeOption.id} disablePadding>
                                <ListItemButton>
                                    <Checkbox
                                        edge="start"
                                        checked={selectedSize.split(',').includes(sizeOption.optionValue)}
                                        tabIndex={-1}
                                        disableRipple
                                        disablePadding
                                        onClick={() => handleSizeCheckboxClick(sizeOption.optionValue)}
                                    />
                                    <ListItemText primary={sizeOption.adminName} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="side-bar-div-compo">
                    <button onClick={() => reloadPage()}>Reset</button>
                </div>
                <div className="side-bar-div-compo">
                    <img src="http://ecart.mangoitsol.com/assets/home_page/img/banner/5.jpg" />
                </div>
            </div>

            <div>
                <div className="icon-container">
                    <CalendarViewMonthIcon
                        onClick={() => handleProductShow()}
                    />
                    <ListIcon
                        onClick={() => handleProductShow()}
                    />
                </div>
                <div>
                    {isProductData ? (
                        <ProductDataCard />
                    ) : (
                        <ProductDetailsCard />
                    )}

                </div>
            </div>
        </div>
    );
}

