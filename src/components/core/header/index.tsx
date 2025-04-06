"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NavDataProps } from "@/types/types";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  data: NavDataProps;
}

export default function Header({ data }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur transition-shadow duration-200",
        isScrolled && "shadow border-b border-black/10"
      )}
    >
      <div className="w-[95%] mx-auto flex h-[9vh] items-center justify-between">
        <Link href="/" className="inline-block" target="_blank">
          <Image
            src={data.logo.url}
            alt="AppRocket Logo"
            width={180}
            height={50}
            className="h-auto w-auto"
          />
        </Link>
        <DesktopNav data={data} />
        <MobileNav data={data} />
      </div>
    </header>
  );
}
