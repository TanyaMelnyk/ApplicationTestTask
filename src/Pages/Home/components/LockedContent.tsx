import React, { useContext } from "react";
import { TaskContext } from "../../../Context";

const LockedContent = () => {
  const { setPassword } = useContext(TaskContext);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <div className="locked-content">
      <img src="../../../../assets/lock.png" alt="lock" />
      <h2>Password</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <input
        onChange={(e) => onChange(e)}
        name="name"
        type="password"
        placeholder="Your password"
      />
    </div>
  );
};
export default LockedContent;
