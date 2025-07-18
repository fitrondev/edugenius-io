import { featuresData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section id="features" className="py-10 md:py-14">
      <div className="container space-y-8">
        <SectionTitle
          badge="Features"
          title="Fitur Unggulan yang Bikin"
          highlight="Belajar Makin Seru!"
          description="Nikmati pengalaman belajar yang tak terlupakan dengan teknologi terdepan dan metode pembelajaran yang sudah terbukti efektif."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
