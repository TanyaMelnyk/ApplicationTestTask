import React from "react";
import "./style.scss";
import BootstrapModal from "react-bootstrap/Modal";

type ModalProps = {
  show: boolean;
  onHide: () => void;
  action?: React.ReactNode;
  className?: string;
};
export const Modal: React.FC<ModalProps> = ({
  show,
  onHide,
  children,
  action,
}) => {
  return (
    <BootstrapModal
      show={show}
      onHide={onHide}
      className="bt-modal"
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      <BootstrapModal.Header closeButton />

      <BootstrapModal.Body>{children}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        {action && <div>{action}</div>}
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};
