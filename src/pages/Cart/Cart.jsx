import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { actionClearCart } from "../../store/actions";
import "./Cart.scss";
import Modal from "../../components/Modal/Modal";
import Forma from "../../components/Form/Forma";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const totalPrice = useSelector((state) => state.totalPrice);

  const [isForma, setForma] = useState(false);

  return (
    <div className="favorites">
      <div className="container-flex">
        <p className="favorites-title">CART</p>
        {cart.length > 0 && (
          <button
            onClick={() => dispatch(actionClearCart())}
            className="btn btn-wrap"
          >
            очистити корзину
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty">
          Кошик порожній, додайте що-небудь з меню
          <Link className="btn btn-wrap" to={"/"}>
            меню
          </Link>
        </div>
      ) : (
        <>
          <div className="container-flex">
            {cart.map((obj) => (
              <div className="wrapper" key={obj.id}>
                <CartItem
                  count={obj.count}
                  cart={cart}
                  isFavorite={favorites.some(({ id }) => obj.id === id)}
                  isCart={cart.some(({ id }) => obj.id === id)}
                  name={obj.name}
                  price={obj.price}
                  imgUrl={obj.imgUrl}
                  id={obj.id}
                  color={obj.color}
                />
              </div>
            ))}
            <div className="container-cart">
              <span className="total-price">total price: {totalPrice}$</span>
              <button className="btn " onClick={() => setForma(!isForma)}>
                buy all
              </button>
            </div>

            {isForma && (
              <>
                <div
                  className="modal-container"
                  onClick={() => setForma(!isForma)}
                >
                  <div onClick={(e) => e.stopPropagation()} className="modal">
                    <Forma setForma={setForma} />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
