import {
  Award,
  BookOpen,
  Clock,
  LucideIcon,
  MessageCircle,
  Users,
  Video,
  Code,
  Palette,
  BarChart,
  Camera,
  Globe,
  Smartphone,
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

export interface CourseItem {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: string;
  rating: number;
  students: number;
  icon: LucideIcon;
  image?: string;
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

export const coursesData: CourseItem[] = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Pelajari dasar-dasar pengembangan web dengan HTML, CSS, dan JavaScript dari nol hingga mahir.",
    instructor: "John Doe",
    duration: "12 minggu",
    level: "Pemula",
    price: "Rp 299.000",
    rating: 4.8,
    students: 1250,
    icon: Code,
  },
  {
    id: "2",
    title: "UI/UX Design Mastery",
    description: "Kuasai seni desain antarmuka dan pengalaman pengguna dengan tools modern seperti Figma dan Adobe XD.",
    instructor: "Jane Smith",
    duration: "10 minggu",
    level: "Menengah",
    price: "Rp 399.000",
    rating: 4.9,
    students: 890,
    icon: Palette,
  },
  {
    id: "3",
    title: "Data Analytics with Python",
    description: "Analisis data menggunakan Python, Pandas, dan visualisasi data untuk mengambil keputusan bisnis.",
    instructor: "Mike Johnson",
    duration: "14 minggu",
    level: "Menengah",
    price: "Rp 449.000",
    rating: 4.7,
    students: 675,
    icon: BarChart,
  },
  {
    id: "4",
    title: "Digital Photography",
    description: "Pelajari teknik fotografi digital, komposisi, pencahayaan, dan editing untuk hasil foto profesional.",
    instructor: "Sarah Wilson",
    duration: "8 minggu",
    level: "Pemula",
    price: "Rp 249.000",
    rating: 4.6,
    students: 1100,
    icon: Camera,
  },
  {
    id: "5",
    title: "Digital Marketing Strategy",
    description: "Strategi pemasaran digital lengkap termasuk SEO, SEM, social media marketing, dan content marketing.",
    instructor: "David Brown",
    duration: "16 minggu",
    level: "Lanjutan",
    price: "Rp 549.000",
    rating: 4.8,
    students: 520,
    icon: Globe,
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Bangun aplikasi mobile native dan cross-platform menggunakan React Native dan Flutter.",
    instructor: "Lisa Chen",
    duration: "18 minggu",
    level: "Lanjutan",
    price: "Rp 599.000",
    rating: 4.9,
    students: 430,
    icon: Smartphone,
  },
];
