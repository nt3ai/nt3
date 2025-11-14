"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show placeholder during SSR/hydration to prevent mismatch
  if (!mounted) {
    return <div style={{ width: 150, height: 40 }} />;
  }

  const logoSrc =
    resolvedTheme === "dark" ? "/logo-white.svg" : "/logo-dark.svg";

  return <Image alt="Logo" height={20} priority src={logoSrc} width={120} />;
}
