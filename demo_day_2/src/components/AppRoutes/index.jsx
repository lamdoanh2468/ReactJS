import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import AdminLayout from "../../layouts/AdminLayout";
import Dashboard from "../../pages/Dashboard";
import PostDetail from "../../pages/PostDetail";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* //TODO Must include Route */}
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<PostDetail />} />
        </Route>
        <Route element={<SidebarLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default AppRoutes;
