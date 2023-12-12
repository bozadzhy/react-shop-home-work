import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="empty">
      Така сторінка не знайдена, повернутись до головноі сторінки?
      <Link className="btn btn-wrap" to={"/"}>
        Клікни сюди
      </Link>
    </div>
  );
}
export default NotFound;
