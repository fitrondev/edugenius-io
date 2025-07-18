import Image from "next/image";
import Link from "next/link";

import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center py-10">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center gap-y-8 text-center lg:items-start lg:text-start">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Wujudkan Impian Belajar{" "}
              <span className="text-primary">Kamu Sekarang</span>
            </h1>

            <p className="text-muted-foreground max-w-lg text-lg md:text-xl">
              Buka potensi diri kamu dengan kursus online lengkap yang dirancang
              oleh para ahli. Belajar sesuai ritme kamu dan capai target yang
              diinginkan.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="/#courses">Mulai Belajar</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
                asChild
              >
                <Link href="/#about">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-primary mb-1 text-2xl font-bold md:text-3xl">
                  10K+
                </div>
                <div className="text-muted-foreground text-sm">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-primary mb-1 text-2xl font-bold md:text-3xl">
                  500+
                </div>
                <div className="text-muted-foreground text-sm">
                  Kursus Berkualitas
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary mb-1 text-2xl font-bold md:text-3xl">
                  95%
                </div>
                <div className="text-muted-foreground text-sm">
                  Tingkat Keberhasilan
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] w-full lg:h-[600px]">
              <Image
                src="/assets/images/hero.jpg"
                alt="Guru Profesional"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl object-cover shadow-2xl md:object-top"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 hidden animate-bounce rounded-xl border bg-white p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:animate-pulse hover:shadow-xl lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 flex h-12 w-12 animate-pulse items-center justify-center rounded-full">
                  <Users className="text-primary h-6 w-6 transition-all duration-300 hover:scale-110 hover:rotate-12" />
                </div>
                <div>
                  <div className="font-semibold">Instruktur Ahli</div>
                  <div className="text-muted-foreground text-sm">
                    Belajar dari yang terbaik
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
