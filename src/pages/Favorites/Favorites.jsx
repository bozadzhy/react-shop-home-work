import React from "react";

import ProductItem from "../../components/ProductItem/ProductItem";
import "./Favorites.scss";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="favorites">
      <p className="favorites-title">
        FAVORITES
      </p>
      {favorites.length === 0 ? (
        <>
          <div className="empty">
            Обрані порожні, додайте що-небудь з меню
            <Link className="btn btn-wrap" to={"/"}>
              меню
            </Link>
          </div>
        </>
      ) : (
        <div className="container-list">
          {favorites.map((obj) => (
            <div className="wrapper" key={obj.id}>
              <ProductItem
                favorites={favorites}
                isFavorite={favorites.some(({ id }) => obj.id === id)}
                isCart={cart.some(({ id }) => obj.id === id)}
                name={obj.name}
                price={obj.price}
                imgUrl={obj.imgUrl}
                id={obj.id}
                color={obj.color}
                isStarIcon={true}
                isBtnModal={false}
                // не должні передовать кнопку?
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Favorites;
