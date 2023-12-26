import React from "react";

const sizeClasses = {
  txtPoppinsBold32Green800dd: "font-bold font-poppins",
  txtPoppinsRegular16Black90001: "font-normal font-poppins",
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsBold24Lightgreen900: "font-bold font-poppins",
  txtPoppinsMedium18Orange600: "font-medium font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold64: "font-poppins font-semibold",
  txtPoppinsRegular13Black90001: "font-normal font-poppins",
  txtPoppinsMedium54: "font-medium font-poppins",
  txtPoppinsBold18Black900: "font-bold font-poppins",
  txtPoppinsRegular15WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsRegular15Lime300: "font-normal font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsBold24Lightgreen90001: "font-bold font-poppins",
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
