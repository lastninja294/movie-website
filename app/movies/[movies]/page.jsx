"use client";

import React, { useEffect, useState } from "react";
import { Container, Loader } from "@/src/components";
import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from "classnames";
import useGetData from "@/src/hooks/useGetData";
import imdb from "../../../public/imdb.svg";
import kp from "../../../public/kp.svg";

import { CustomVideoPlayer } from "@/src/components";

function MovieDetail({ params }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    useGetData(`/movie-detail?id=${params.movies}`).then((e) => {
      setData(e.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      {!isLoading ? (
        <>
          <div className={classNames("lg:flex gap-5 mb-5")}>
            <Image
              src={data?.poster}
              width={600}
              height={200}
              className="lg:w-1/3 mb-5 sm:mb-0 object-contain"
              style={{
                maxHeight: "560px",
              }}
              alt="Movie Poster"
            />
            <div className={styles.right}>
              <h2 className="text-4xl mb-2">{data?.title}</h2>
              <div className="flex flex-col gap-5">
                <ul className="flex gap-5 flex-col">
                  <li className="flex items-center gap-3">
                    <Image src={imdb} width={30} height={30} />
                    <span className="font-bold">{data?.imdb_rating}</span>
                    <Image src={kp} width={30} height={30} />
                    <span className="font-bold">{data?.kp_rating}</span>
                  </li>
                  <li>
                    <span className="font-bold">Год: </span>
                    <span>{data?.year}</span>
                  </li>
                  <li>
                    <span className="font-bold">Страна: </span>
                    <span>{data?.countries?.map((e) => e.title + ", ")}</span>
                  </li>
                  <li>
                    <span className="font-bold">Жанр: </span>
                    <span>{data?.genres?.map((e) => e.title + " , ")}</span>
                  </li>
                  <li>
                    <p className="text-gray-300 font-thin">
                      {data?.description}
                    </p>
                  </li>
                  {data?.people?.map((e) => {
                    return (
                      <li key={e.post} className="flex gap-2">
                        <span className="font-bold">{e.post}:</span>
                        <span>
                          {e.employees?.map((res) => res.full_name + " , ")}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <CustomVideoPlayer />
        </>
      ) : (
        <div className="w-full flex justify-center items-center min-h-screen flex-col gap-4 text-3xl">
          <Loader />
          <span>Loading films</span>
        </div>
      )}
    </Container>
  );
}

export default MovieDetail;
