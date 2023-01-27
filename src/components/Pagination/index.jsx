"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Pagination = ({ total }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [items, setItems] = useState(searchParams.get("items") || "20");
  const [page, setPage] = useState(searchParams.get("size") || "1");

  useEffect(() => {
    router.push(pathname + `?size=${page}&items=${items}`);
  }, []);
  return (
    <>
      <nav
        aria-label="Page navigation example"
        className={classNames("flex gap-4", styles.nav)}
      >
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <div
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={(e) => {
                setPage(+page - 1 > 0 ? +page - 1 : 1);
                router.push(
                  pathname +
                    `?size=${+page - 1 > 0 ? +page - 1 : 1}&items=${items}`
                );
              }}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </li>
          {new Array(total).fill(0).map((_, i) => {
            return (
              <li key={i}>
                {(i + 1).toString() != page ? (
                  <div
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {
                      setPage((i + 1).toString());
                      router.push(
                        pathname + `?size=${(i + 1).toString()}&items=${items}`
                      );
                    }}
                  >
                    {i + 1}
                  </div>
                ) : (
                  <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                    {i + 1}
                  </div>
                )}
              </li>
            );
          })}

          <li>
            <div
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                setPage(+page + 1 < 10 ? +page + 1 : 10);
                router.push(
                  pathname +
                    `?size=${+page + 1 < 10 ? +page + 1 : 10}&items=${items}`
                );
              }}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setPage(1);
            setItems(e.target.value);
            router.push(pathname + `?size=${1}&items=${e.target.value}`);
          }}
        >
          <option defaultValue={"20"} selected={items == 20}>
            20
          </option>
          <option value="50" selected={items == 50}>
            50
          </option>
        </select>
      </nav>
    </>
  );
};

export default Pagination;
