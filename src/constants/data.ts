import {
  Award,
  BarChart,
  BookOpen,
  Camera,
  Clock,
  Code,
  Globe,
  LucideIcon,
  MessageCircle,
  Palette,
  Smartphone,
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

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
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
    description:
      "Pelajari dasar-dasar pengembangan web dengan HTML, CSS, dan JavaScript dari nol hingga mahir.",
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
    description:
      "Kuasai seni desain antarmuka dan pengalaman pengguna dengan tools modern seperti Figma dan Adobe XD.",
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
    description:
      "Analisis data menggunakan Python, Pandas, dan visualisasi data untuk mengambil keputusan bisnis.",
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
    description:
      "Pelajari teknik fotografi digital, komposisi, pencahayaan, dan editing untuk hasil foto profesional.",
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
    description:
      "Strategi pemasaran digital lengkap termasuk SEO, SEM, social media marketing, dan content marketing.",
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
    description:
      "Bangun aplikasi mobile native dan cross-platform menggunakan React Native dan Flutter.",
    instructor: "Lisa Chen",
    duration: "18 minggu",
    level: "Lanjutan",
    price: "Rp 599.000",
    rating: 4.9,
    students: 430,
    icon: Smartphone,
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Ahmad Rizki",
    role: "Frontend Developer",
    company: "Tech Startup",
    content:
      "EduGenius benar-benar mengubah karir saya! Materi yang disajikan sangat komprehensif dan mudah dipahami. Sekarang saya bekerja sebagai Frontend Developer di startup teknologi.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Sari Indah",
    role: "UI/UX Designer",
    company: "Creative Agency",
    content:
      "Kursus UI/UX Design di EduGenius sangat detail dan praktis. Mentor yang berpengalaman dan komunitas yang supportif membuat proses belajar menjadi menyenangkan.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Budi Santoso",
    role: "Data Analyst",
    company: "E-commerce Company",
    content:
      "Sebagai pemula di bidang data analytics, EduGenius memberikan fondasi yang kuat. Materinya up-to-date dan langsung applicable di dunia kerja.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Maya Putri",
    role: "Digital Marketer",
    company: "Marketing Agency",
    content:
      "Strategi digital marketing yang diajarkan sangat comprehensive. Dari SEO hingga social media marketing, semuanya dijelaskan dengan detail dan contoh real case.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Andi Wijaya",
    role: "Mobile Developer",
    company: "Fintech Startup",
    content:
      "Kursus mobile development sangat membantu saya transition dari web ke mobile development. Sekarang saya confident untuk develop aplikasi mobile yang complex.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "Dewi Lestari",
    role: "Photographer",
    company: "Freelancer",
    content:
      "Kursus fotografi digital memberikan insight baru tentang teknik dan komposisi. Portfolio saya meningkat drastis dan klien semakin banyak yang tertarik.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];
