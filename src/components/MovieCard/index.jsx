import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const MovieCard = ({ poster, title, year, genre }) => {
  return (
    <div className={styles.card}>
      <Image
        src={poster}
        alt="Movie card image"
        width={800}
        height={800}
        className="max-h-80 object-cover"
      />
      <div className={styles.bottom}>
        <h3 className="text-lg font-bold ">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h3>
        <p>{`${year} / ${genre.title}`}</p>
      </div>
      <div className={styles.movieBottom}></div>
    </div>
  );
};

export default MovieCard;
