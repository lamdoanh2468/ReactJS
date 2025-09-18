import { NavLink } from "react-router-dom";
import styles from "../Navigation/Nagivation.module.scss";

const navItems = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/counter",
    title: "Counter",
  },
  {
    to: "/todo",
    title: "Todo List App",
  },
  {
    to: "/profile",
    title: "Profile Card",
  },
  {
    to: "/products",
    title: "Product List",
  },
  {
    to: "/comments",
    title: "Comment System",
  },
  {
    to: "/weather",
    title: "Weather App",
  },
  {
    to: "/buttons",
    title: "Button Components",
  },
];

function Navigation() {
  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLink
          }
          to={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
