"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-8">
      <div role="alert">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Error
        </div>
        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>Something not ideal might be happening.</p>
        </div>
      </div>
      <button
        onClick={() => reset()}
        type="button"
        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-600 dark:text-red-600 dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Try Again
      </button>
    </div>
  );
}
