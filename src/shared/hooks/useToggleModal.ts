import { useState } from "react";

export const useToggleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  return { showModal, handleShowModal, handleHideModal };
};
