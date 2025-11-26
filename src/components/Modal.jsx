import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
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

  /* close when user press ESC key */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        modalRef.current?.close();
      }
    };

    const dialog = modalRef.current;

    if (dialog && dialog.open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, []);


  /* close when user click/tap outside the modal */
  const handleBackdropOutsideClick = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current?.close();
    }
  }

  return (
    <dialog ref={modalRef} className={styles.modal} onClick={handleBackdropOutsideClick}>
      <h2>{content.title}</h2>
      <p>{content.message}</p>

      <button className={styles.closeModalBtn} onClick={() => modalRef.current?.close()}>
        Close
      </button>
    </dialog>
  )
});

export default Modal;
