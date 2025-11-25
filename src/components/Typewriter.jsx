import { useEffect, /* useRef,  */ useState } from 'react';

const Typewriter = ({ toRotate = [], period = 2000 }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textRotate, setTextRotate] = useState('');
  /*  const [toRotate, setToRotate] = useState(["Web Developer", "Full-Stack Developer", "Front-End Developer", "Back-End Developer", "Data Scientist", "Mobile Developer" *//* , "Tech Enthusiast", "Lifelong Learner" *//* ]); */
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  /* const period = 2000; */

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, textRotate.length - 1) : fullText.substring(0, textRotate.length + 1);

      setTextRotate(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const timer = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(timer);
  }, [textRotate, isDeleting/* , delta, loopNum, toRotate */]);

  return (
    <span>{textRotate}</span>
  );
};

export default Typewriter;
