import React from "react";
import { Modal } from "../../../shared/templates/Modal/Modal";
import { removeTaskData } from "../model";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks";

type DeleteTaskModalProps = {
  show: boolean;
  onHide: () => void;
  taskId: string;
  folderId: string;
};
export const DeleteTaskModal = ({
  folderId,
  taskId,
  onHide,
  show,
}: DeleteTaskModalProps) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ authorization }) => authorization.userId);

  const handleDelete = () => {
    dispatch(removeTaskData(userId, folderId, taskId));
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      action={<Button onClick={handleDelete}>Delete</Button>}
    >
      <div className="delete-task">
        <img
          src="../../../../assets/delete_modal_basket.png"
          alt="delete_basket"
        />
        <div>
          <p className="title">Delete task?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </Modal>
  );
};
