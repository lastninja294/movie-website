import React from "react";
import {Loader} from "@/src/components";

function LoadingPage() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen flex-col gap-4 text-3xl">
      <Loader />
      <span>Loading data</span>
    </div>
  );
}

export default LoadingPage;
