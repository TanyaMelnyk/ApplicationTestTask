import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonIcon from "../../../shared/templates/ButtonIcon/ButtonIcon";
import { updatePassword } from "../model";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Button } from "react-bootstrap";
import { TaskContext } from "../../../Context";

const PasswordInput = ({
  setPassword,
  password,
}: {
  setPassword: (arg: string) => void;
  password: string;
}) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(({ authorization }) => authorization.userId);
  const folderId = useAppSelector(
    ({ taskManager }) => taskManager.activeFolderId
  );
  const taskId = useAppSelector(({ taskManager }) => taskManager.activeTaskId);
  const { setToggleLock } = useContext(TaskContext);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };
  const handleSend = () => {
    dispatch(updatePassword(userId, folderId, taskId, password));
    setToggleLock(false);
    setPassword("");
  };

  return (
    <>
      <label>Block All Notes</label>
      <div className="lock-button">
        <input
          onChange={handleChange}
          name="name"
          type="password"
          value={password}
          placeholder="Your password"
        />
        <Button onClick={handleSend}>Ok</Button>
      </div>
    </>
  );
};

const PasswordDropdown = () => {
  //const [toggle, setToggle] = useState(false);
  const [password, setPassword] = useState("");
  const { toggleLock, setToggleLock } = useContext(TaskContext);

  const handleClick = () => {
    setToggleLock(!toggleLock);
    setPassword("");
  };

  return (
    <div className="dropdown">
      <div
        onClick={handleClick}
        className={toggleLock ? "arrow open" : "arrow"}
      >
        <ButtonIcon image="lock_icon.png" altText="lock" />
        <img
          src="../../../../assets/arrow.png"
          className="arrow-img"
          alt="arrow"
        />
      </div>
      <div
        className={toggleLock ? "dropdown-collapse open" : "dropdown-collapse"}
      >
        <PasswordInput setPassword={setPassword} password={password} />
      </div>
    </div>
  );
};

export default PasswordDropdown;
