/* import styles from '../styles/Tooltip.module.css';
const Tooltip = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{text}</span>
    </div>
  );
};

export default Tooltip;
 */

// components/Tooltip.jsx
import { useEffect, useState } from 'react';
import styles from '../styles/Card.module.css';

const Tooltip = ({ text, targetRef, visible }) => {
  const [pos, setPos] = useState({ left: '50%', top: 0 });

  useEffect(() => {
    if (visible && targetRef?.current) {
      const btnRect = targetRef.current.getBoundingClientRect();
      const parent = targetRef.current.offsetParent?.getBoundingClientRect();
      if (btnRect && parent) {
        const left = btnRect.left - parent.left + btnRect.width / 2;
        const top = btnRect.top - parent.top;
        setPos({ left: `${left}px`, top: `${top}px` });
      }
    }
  }, [visible, targetRef]);

  return (
    <div
      className={styles.cardTooltip}
      style={{
        left: pos.left,
        top: pos.top,
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible
          ? 'translate(-50%, -160%) scale(1)'
          : 'translate(-50%, -140%) scale(0.97)',
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
