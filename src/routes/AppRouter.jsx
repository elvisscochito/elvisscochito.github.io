import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { CurrencyProvider } from "../components/CurrencyContext.jsx";
import { ThemeProvider } from "../components/ThemeContext.jsx";
import Landing from "../pages/Landing.jsx";
import LinkInBio from "../pages/LinkInBio.jsx";
import styles from '../styles/Tooltip.module.css';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CurrencyProvider>
          <Tooltip id="global-tooltip" place="top" className={`global-tooltip ${styles.tooltip}`} />
          <Routes>
            <Route path="/" /* index */ element={<Landing />} />
            <Route path="/link-in-bio" element={<LinkInBio />} />
          </Routes>
        </CurrencyProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRouter;
