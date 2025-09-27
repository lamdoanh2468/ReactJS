import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    console.log("User've changed page");
  }, [location.pathname]);
  return <></>;
}
export default ScrollToTop;
