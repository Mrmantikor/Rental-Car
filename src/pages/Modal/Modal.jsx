import { useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import s from "./Modal.module.scss";

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(0);
  const [modalClose, setModalClose] = useState(0);

  return (
    <div className={s["modal"]}>
      <Icon name="burger-menu" className={s["modal_burger-menu"]} />
      <div>
        <h1>Hello</h1>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
};

export default Modal;
