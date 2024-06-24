import { useEffect, useRef, useState } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState("default");

  const onMouseMove = (e) => {
    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    /* console.log(e.clientX, e.clientY); */
  };

  const onMouseEnter = () => {
    setCursorType("hovered");
  };

  const onMouseLeave = () => {
    setCursorType("default");
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${cursorType}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}

export default CustomCursor;
