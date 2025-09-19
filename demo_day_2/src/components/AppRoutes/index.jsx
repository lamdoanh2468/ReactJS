import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* //TODO Must include Route */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<SidebarLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
