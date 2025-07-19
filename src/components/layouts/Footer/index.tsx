import Link from "next/link";

import { footerSections, socialLinks } from "@/constants/data";

import Logo from "@/components/common/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-6">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-center md:items-start md:justify-start">
              <Logo className="text-foreground bg-background max-w-max rounded-full p-3" />
            </div>

            <p className="max-w-sm">
              Platform pembelajaran online terdepan yang membantu Anda
              mengembangkan keterampilan digital dan mencapai tujuan karir
              impian.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 md:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-300 hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-primary-foreground/20 mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <p className="mb-4 text-sm md:mb-0">
              © {new Date().getFullYear()} Ansori Dev. Semua hak cipta
              dilindungi.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-sm lg:flex-row lg:justify-start lg:gap-x-6">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-white/80"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-white/80"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/cookies"
                className="transition-colors duration-300 hover:text-white/80"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
