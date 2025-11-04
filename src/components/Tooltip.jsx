/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/Tooltip.module.css';

// Small portal tooltip: simple, positions above the target and escapes parent overflow.
const Tooltip = ({ text, children }) => {
  const idRef = useRef(`tooltip-${Math.random().toString(36).slice(2, 9)}`);
  const targetRef = useRef(null);
  const tipRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (!open) return;
    const compute = () => {
      const t = targetRef.current?.getBoundingClientRect?.();
      const r = tipRef.current?.getBoundingClientRect?.();
      if (!t || !r) return;
      const GAP = 14;
      let top = t.top - r.height - GAP;
      if (top < 8) top = t.bottom + GAP;
      let left = t.left + t.width / 2 - r.width / 2;
      left = Math.min(Math.max(left, 8), window.innerWidth - r.width - 8);
      setPos({ left, top });
    };
    // compute after tooltip has been rendered
    setTimeout(compute, 0);
    window.addEventListener('resize', compute);
    window.addEventListener('scroll', compute, true);
    return () => {
      window.removeEventListener('resize', compute);
      window.removeEventListener('scroll', compute, true);
    };
  }, [open]);

  return (
    <span className={styles.tooltip}>
      <span
        ref={targetRef}
        aria-describedby={idRef.current}
        className={styles.tooltipWrapper}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {children}
      </span>

      {open && typeof document !== 'undefined' && createPortal(
        <span
          ref={tipRef}
          id={idRef.current}
          role="tooltip"
          className={`${styles.tooltiptext} ${styles.tooltipVisible}`}
          style={{ position: 'fixed', left: `${pos.left}px`, top: `${pos.top}px` }}
        >
          {text}
        </span>,
        document.body
      )}
    </span>
  );
};

export default Tooltip;
