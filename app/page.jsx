"use client";

import { Container, SlideCard, Loader } from "@/src/components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import useGetData from "@/src/hooks/useGetData";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    useGetData(`/movie-list?size=${1}&items=${10}`).then((e) => setData(e));
  }, []);

  return (
    <main>
      <Container classnames={["flex", "flex-col sm:px-0"]}>
        <h1 className="text-3xl font-bold my-3 sm:text-left text-center">
          Welcome to Cinerama
        </h1>
        <div className="overflow-hidden">
          {data.status ? (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              parallax={true}
              modules={[Autoplay, Navigation]}
              navigation
              autoplay={{ delay: 3000 }}
            >
              {data?.data?.movieList.map((e) => (
                <SwiperSlide key={e.id}>
                  <Link href={"/movies/" + e.id.toString()}>
                    <SlideCard
                      title={e.title}
                      poster={e.poster}
                      year={e.year}
                      genre={e.genres[0]}
                      key={e.id}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full flex justify-center items-center min-h-screen flex-col gap-4 text-3xl">
              <Loader />
              <span>Loading films</span>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
