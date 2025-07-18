import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  text_className?: string;
};

const Logo = ({ className, text_className }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex items-center gap-2 transition-opacity hover:opacity-80",
        className
      )}
    >
      <Image
        src={"/assets/svg/logo.svg"}
        alt="Logo"
        width={40}
        height={40}
        priority
        className="size-auto"
      />

      <span className="sr-only">Edugenius</span>
      <span
        className={cn("hidden text-2xl font-bold md:inline", text_className)}
      >
        Edugenius<span className="text-primary">.io</span>
      </span>
    </Link>
  );
};
export default Logo;
