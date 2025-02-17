import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen">
      <div className="z-10 relative container mx-auto flex flex-col p-40 pb-0">
        <p className="text-center uppercase text-foreground/60 font-semibold">
          Import games from popular chess platforms
        </p>

        <div className="flex gap-10 text-3xl w-full items-center justify-center pt-10">
          <Image
            src="/images/chess.png"
            alt="Chess.com"
            width={100}
            height={100}
          />

          <span className="flex text-xl gap-1 items-center">
            <Image
              src="/images/lichess.svg"
              alt="Stockfish"
              width={100}
              height={100}
              className="h-10 w-10"
            />
            Lichess
          </span>
        </div>
      </div>
      <div className="[--color:#EC9E67] pointer-events-none relative z-0 mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-transparent after:bg-background" />

      <div className="relative container z-10 mx-auto items-center gap-5 flex flex-col pb-0">
        <h2 className="text-center text-4xl text-foreground font-semibold">
          Analyse games with Stockfish
        </h2>
        <p className="text-balanced text-center text-white/80 mix-blend-difference font-thin text-xl">
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
