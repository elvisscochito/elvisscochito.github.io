import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import LinkInBio from "../Pages/LinkInBio";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" /* index */ element={<Landing />} />
        <Route path="/link-in-bio" element={<LinkInBio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
