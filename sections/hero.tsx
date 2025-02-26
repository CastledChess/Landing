import Background from "@/components/background/background";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen">
      <Background />

      <div className="h-full relative mx-auto container flex flex-col px-6 md:px-26 lg:px-30 2xl:px-40 pt-40 pb-0">
        <div className="h-full flex flex-col gap-10 text-3xl">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl flex flex-col gap-4 w-full font-mono font-semibold tracking-tighter text-balance text-center bg-gradient-to-br text-transparent from-foreground to-foreground/60 bg-clip-text">
            Chess Analysis, for free, for everyone
          </span>
          <p className="text-balanced text-center text-white/80 mix-blend-difference font-medium text-lg lg:text-xl">
            Simple, efficient chess analysis at no cost
          </p>
          <Link
            href="https://analysis.castled.app"
            className="self-center text-lg mt-20"
          >
            <Button className="self-center text-lg">Let&#39;s Analyse</Button>
          </Link>

          <Image
            src="/images/app.png"
            alt="Hero"
            width={1920}
            height={1080}
            className="w-full mt-auto rounded-lg border-2 border-[#EC9E67]"
          />
        </div>
      </div>
      <div className="h-2/5 absolute bottom-0 w-full flex bg-gradient-to-t from-background via-background via-5% to-transparent" />
    </section>
  );
};
