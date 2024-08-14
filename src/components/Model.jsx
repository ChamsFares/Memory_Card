import "../styles/Model.css";
const Modal = ({ result, closeModal }) => {
  return (
    <div className="popup-modal" tabIndex="-1">
      <div className="modal-content">
        <h3>{result}</h3>
        <button
          data-modal-toggle="popup-modal"
          onClick={closeModal}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
