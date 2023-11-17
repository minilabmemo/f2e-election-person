import "./Modal.scss";
import cancel from "../../assets/images/cancel.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <>
      <div className="modal-overlay" >
        <div className="modal">
          <button className="close-button" onClick={onClose}>
            <img src={cancel} alt="cancel" />
          </button>
          {children}
        </div>
      </div>
    </>
  ) : null;
};