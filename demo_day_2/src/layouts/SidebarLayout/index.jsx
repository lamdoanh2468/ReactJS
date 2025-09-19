import Header from "../components/Header/index";
import Footer from "./components/Footer/index";
import Sidebar from "./components/Sidebar";
import styles from "./SidebarLayout.module.scss";
import Navigation from "../components/Nagivation";
import { Outlet } from "react-router";
function SidebarLayout() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>

        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
export default SidebarLayout;
