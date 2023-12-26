import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-bl-[12px] rounded-br-[12px] rounded-tl-none rounded-tr-none",
};
const variants = {
  fill: {
    orange_600: "bg-orange-600 text-lime-300",
    black_900_01: "bg-black-900_01 text-white-A700",
  },
};
const sizes = { xs: "p-4", sm: "pl-[17px] pr-[19px] py-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "black_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["orange_600", "black_900_01"]),
};

export { Button };
