import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from "classnames";

const SlideCard = ({ poster, title, year, genre }) => {
  return (
    <div className={classNames("bg-slate-300 relative", styles.slideContainer)}>
      <Image
        src={poster}
        alt="Slide card image"
        width={200}
        height={200}
        className={classNames("w-full object-cover", styles.image)}
      />
      <h2 className="absolute sm:left-8 left-4 sm:text-4xl text-2xl font-bold">
        {title}
      </h2>
      <p className="absolute sm:left-8 left-4 sm:text-2xl text-xl">{`${year} / ${genre.title} `}</p>
    </div>
  );
};

export default SlideCard;
