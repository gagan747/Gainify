"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Loader() {
  const isLoading = useSelector((state) => state?.loader?.isLoading); // Get loading state from Redux

  useEffect(() => {
    // Disable scrolling on the body when the loader is active
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && ( // Use isLoading from Redux state
        <div className="fixed inset-0 flex justify-center items-center z-[9999]">
          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[9995]"></div>
          <div className="z-[9997]">
            <Image
              src="/gifs/Candles.gif"
              alt="Loading..."
              width={70} // Set width to 70 pixels
              height={70} // Set height to 70 pixels
              className="w-24 md:w-[100px]" // Set width to 50px on mobile (w-24) and 100px on larger screens (md:w-[100px])
            />
          </div>
        </div>
      )}
    </>
  );
}
