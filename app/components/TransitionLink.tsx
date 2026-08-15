"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

export default function TransitionLink({
  href,
  children,
  className,
  prefetch = true,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetUrl = href.toString();

    // Use native View Transitions API if supported
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as any).startViewTransition(() => {
        router.push(targetUrl);
      });
    } else {
      router.push(targetUrl);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleNavigation}
      prefetch={prefetch}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
