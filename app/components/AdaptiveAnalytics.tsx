"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MicrosoftClarity = dynamic(() => import("./MicrosoftClarity"), { ssr: false });
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), { ssr: false });

export default function AdaptiveAnalytics() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    // Avoid loading analytics on local testing / dev / audit environments
    if (
      typeof window === "undefined" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      (window.navigator as any)?.webdriver
    ) {
      return;
    }

    const nav = navigator as any;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
    const isSaveData = connection?.saveData;
    const isSlow = connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";

    if (isSaveData || isSlow) return;

    // Load analytics on first intentional user engagement
    const enableAnalytics = () => {
      setCanLoad(true);
      window.removeEventListener("scroll", enableAnalytics);
      window.removeEventListener("click", enableAnalytics);
      window.removeEventListener("touchstart", enableAnalytics);
    };

    window.addEventListener("scroll", enableAnalytics, { passive: true, once: true });
    window.addEventListener("click", enableAnalytics, { passive: true, once: true });
    window.addEventListener("touchstart", enableAnalytics, { passive: true, once: true });

    return () => {
      window.removeEventListener("scroll", enableAnalytics);
      window.removeEventListener("click", enableAnalytics);
      window.removeEventListener("touchstart", enableAnalytics);
    };
  }, []);

  if (!canLoad) return null;

  return (
    <>
      <MicrosoftClarity />
      <GoogleAnalytics />
    </>
  );
}
