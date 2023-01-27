import React from "react";
import styles from "./styles.module.scss";

const Loader = ({ children }) => {
  return (
    <>
      <span className={styles["loader"]}></span>
    </>
  );
};

export default Loader;
