import React from "react";

const sizeClasses = {
  txtPoppinsRegular16Black900cc: "font-normal font-poppins",
  txtPoppinsSemiBold305: "font-poppins font-semibold",
  txtPoppinsBold42: "font-bold font-poppins",
  txtPoppinsSemiBold20Gray900: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold20Gray900cc: "font-poppins font-semibold",
  txtPoppinsRegular16Gray50cc: "font-normal font-poppins",
  txtPoppinsRegular14Gray900cc: "font-normal font-poppins",
  txtPoppinsSemiBold305WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium16Gray5001: "font-medium font-poppins",
  txtPoppinsSemiBold26: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsRegular16Gray900: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsBold42Gray5001: "font-bold font-poppins",
  txtPoppinsSemiBold16Gray5001: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
