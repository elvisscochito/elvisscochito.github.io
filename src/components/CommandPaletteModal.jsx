import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
/* import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import styles from "../styles/CommandPaletteModal.module.css";

const CommandPaletteModal = forwardRef(({ children }, ref) => {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
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
      {children}
      <button className={styles.closeModalBtn} onClick={() => modalRef.current?.close()}>
        Close{/* <FontAwesomeIcon icon={faX} /> */}
      </button>
    </dialog>
  )
});

export default CommandPaletteModal;
