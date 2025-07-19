import { aboutValuesData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Header */}
        <SectionTitle
          badge="Tentang EduGenius"
          title="Membangun Masa Depan Melalui"
          highlight="Pendidikan Digital"
          highlight_className="inline"
          description="Kami percaya bahwa pendidikan adalah kunci untuk membuka potensi tak terbatas setiap individu."
          className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center"
        />

        {/* Story Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Dari Mimpi Menjadi Kenyataan</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              EduGenius lahir dari visi sederhana: membuat pendidikan
              berkualitas dapat diakses oleh siapa saja, di mana saja. Dimulai
              pada tahun 2020, kami telah berkembang menjadi platform
              pembelajaran terpercaya dengan ribuan siswa aktif.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dengan tim yang terdiri dari educator berpengalaman, teknolog
              handal, dan visioner pendidikan, kami terus berinovasi untuk
              memberikan pengalaman belajar yang tak terlupakan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Bergabung Sekarang</Button>

              <Button variant="outline" size="lg">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="from-primary/30 to-primary/50 absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-r"></div>
            <div className="relative rounded-2xl bg-white p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-primary text-3xl font-bold">10K+</div>
                  <div className="text-muted-foreground text-sm">
                    Siswa Aktif
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-3xl font-bold">500+</div>
                  <div className="text-muted-foreground text-sm">Kursus</div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-3xl font-bold">95%</div>
                  <div className="text-muted-foreground text-sm">Kepuasan</div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-3xl font-bold">24/7</div>
                  <div className="text-muted-foreground text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">
              Nilai-Nilai yang Kami Junjung
            </h3>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Setiap keputusan yang kami ambil didasarkan pada nilai-nilai
              fundamental yang menjadi fondasi EduGenius.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutValuesData.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="from-primary/50 to-primary/80 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
