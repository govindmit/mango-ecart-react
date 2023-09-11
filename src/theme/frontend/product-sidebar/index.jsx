
import { Divider, TextField } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import './style.css'
import ProductDataCard from "../product-data";
import ProductSideBar from "./sideBar";
import { useState } from "react";
import ProductDetailsCard from "../product-data/product-details";
import PriceSlider from "./price-slider";
import { CheckBox } from "@mui/icons-material";



export default function ProductBanner() {
    const [isProductData, setIsProductData] = useState(true);
    const [isGreenChecked, setIsGreenChecked] = useState(false);
    const [isBlackChecked, setIsBlackChecked] = useState(false);
    const [isRedChecked, setIsRedChecked] = useState(false);
    const [isWhiteChecked, setIsWhiteChecked] = useState(false);
    const [isGreyChecked, setIsGreyChecked] = useState(false);
    const [isLightGreenChecked, setIsLightGreenChecked] = useState(false); 
    const [isWoodenIsChecked, setWoodenIsChecked] = useState(false);
    const [isBlueChecked, setIsBlueChecked] = useState(false);
    const [isYellowChecked, setIsYellowChecked] = useState(false);
    const [isSChecked, setIsSChecked] = useState(false);
    const [isMChecked, setIsMChecked] = useState(false);
    const [isLChecked, setIsLChecked] = useState(false);
    const [isXLChecked, setIsXLChecked] = useState(false);
   
   
    const handleProductShow = () => {
        setIsProductData(!isProductData);
    }



    const handleGreenCheckboxChange = () => {
        setIsGreenChecked(!isGreenChecked);
    }
    const handleBlackCheckboxChange = () => {
        setIsBlackChecked(!isBlackChecked);
    }
    const handleRedCheckboxChange = () => {
        setIsRedChecked(!isRedChecked);
    }
    const handleWhiteCheckboxChange = () => {
        setIsWhiteChecked(!isWhiteChecked);
    }
    const handleMetallicGreyCheckboxChange = () => {
        setIsGreyChecked(!isGreyChecked);
    }
    const handleLightGrrenCheckboxChange = () => {
        setIsLightGreenChecked(!isLightGreenChecked);
    }
    const handleWoodenCheckboxChange = () => {
        setWoodenIsChecked(!isWoodenIsChecked);
    }
    const handleBlueCheckboxChange = () => {
        setIsBlueChecked(!isBlueChecked);
    };

    const handleYellowCheckboxChange= () => {
        setIsYellowChecked(!isYellowChecked);
    };
    const handleSCheckboxChange= () => {
        setIsSChecked(!isSChecked);
    };
    const handleMCheckboxChange= () => {
        setIsMChecked(!isMChecked);
    };
    const handleLCheckboxChange= () => {
        setIsLChecked(!isLChecked);
    };
    const handleXLCheckboxChange= () => {
        setIsXLChecked(!isXLChecked);
    };
    

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
                    <ProductSideBar />
                </div>
                <div>
                    <PriceSlider />
                </div>
                <div className="side-bar-div-compo">
                    <h3>COLOR</h3>
                    <Divider />
                    <div>
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isYellowChecked}
                                onChange={handleYellowCheckboxChange}
                            /> Yellow
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isGreenChecked}
                                onChange={handleGreenCheckboxChange}
                            /> Green
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isBlackChecked}
                                onChange={handleBlackCheckboxChange}
                            /> Black
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isRedChecked}
                                onChange={handleRedCheckboxChange}
                            /> Red
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isWhiteChecked}
                                onChange={handleWhiteCheckboxChange}
                            /> White
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isGreyChecked}
                                onChange={handleMetallicGreyCheckboxChange}
                            /> Metallic grey
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isLightGreenChecked}
                                onChange={handleLightGrrenCheckboxChange}
                            /> Light Grren
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isWoodenIsChecked}
                                onChange={handleWoodenCheckboxChange}
                            /> Wooden
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isBlueChecked}
                                onChange={handleBlueCheckboxChange}
                            /> Blue
                        </label><p />
                    </div>
                </div>
                <div className="side-bar-div-compo">
                    <h3>SIZE</h3>
                    <Divider />
                    <div>
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isSChecked}
                                onChange={handleSCheckboxChange}
                            /> S
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isMChecked}
                                onChange={handleMCheckboxChange}
                            /> M
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isLChecked}
                                onChange={handleLCheckboxChange}
                            /> l
                        </label><p />
                        <label>
                            <input
                                className="checkbox-box"
                                type="checkbox"
                                checked={isXLChecked}
                                onChange={handleXLCheckboxChange}
                            /> Xl
                        </label><p />                                         
                    </div>
                </div>
                <div className="side-bar-div-compo">
                    <button>Reset</button>
                </div>
                <div className="side-bar-div-compo">
                    <img src="http://ecart.mangoitsol.com/assets/home_page/img/banner/5.jpg"/>
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

