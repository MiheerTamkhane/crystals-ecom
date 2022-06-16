import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import "./Modal.css";
const Modal = ({ children, setShowModal }) => {
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setShowModal(false));
  return (
    <div className="modal-container">
      <div ref={modalRef} className="modal-children">
        {children}
      </div>
    </div>
  );
};

export { Modal };
