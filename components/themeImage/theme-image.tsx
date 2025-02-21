"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type ThemeImageProps = {
  lightImage: React.ComponentProps<typeof Image>;
  darkImage: React.ComponentProps<typeof Image>;
};

export const ThemeImage = ({
  lightImage: { className: lightClassName, ...lightImage },
  darkImage: { className: darkClassName, ...darkImage },
}: ThemeImageProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Image
        {...lightImage}
        className={cn(lightClassName, theme === "light" ? "visible" : "hidden")}
      />

      <Image
        {...darkImage}
        className={cn(darkClassName, theme === "light" ? "hidden" : "visible")}
      />
    </>
  );
};
