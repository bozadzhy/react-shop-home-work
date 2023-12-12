import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import StarIcon from "../StarIcon/StarIcon";

import { useDispatch } from "react-redux";
import { actionHandelModal } from "../../store/actions";

import "./ProductItem.scss";

function ProductItem({ imgUrl, name, price, id, color, isCart, isFavorite }) {
  //classNames- стили для переключения тем изображения товаров

  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal(!isModal);
    dispatch(actionHandelModal());
  };

  const modalText = !isCart
    ? "Ви точно хочете додати цей товар в кошик?"
    : "Видалити товар з кошика?";
  const modalBtnText = !isCart ? "Add" : "Delete";


  return (
    <div className="container-item">
      <img className="img" src={imgUrl} alt="img" />
      <div className="item-wrap">
        <h3 className="title">{name.toUpperCase()}</h3>
        <p className="price">{price}$ </p>
        <p className="color">{color.toUpperCase()}</p>
        <p className="id">#{id} </p>

        <button className="btn" onClick={handleModal}>
          {modalBtnText}
        </button>
        <StarIcon
          isFavorite={isFavorite}
          imgUrl={imgUrl}
          color={color}
          id={id}
          name={name}
          price={price}
        />
        {isModal && (
          <Modal
            setIsModal={setIsModal}
            text={modalText}
            imgUrl={imgUrl}
            name={name}
            span
            clickOnSpan={handleModal}
            actions={
              <>
                <Button
                  isCart={isCart}
                  text={modalBtnText}
                  id={id}
                  imgUrl={imgUrl}
                  color={color}
                  name={name}
                  price={price}
                  className="btn"
                  handleModal={handleModal}
                >
                  {modalBtnText}
                </Button>
                <button className="btn" onClick={handleModal}>
                  Cancel
                </button>
              </>
            }
          />
        )}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  color: PropTypes.string,
};

export default ProductItem;
