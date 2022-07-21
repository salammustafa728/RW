import React from "react";
import "../../styles/Button.scss";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--medium','btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
    //if gutting component has styke true make it buttonstyle otherwise put it the first style int the styles array
    const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
       <Link to='/sign-up' className="btn-mobile">
        <button
        className={`btn ${checkButtonStyles} ${checkBtnSize}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
       </Link>
    )
};
