import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CurrencyProvider } from "../components/CurrencyContext.jsx";
import { ThemeProvider } from "../components/ThemeContext.jsx";
import Landing from "../pages/Landing.jsx";
import LinkInBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CurrencyProvider>
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
