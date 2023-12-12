import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import StarIcon from "../StarIcon/StarIcon";

import { useDispatch, useSelector } from "react-redux";
import {
  actionHandelModal,
  actionMinusFromCart,
  actionDeleteItem,
  actionAddToCart,
} from "../../store/actions";

function CartItem({
  imgUrl,
  name,
  price,
  id,
  color,
  isCart,
  isFavorite,
  count,
}) {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal(!isModal);
    dispatch(actionHandelModal());
    // тут должна біть 3тя функція на добавление или удаление
  };
  

  return (
    <div className="container-flex-row">
      <img className="img" src={imgUrl} alt="img" />
      <div className="item-wrap">
        <h3 className="title">{name.toUpperCase()}</h3>
        <p className="color">{color.toUpperCase()}</p>
        <p className="price">{price}$ </p>
      </div>
      <div className="btn-wrapp">
        <button
          className="btn"
          onClick={() => dispatch(actionAddToCart({ id, name, price, color, imgUrl}))}
        >
          +
        </button>
        <span className="count">{count}</span>
        <button disabled={count === 1 && true}
          className="btn"
          onClick={() => dispatch(actionMinusFromCart({  id, name, price, color, imgUrl }))}
        >
          -
        </button>
      </div>
      <StarIcon
        isFavorite={isFavorite}
        imgUrl={imgUrl}
        color={color}
        id={id}
        name={name}
        price={price}
      />
      <button onClick={()=> dispatch(actionDeleteItem({ id }))}>x</button>
    </div>
  );
}

CartItem.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  color: PropTypes.string,
  count: PropTypes.number,
};

export default CartItem;
