import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export default function Home() {
  return (
    <div className="flex w-full justify-center pt-4">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1
            className={cn(
              "scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl",
              headingFont.className
            )}
          >
            <span className="text-red-500">TT</span> Points Counter
          </h1>
          <small
            className={cn(
              "text-sm font-medium leading-none",
              textFont.className
            )}
          >
            Easily count points in your table tennis game
          </small>
        </div>
        <div>
          <Button variant="outline" asChild className="rounded-lg">
            <Link
              href="https://github.com/Jay-Karia/table-tennis-points-counter"
              target="_blank"
              className="gap-x-2"
            >
              <FaGithub />
              <span>Source</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
