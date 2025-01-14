import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((x) => x)
    .map((crumb) => {
      currentLink = +`${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
export default Breadcrumbs;
