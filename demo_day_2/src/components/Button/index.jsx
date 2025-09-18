import PropTypes from "prop-types";
import styles from "../Button/Button.module.scss"
import clsx from "clsx";
import "../../styles/main.scss"
console.log(styles);
function Button({primary=false,
                rounded=false,
                border=false,
                href=false,
                size="medium",
                className="",
                title,children,
            ...passProps}){
    const classNames =[styles.wrapper,styles[size],className,{
        [styles.primary] : primary,
        [styles.rounded] : rounded,
        [styles.border] :border,
    }];
    //TODO href => a , Declare in return
    let Component = href ?"a":"button";
    return <Component title={title} href={href} className={clsx(classNames)} {...passProps} >{children}</Component>
}
Button.propTypes ={
    title : PropTypes.string,
    children :PropTypes.node.isRequired,
    primary : PropTypes.bool,
    rounded : PropTypes.bool,
    border : PropTypes.bool,
    href : PropTypes.string,
    className: PropTypes.string
}
export default Button;