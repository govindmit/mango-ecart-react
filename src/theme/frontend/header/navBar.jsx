import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getCategory } from "../../../apis/users/home";
import NavItem from "./navItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getquantity } from "../../../apis/users/home";

const NavBar = () => {
  const [navBarData, setNavBarData] = useState();
  const [itemId, setItemId] = useState(null);
  const navData = [];
  const [quantity, setQuantity] = useState(0);
  const user_token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user");

  //create a new array  where to get name id amd parenID
  navBarData?.forEach((product) => {
    const categoryId = product.id; // Get id from navBarData

    const category = Object.values(navBarData).find((product) => {
      return (
        product.categoryTranslations &&
        product.categoryTranslations.some(
          (translation) => translation.categoryId === categoryId
        )
      );
    });
    const parentId = product.parentId !== null ? product.parentId : null;

    if (category) {
      navData.push({
        id: product.id,
        name:
          category && category.categoryTranslations
            ? category.categoryTranslations[0].name
            : null,
        parentId: parentId,
      });
    }
  });

  //using recursive fun create parentChild Combination
  function createHierarchy(items, parentId = null) {
    const result = [];

    for (const item of items) {
      if (item.parentId === parentId) {
        const children = createHierarchy(items, item.id);
        if (children.length) {
          item.children = children;
        }
        result.push(item);
      }
    }

    return result;
  }

  // Call the function with your data
  const hierarchy = createHierarchy(navData, null);

  // Now, 'hierarchy' contains the parent-child combination array
  console.log(hierarchy, "hierarchy");

  useEffect(() => {
    if (user_id  && user_token) {
      getquantity()
        .then((data) => {
          if (data?.data?.isError) {
            setQuantity(0);
          } else {
                setQuantity(data?.data?.result?.data?.itemsQty);
          }
        })
        .catch((e) => {
          toast.error("Something went wrong, Api not working");
        });
    } else {
      setQuantity(0);
    }
    getCategory()
      .then((res) => {
        let data = res.data;
        // console.log(data.result.data.rows);
        if (data.isError) {
          toast.error(data.message);
        } else {
          setNavBarData(
            data?.result?.data?.rows.filter((product) => product.status === 1)
          );
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <div className="navContainer">
      <div>
        <img src="http://ecart.mangoitsol.com/assets/home_page/img/home/ecart-logo.png" />
      </div>
      <div className="navContainer-2">
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/product"}>
          <h4>Products</h4>
        </Link>

        <NavItem categories={navData} />

        <Link to="/about-us">
          <h4>About US</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <span>{quantity}</span>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default NavBar;