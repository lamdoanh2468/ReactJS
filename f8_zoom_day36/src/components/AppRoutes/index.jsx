import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout/index";
import Footer from "../../layouts/DefaultLayout/components/Footer/index";
import Home from "../../pages/Home/index";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import NotFound from "../../pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<PostDetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="privacy" element={<Privacy />}></Route>
        </Route>
          <Route  path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
}
export default AppRoutes;
