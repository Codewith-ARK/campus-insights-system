"use client"; // For Next.js App Router

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";

export default function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(40); // Start loading
    const timer = setTimeout(() => setProgress(100), 500); // Complete loading

    return () => {
      setProgress(0);
      clearTimeout(timer);
    };
  }, [pathname]);

  return <LoadingBar color="#00bc7d" progress={progress} onLoaderFinished={() => setProgress(0)} />;
}