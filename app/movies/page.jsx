"use client";

import { useEffect, useState } from "react";
import { Pagination, MovieCard, Container, Loader } from "@/src/components";
import useGetData from "@/src/hooks/useGetData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Movies() {
  const query = useSearchParams();
  const [data, setData] = useState([]);
  const page = query.get("size");
  const items = query.get("items");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("rendered");
    setLoading(true);
    useGetData(`/movie-list?size=${page}&items=${items}`).then((e) => {
      setData(e);
      setLoading(false);
    });
  }, [page, items]);
  return (
    <main>
      <Container classnames={["flex", "flex-col", "gap-16", "justify-center"]}>
        {!isLoading ? (
          <>
            <h1 className="text-3xl font-bold my-3">Movies List</h1>
            <div className="grid gap-16 grid-cols-fluid justify-center ">
              {data?.data?.movieList.map((e) => (
                <Link key={e.id} href={"/movies/" + e.id.toString()}>
                  <MovieCard
                    title={e.title}
                    poster={e.poster}
                    year={e.year}
                    genre={e.genres[0]}
                  />
                </Link>
              ))}
            </div>
            <div className="w-full flex justify-center">
              <Pagination total={100} />
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center items-center min-h-screen flex-col gap-4 text-3xl">
            <Loader />
            <span>Loading films</span>
          </div>
        )}
      </Container>
    </main>
  );
}
