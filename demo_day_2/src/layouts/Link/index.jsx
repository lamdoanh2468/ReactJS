import { useNavigate } from "react-router";
function Link({ to, children }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return <a href={to}>{children}</a>;
}
export default Link;
