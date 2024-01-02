import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { MenuData } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {MenuData.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              {listItem.icon}
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
