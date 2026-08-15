"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MicrosoftClarity = dynamic(() => import("./MicrosoftClarity"), { ssr: false });
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), { ssr: false });

export default function AdaptiveAnalytics() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const nav = navigator as any;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
    const isSaveData = connection?.saveData;
    const isSlow = connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";

    // Defer analytics until browser is idle, skip on slow networks/data saver
    if (!isSaveData && !isSlow) {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => setCanLoad(true), { timeout: 3500 });
      } else {
        setTimeout(() => setCanLoad(true), 2000);
      }
    }
  }, []);

  if (!canLoad) return null;

  return (
    <>
      <MicrosoftClarity />
      <GoogleAnalytics />
    </>
  );
}
