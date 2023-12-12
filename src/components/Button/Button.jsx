import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { actionAddToCart, actionDeleteItem } from "../../store/actions";
import "./button.scss";

function Button({ text, id, name, price, color, imgUrl, handleModal, isCart }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (isCart) {
      dispatch(
        actionDeleteItem({
          id,
          name,
          price,
          color,
          imgUrl,
        })
      );
      handleModal();
    } else {
      dispatch(
        actionAddToCart({
          id,
          name,
          price,
          color,
          imgUrl,
        })
      );
      handleModal();
    }
  };

  return (
    <button className="btn btn-open" onClick={handleAddToCart}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
