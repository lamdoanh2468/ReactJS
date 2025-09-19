import Header from "../components/Header/index";
import Footer from "./components/Footer/index";
import Navigation from "../components/Nagivation/index";
import { Outlet } from "react-router";
function AdminLayout() {
  return (
    <div>
      <Header />
      <h1>Admin</h1>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default AdminLayout;
