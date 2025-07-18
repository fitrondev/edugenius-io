import {
  Award,
  BookOpen,
  Clock,
  LucideIcon,
  MessageCircle,
  Users,
  Video,
} from "lucide-react";

export interface NavigationItem {
  href: string;
  label: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const navigationData: NavigationItem[] = [
  { href: "/#features", label: "Features" },
  { href: "/courses", label: "Courses" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export const featuresData: FeatureItem[] = [
  {
    icon: BookOpen,
    title: "Materi Berkualitas",
    description:
      "Akses ribuan materi pembelajaran yang disusun oleh para ahli di bidangnya dengan kurikulum terkini.",
  },
  {
    icon: Clock,
    title: "Belajar Fleksibel",
    description:
      "Belajar kapan saja dan dimana saja sesuai dengan jadwal dan kecepatan belajar kamu sendiri.",
  },
  {
    icon: Users,
    title: "Komunitas Aktif",
    description:
      "Bergabung dengan komunitas pembelajar yang saling mendukung dan berbagi pengalaman.",
  },
  {
    icon: Award,
    title: "Sertifikat Resmi",
    description:
      "Dapatkan sertifikat yang diakui industri setelah menyelesaikan kursus dengan baik.",
  },
  {
    icon: Video,
    title: "Video HD",
    description:
      "Nikmati pengalaman belajar dengan video berkualitas tinggi dan audio yang jernih.",
  },
  {
    icon: MessageCircle,
    title: "Mentor Support",
    description:
      "Dapatkan bimbingan langsung dari mentor berpengalaman untuk membantu perjalanan belajar kamu.",
  },
];
