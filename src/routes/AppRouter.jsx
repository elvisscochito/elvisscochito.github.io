import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../components/ThemeContext.jsx";
import Landing from "../pages/Landing.jsx";
import LinkInBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" /* index */ element={<Landing />} />
          <Route path="/link-in-bio" element={<LinkInBio />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRouter;
