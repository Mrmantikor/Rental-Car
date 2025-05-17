import { useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import s from "./Modal.module.scss";

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(0);
  const [modalClose, setModalClose] = useState(0);

  return (
    <p>
      <Icon name="burger-menu" className={s["modal_burger-menu"]} />
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Header</h2>
          </div>
          <div class="modal-body">
            <p>Some TEXT</p>
            <p>Ещё другой текст...</p>
          </div>
          <div class="modal-footer">
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </p>
  );
};

export default Modal;
