import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { ThemeImage } from "@/components/themeImage/theme-image";

export const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen">
      <div className="z-10 relative container mx-auto flex flex-col px-6 md:px-26 lg:px-30 2xl:px-40 pt-40 pb-0">
        <p className="text-center uppercase text-foreground/60 font-semibold">
          Import games from popular chess platforms
        </p>

        <div className="flex gap-10 text-3xl w-full items-center justify-center pt-10">
          <ThemeImage
            lightImage={{
              src: "/images/chess-light.png",
              alt: "Chess.com",
              width: 100,
              height: 30,
            }}
            darkImage={{
              src: "/images/chess.png",
              alt: "Chess.com",
              width: 100,
              height: 30,
            }}
          />

          <span className="flex text-xl gap-1 items-center">
            <Icon icon="simple-icons:lichess" width={30} height={30} />
            Lichess
          </span>
        </div>
      </div>
      <div className="[--color:#EC9E67] pointer-events-none relative z-0 mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_70%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-60 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-transparent after:bg-background" />

      <div className="relative container z-10 mx-auto items-center gap-5 flex flex-col px-6 md:px-26 lg:px-30 2xl:px-40 pb-0">
        <h2 className="text-center text-4xl text-foreground font-semibold">
          Analyse games with Stockfish
        </h2>
        <p className="text-balanced text-center text-foreground/80 mix-blend-difference font-thin text-lg lg:text-xl">
          Castled uses Stockfish, the strongest open-source chess engine, to
          analyse your games.
        </p>

        <Link href="https://castled.app" className="self-center text-lg mt-20">
          <Button>Let&#39;s Analyse</Button>
        </Link>
      </div>
    </section>
  );
};
