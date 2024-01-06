import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[24px]" };
const variants = {
  outline: {
    gray_50_01: "border-2 border-gray-50_01 border-solid text-gray-50_01",
  },
  fill: { gray_50_01: "bg-gray-50_01 text-deep_orange-700" },
  gradient: { yellow_800_deep_orange_700: "bg-gradient  text-gray-50_01" },
};
const sizes = { xs: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "gradient",
  color = "",
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
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
  color: PropTypes.oneOf(["gray_50_01", "yellow_800_deep_orange_700"]),
};

export { Button };
