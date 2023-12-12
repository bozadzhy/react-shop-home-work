import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import StarIcon from "../StarIcon/StarIcon";

import { useDispatch } from "react-redux";
import { actionHandelModal } from "../../store/actions";

import "./ProductsTable.scss";

function ProductsTable({ imgUrl, name, price, id, color, isCart, isFavorite }) {
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
    <tr>
      <td>
        <img className="img size" src={imgUrl} alt="img" />
      </td>
      <td className="title">{name.toUpperCase()}</td>
      <td className="price">{price}$ </td>
      <td className="color">{color.toUpperCase()}</td>
      <td>
        <button className="btn" onClick={handleModal}>
          {modalBtnText}
        </button>
      </td>
      <td>
        <StarIcon
          isFavorite={isFavorite}
          imgUrl={imgUrl}
          color={color}
          id={id}
          name={name}
          price={price}
        />
      </td>
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
    </tr>
  );
}

ProductsTable.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  color: PropTypes.string,
};

export default ProductsTable;
