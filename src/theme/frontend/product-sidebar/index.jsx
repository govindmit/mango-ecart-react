
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
    const [selectedPrice, setSelectedPrice] = useState('');
    const [isProductData, setIsProductData] = useState(true);
    const [productItems, setProductItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

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

    // data store in parent child combination 
    const hierarchicalData = buildHierarchy(uniqueMyParentChildArray);



    //function for selected Color
    const handleCheckboxClick = (id) => {
        const selectedColorArray = selectedItem.split(',').filter((item) => item !== '');

        if (selectedColorArray.includes(id)) {
            const updatedSizeArray = selectedColorArray.filter((item) => item !== id);
            setSelectedItem(updatedSizeArray.join(','));
        }
        else {
            const updatedSizeArray = [...selectedColorArray, id];
            setSelectedItem(updatedSizeArray.join(','));
        }
    };


    //function for Price Side bar
    const handlePriceChange = (formattedPrice) => {
        setSelectedPrice(formattedPrice)
        console.log('Selected Price:', formattedPrice);
    };

    //search value
    const handleSearchChange = (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue);
    };

    //function for Size check
    const handleSizeCheckboxClick = (id) => {
        const selectedSizeArray = selectedSize.split(',').filter((item) => item !== '');

        if (selectedSizeArray.includes(id)) {
            const updatedSizeArray = selectedSizeArray.filter((item) => item !== id);
            setSelectedSize(updatedSizeArray.join(','));
        } else {
            const updatedSizeArray = [...selectedSizeArray, id];
            setSelectedSize(updatedSizeArray.join(','));
        }
    };

    //function for product show in chich fromate
    const handleProductShow = () => {
        setIsProductData(!isProductData);
    }

    //function for refresh the value
    const reloadPage = () => {
        window.location.reload();
    };

    useEffect(() => {

        getAllProduct(myfilterData)
            .then((res) => {
                let data = res.data;
                // console.log(data,"ss");
                if (data.isError) {
                    toast.error(data.message);
                } else {
                    // console.log(data?.result?.data?.rows,"dsdfs");
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

    useEffect(() => {
        getAllProduct(myfilterData)
            .then((res) => {
                let data = res.data;

                if (data.isError) {
                    toast.error(data.message);
                } else {
                    setProductItems(data?.result?.data?.rows);
                }
            })
            .catch((e) => {
                console.log("error", e);
            });


    }, [myfilterData])


    useEffect(() => {
        const filters = {};

        // Add values to the object if they exist
        if (selectedCategory) {
            filters.catId = selectedCategory;
        }

        if (selectedItem) {
            const sanitizedSelectedItem = selectedItem.replace(/#/g, '%');
            filters.color = sanitizedSelectedItem;
        }

        if (selectedSize) {
            filters.size = selectedSize;
        }

        // if (selectedPrice!="0,1000") {
        //     filters.price = selectedPrice
        // }
        if (searchValue) {
            filters.search = searchValue;
        }

        // Create the filterString by converting the filters object to a query string
        const filterString = `?page=${page}&pageSize=${pageSize}&filter=true${Object.keys(filters).map(key => `&${key}=${filters[key]}`).join('')}`;

        // Update the filterData state with the new filterString
        setMyfilterData(filterString);
    }, [selectedCategory, selectedItem, selectedSize, selectedPrice,searchValue, page, pageSize]);


    return (
        <div className="myDivxyz">

            <div className="sideBarDiv">
                <div className="search-basic">
                    <TextField
                        label="Search"
                        variant="standard"
                        size="medium"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    <ProductSideBar
                        data={hierarchicalData}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
                <div>
                    <PriceSlider
                        onPriceChange={handlePriceChange}
                    />
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
                        <ProductDataCard
                            productData={productItems}
                            page={page}
                            setPage={setPage}
                            pageSize={pageSize}
                            setpageSize={setpageSize}
                        />
                    ) : (
                        <ProductDetailsCard
                            productData={productItems}
                            page={page}
                            setPage={setPage}
                            pageSize={pageSize}
                            setpageSize={setpageSize}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

