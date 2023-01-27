import React from "react";
import classNames from "classnames";

const Container = ({ children, classnames }) => {
  return (
    <div
      className={
        "container mx-auto md:px-12 py-4 px-3 overflow-auto " +
        classNames(classnames)
      }
    >
      {children}
    </div>
  );
};

export default Container;
