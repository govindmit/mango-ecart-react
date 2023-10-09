import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const NavItem = ({ categories }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [navItems, setNavItems] = useState(null);
  const handleCategoryHover = (categoryId) => {
    setOpenCategory(categoryId);
  };

  const renderCategories = (categories, parentId) => {
    const modalData = categories.filter((item) => item.parentId === parentId);

    if (modalData.length > 0) {
      return (
        <ul>
          {modalData.map((category) => (
            <li
              key={category.id}
              onMouseOver={() => handleCategoryHover(category.id)}
              onMouseOut={() => handleCategoryHover(null)}
            >
              <span>
                {category.name}
                {categories.find((item) => item.parentId === category.id) && (
                  <ArrowRightIcon />
                )}
              </span>
              {openCategory === category.id && (
                <div className="childModal">
                  {renderCategories(categories, category.id)}
                </div>
              )}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="navData">
        {categories?.map((item) => {
          const name = item.parentId === null && item.name;
          if (name) {
            return (
              <div
                onClick={() => setNavItems(item.id)}
                className="navData-container"
              >
                <h4>{name}</h4>
              </div>
            );
          }
        })}
      </div>
      <div className="navItem">
        {navItems && renderCategories(categories, navItems)}
      </div>
    </div>
  );
};

export default NavItem;
