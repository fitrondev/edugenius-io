import Link from "next/link";

import { navigationData } from "@/constants/data";

import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  link_className?: string;
};

const NavLinks = ({ className, link_className }: NavLinksProps) => {
  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {navigationData.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-foreground/80 hover:text-primary focus:text-primary text-sm font-medium transition-colors focus:outline-none",
            link_className
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
