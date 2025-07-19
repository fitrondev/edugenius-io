import { contactData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Header */}
        <SectionTitle
          badge="Hubungi Kami"
          title="Mari Terhubung dan"
          highlight="Mulai Belajar"
          highlight_className="inline"
          description="Tim kami siap membantu Anda memulai perjalanan pembelajaran yang menakjubkan."
          className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center"
        />

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactData.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
