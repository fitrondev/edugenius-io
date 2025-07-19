import Link from "next/link";

import { ContactItem } from "@/constants/data";

type ContactCardProps = {
  contact: ContactItem;
};

const ContactCard = ({ contact }: ContactCardProps) => {
  const Icon = contact.icon;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
        <Icon />
      </div>
      <h3 className="mt-6 text-xl font-semibold">{contact.title}</h3>
      <p className="text-muted-foreground mt-2">{contact.description}</p>
      <Link
        className="text-primary mt-4 font-medium"
        href={contact.link}
        target={contact.link.startsWith("http") ? "_blank" : undefined}
      >
        {contact.linkText.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < contact.linkText.split("\n").length - 1 && <br />}
          </span>
        ))}
      </Link>
    </div>
  );
};

export default ContactCard;
