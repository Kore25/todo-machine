import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackgrund">
        {children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;