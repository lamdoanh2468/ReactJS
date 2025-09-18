import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "../Buttons/Buttons.module.scss";

function Button({
  primary = false,
  bordered = false,
  rounded = false,
  size = "medium",
  href,
  className,
  children,
  title,
  disabled,
  loading,
  onClick,
  ...passProp
}) {
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
    //TODO
    /* if(onClick){
     *   onClick(e)
     * }
     *  */
  };

  const classNames = clsx(className, styles[size], styles.disabled, {
    [styles.primary]: primary,
    [styles.bordered]: bordered,
    [styles.rounded]: rounded,
  });
  let Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      title={title}
      className={classNames}
      size={size}
      onClick={handleClick}
      disabled={disabled || loading}
      {...passProp}
    >
      {loading && (
        <div className={styles.loading}>
          <div className={styles["icon-loading"]}></div>
        </div>
      )}
      {/* //! || thì 50-50 true hoặc false, && thì 1 là true 2 là false
      //TODO do false hong hiện lên trong react  */}
      <span className={loading ? styles.loadingText : ""}>{children}</span>
    </Component>
  );
}
Button.propTypes = {
  primary: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
function Buttons() {
  return (
    <>
      <Button>Click me</Button>
      <Button primary>Primary Button</Button>
      <Button href="https://google.com" target="_blank">
        Go to Google
      </Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button onClick={() => alert("Clicked!")}>Click Alert</Button>
      <Button disabled onClick={() => alert("Should not show")}>
        Disabled Button
      </Button>
      <Button loading onClick={() => console.log("Should not log")}>
        Loading Button
      </Button>
    </>
  );
}
export default Buttons;
