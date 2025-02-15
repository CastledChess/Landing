import Background from "@/components/background/background";
import Image from "next/image";
import React from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen">
      <Background />

      <div className="container flex flex-col p-40 pb-0">
        <div className="flex flex-col gap-10 text-3xl">
          <span className="text-8xl flex flex-col gap-4 w-full font-mono font-semibold tracking-tighter text-balance text-center bg-gradient-to-br text-transparent from-foreground to-foreground/60 bg-clip-text">
            Chess Analysis, for free, for everyone
          </span>
          <p className="text-balanced text-center text-white/80 mix-blend-difference font-thin text-xl">
            Simple, efficient chess analysis at no cost
          </p>
          <Link
            href={"https://castled.app"}
            className="self-center text-lg mt-20"
          >
            <Button className="self-center text-lg">Let&#39;s Analyse</Button>
          </Link>

          <ShineBorder className="relative p-0 rounded-lg" color={["#EC9E67"]}>
            <Image
              src="/images/app.png"
              alt="Hero"
              width={1920}
              height={1080}
              className="w-full rounded-lg border-2"
            />
          </ShineBorder>
        </div>
      </div>
      <div className="h-2/5 absolute bottom-0 w-full flex bg-gradient-to-t from-background via-background via-5% to-transparent" />
    </section>
  );
};
