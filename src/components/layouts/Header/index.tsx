import Link from "next/link";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <NavLinks className="hidden lg:flex" />

        <div className="flex items-center gap-4">
          <Button variant={"outline"} asChild>
            <Link href={"/"}>Login</Link>
          </Button>

          <Button className="hidden lg:flex" asChild>
            <Link href={"/"}>Sign Up</Link>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
