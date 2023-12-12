import React from "react";
import PropTypes from "prop-types"
import "./modal.scss";

function Modal({
  text,
  actions,
  span,
  clickOnSpan,
  imgUrl,
  name
}) {

  return (
    <div className="modal-container" onClick={clickOnSpan}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
      <img className="img" src={imgUrl} alt="img" />
      <p>{name}</p>
        {span && (
          <button
            className="modal-close-btn"
            onClick={clickOnSpan}
          >
            X
          </button>
        )}
        <div className="modal-text">
          <h2 className="modal-header-text"></h2>
          <div>{text}</div>
        </div>
        <div className="modal-btn">{actions}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  span: PropTypes.any,
  actions: PropTypes.any,
  clickOnSpan: PropTypes.func
}

export default Modal;
