import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = forwardRef((_, ref) => {
  const modalRef = useRef(null);
  const [content, setContent] = useState({
    title: "",
    message: ""
  });

  useImperativeHandle(ref, () => ({
    open(title, message) {
      setContent({ title, message });
      modalRef.current?.showModal();
    },
    close() {
      modalRef.current?.close();
    }
  }));

  return (
    <dialog ref={modalRef} className={styles.modal}>
      <h2>{content.title}</h2>
      <p>{content.message}</p>

      <button className={styles.closeModalBtn} onClick={() => modalRef.current?.close()}>
        Close
      </button>
    </dialog>
  )
});

export default Modal;
