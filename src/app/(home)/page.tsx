import Image from "next/image";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="container">
      <Button>Click Me</Button>

      <Image
        src="/assets/svg/logo.svg"
        alt="Hero Image"
        width={50}
        height={50}
      />

      <Logo />
    </main>
  );
};
export default Home;
