"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Shield,
  Phone,
  CheckCircle,
  TrendingUp,
  Heart,
  HelpCircle,
  Calculator,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  HeartPulse,
  GraduationCap,
  Calendar,
  FileText,
  Menu,
  X,
  ChevronDown,
  Award,
  Clock,
  Users,
  Target,
  Handshake,
  MessageCircle,
  MapPin,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- DATA ---------- */

const STATS = [
  { value: "20+", label: "Tahun Pengalaman", suffix: "" },
  { value: "500+", label: "Keluarga Terlindungi", suffix: "" },
  { value: "98%", label: "Klaim Disetujui", suffix: "" },
  { value: "50M+", label: "Total Klaim Cair (Rp)", suffix: "" },
];

const SERVICES = [
  {
    icon: Shield,
    title: "Asuransi Jiwa",
    desc: "Proteksi penghasilan keluarga hingga Rp 5 Miliar. Pastikan orang yang Anda cintai tetap terjaga secara finansial dalam situasi apapun.",
    highlight: "Hingga Rp 5M",
  },
  {
    icon: HeartPulse,
    title: "Kesehatan & Penyakit Kritis",
    desc: "Klaim tunai langsung saat terdiagnosis penyakit berat. Tidak perlu menunggu rawat inap atau kumpulkan kuitansi.",
    highlight: "Hingga Rp 2M",
  },
  {
    icon: GraduationCap,
    title: "Dana Pendidikan Anak",
    desc: "Jaminan biaya kuliah anak tetap tersedia meskipun terjadi hal tak terduga pada orang tua. Investasi masa depan yang pasti.",
    highlight: "Pasti Cair",
  },
  {
    icon: TrendingUp,
    title: "Perencanaan Pensiun",
    desc: "Bangun pendapatan pensiun mandiri 100% bebas pajak. Nikmati masa tua tanpa bergantung pada siapapun.",
    highlight: "Bebas Pajak",
  },
  {
    icon: UserCheck,
    title: "Estate Planning & Warisan",
    desc: "Transfer kekayaan langsung ke ahli waris tanpa proses sengketa. Perlindungan aset lintas generasi yang legal dan terstruktur.",
    highlight: "Tanpa Sengketa",
  },
  {
    icon: Calendar,
    title: "Review Polis Tahunan",
    desc: "Evaluasi polis gratis setiap tahun untuk memastikan proteksi Anda selalu sesuai dengan kebutuhan terkini. Tanpa biaya tambahan.",
    highlight: "Gratis",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritakan situasi dan kebutuhan keluarga Anda. Kami dengarkan tanpa tekanan, tanpa kewajiban.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Analisis Mendalam",
    desc: "Kami analisis gap proteksi, kebutuhan finansial, dan risiko spesifik keluarga Anda secara menyeluruh.",
    icon: Target,
  },
  {
    step: "03",
    title: "Solusi Personal",
    desc: "Rekomendasi produk yang tepat sesuai budget dan prioritas. Bukan produk termahal, tapi yang paling sesuai.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Proteksi Seumur Hidup",
    desc: "Pendampingan klaim, review tahunan, dan konsultasi kapanpun. Hubungan jangka panjang, bukan sekadar transaksi.",
    icon: Shield,
  },
];

const CASES = [
  {
    title: "Klaim Penyakit Kritis",
    client: "Ibu Sari, 42 thn, Pengusaha",
    situation:
      "Terdiagnosis kanker payudara stadium 2. Membutuhkan dana pengobatan segera dan pengganti penghasilan selama pemulihan.",
    result: "Klaim Rp 1,5 Miliar cair dalam 10 hari kerja.",
    impact:
      "Ibu Sari fokus pemulihan tanpa khawatir finansial. Bisnis tetap berjalan dengan dana cadangan.",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Dana Pendidikan Anak",
    client: "Keluarga Dewi, 2 anak",
    situation:
      "Suami meninggal mendadak. Dua anak masih SD dan SMP. Biaya sekolah dan kuliah menjadi beban berat.",
    result: "Dana pendidikan Rp 800 Juta tersedia otomatis.",
    impact:
      "Kedua anak tetap bersekolah di institusi pilihan tanpa hambatan finansial.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Pensiun Mandiri",
    client: "Bapak Hadi, 60 thn, Pensiunan",
    situation:
      "Mulai planning sejak usia 45 tahun. Kontribusi konsisten selama 15 tahun untuk membangun dana pensiun.",
    result: "Pendapatan pensiun Rp 15 Juta/bulan seumur hidup.",
    impact:
      "Pensiun mandiri tanpa bergantung pada anak. Menikmati traveling dan hobi dengan tenang.",
    color: "from-emerald-500 to-teal-600",
  },
];

const TESTIMONIALS = [
  {
    name: "Ibu Sari",
    role: "Pengusaha, Jakarta",
    quote:
      "Klaim Rp 1,5 Miliar cair dalam 10 hari. Pak Budi mengurus semuanya dari awal sampai akhir. Saya tidak perlu pusing sama sekali di saat paling sulit dalam hidup saya.",
    rating: 5,
    image: "/client-1.jpg",
  },
  {
    name: "Bapak Andi",
    role: "Direktur IT, Surabaya",
    quote:
      "Review tahunan gratis dari Pak Budi menyelamatkan keluarga saya dari gap proteksi yang tidak saya sadari. Profesional sekali pendekatannya.",
    rating: 5,
    image: "/client-2.jpg",
  },
  {
    name: "Keluarga Dewi",
    role: "Ibu Rumah Tangga, Bandung",
    quote:
      "Di saat paling berat, dana pendidikan anak kami tetap aman. Keputusan 5 tahun lalu untuk ambil polis ternyata menyelamatkan masa depan anak-anak kami.",
    rating: 5,
    image: "/assets/gallery-young.jpg",
  },
  {
    name: "Bapak Hadi",
    role: "Pensiunan, Yogyakarta",
    quote:
      "Pensiun mandiri berkat planning 15 tahun lalu bersama Pak Budi. Sekarang saya bisa traveling tanpa khawatir. Terima kasih atas kesabaran dan konsistensinya.",
    rating: 5,
    image: "/assets/gallery-retirement.jpg",
  },
  {
    name: "Ibu Rina",
    role: "Dokter Spesialis, Medan",
    quote:
      "Konsultasi gratis tapi insight-nya bernilai miliaran. Pak Budi benar-benar memahami kebutuhan spesifik profesi medis dan memberikan solusi yang tepat.",
    rating: 5,
    image: "/assets/trust-revamp.jpg",
  },
];

const FAQS = [
  {
    q: "Berapa lama proses klaim asuransi?",
    a: "Untuk klaim yang lengkap dokumennya, rata-rata proses memakan waktu 7-14 hari kerja. Kami mendampingi Anda dari pengajuan hingga pencairan, memastikan tidak ada dokumen yang terlewat.",
  },
  {
    q: "Apakah konsultasi benar-benar gratis?",
    a: "Ya, 100% gratis tanpa syarat. Konsultasi pertama berdurasi 30-60 menit untuk memahami kebutuhan Anda. Tidak ada kewajiban membeli produk apapun setelah konsultasi.",
  },
  {
    q: "Apa bedanya agen asuransi biasa dengan MDRT?",
    a: "MDRT (Million Dollar Round Table) adalah standar internasional untuk financial advisor terbaik di dunia. Hanya kurang dari 1% agen asuransi global yang memenuhi kualifikasi ini. Ini menjamin Anda ditangani oleh profesional berkualitas tinggi.",
  },
  {
    q: "Saya sudah punya asuransi, apakah masih perlu konsultasi?",
    a: "Sangat disarankan. Banyak klien kami yang ternyata memiliki gap proteksi signifikan di polis mereka. Review gratis tahunan memastikan proteksi Anda selalu up-to-date dengan perubahan kebutuhan hidup.",
  },
  {
    q: "Mulai dari berapa premi asuransi jiwa?",
    a: "Premi dimulai dari Rp 300.000/bulan tergantung usia, jumlah proteksi, dan kondisi kesehatan. Gunakan kalkulator kami untuk simulasi awal, atau hubungi langsung untuk perhitungan akurat.",
  },
];

const GALLERY = [
  "/assets/hero-revamp.jpg",
  "/assets/gallery-young.jpg",
  "/assets/gallery-retirement.jpg",
  "/assets/trust-revamp.jpg",
];

/* ---------- COMPONENT ---------- */

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    annualIncome: 120000000,
    monthlyExpenses: 10000000,
    dependents: 3,
    age: 35,
  });
  const [result, setResult] = useState<{
    coverage: string;
    premium: string;
  } | null>(null);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev < TESTIMONIALS.length - 1 ? prev + 1 : 0,
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const calculateCoverage = () => {
    const { annualIncome, monthlyExpenses, dependents, age } = formData;
    const coverage =
      annualIncome * 10 + dependents * 500000000 + monthlyExpenses * 12 * 20;
    const monthlyPremium = Math.round(coverage * 0.0005 * (1 + age / 100));
    setResult({
      coverage: coverage.toLocaleString("id-ID"),
      premium: monthlyPremium.toLocaleString("id-ID"),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value) || 0,
    });
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ========== NAVBAR ========== */}
      <nav className="fixed w-full z-50 glass border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-xl font-bold text-navy-900 tracking-tight">
              Sentosa<span className="text-gold-600">Life</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#layanan" className="hover:text-navy-900 transition">
              Layanan
            </a>
            <a href="#proses" className="hover:text-navy-900 transition">
              Proses
            </a>
            <a href="#testimoni" className="hover:text-navy-900 transition">
              Testimoni
            </a>
            <a href="#faq" className="hover:text-navy-900 transition">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCalculatorOpen(true)}
              className="hidden sm:inline-flex items-center bg-gradient-to-r from-navy-800 to-navy-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-navy-700 hover:to-navy-800 transition-all shadow-lg hover:shadow-navy-900/25"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Kalkulator Gratis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-100"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {["layanan", "proses", "testimoni", "faq"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition capitalize"
                  >
                    {id}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setCalculatorOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="mt-2 bg-navy-900 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
                >
                  Kalkulator Gratis
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden bg-gradient-to-b from-ivory via-white to-white">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-navy-100/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-6">
                <Award className="w-4 h-4 text-gold-600" />
                <span className="text-xs font-bold text-gold-700 tracking-wide uppercase">
                  MDRT Elite Partner -- Top 1% Global
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-900 mb-6 leading-[1.1]">
                Proteksi Finansial
                <br />
                untuk Keluarga{" "}
                <span className="text-gold-600 italic">Indonesia</span>
              </h1>

              <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-xl">
                Lebih dari sekadar polis asuransi.{" "}
                <strong className="text-navy-800">
                  Kami membangun benteng finansial
                </strong>{" "}
                untuk melindungi impian, pendidikan anak, dan masa depan keluarga
                Anda.
              </p>
              <p className="text-base text-slate-500 mb-8 max-w-xl">
                Dengan pengalaman 20+ tahun dan ratusan keluarga yang telah
                terlindungi, kami memahami bahwa setiap keluarga memiliki
                kebutuhan yang unik.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-7 py-3.5 rounded-xl font-bold text-base hover:from-gold-600 hover:to-gold-700 transition-all shadow-xl hover:shadow-gold-500/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Konsultasi Gratis via WhatsApp
                </a>
                <button
                  onClick={() => setCalculatorOpen(true)}
                  className="inline-flex items-center justify-center border-2 border-navy-800 text-navy-800 px-7 py-3.5 rounded-xl font-bold text-base hover:bg-navy-50 transition"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Hitung Kebutuhan Anda
                </button>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/hero-revamp.jpg"
                  alt="Keluarga bahagia terlindungi"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Klaim Terakhir</p>
                    <p className="font-bold text-navy-900">Rp 1,5 Miliar</p>
                    <p className="text-xs text-green-600 font-medium">
                      Cair 10 hari
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="py-10 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-navy-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT / PROFILE ========== */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/agent-profile.jpg"
                  alt="Budi Sentosa - Konsultan Asuransi"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 bg-gradient-to-br from-navy-800 to-navy-900 text-white p-5 rounded-2xl shadow-xl">
                <Award className="w-8 h-8 text-gold-400 mb-2" />
                <p className="font-bold text-lg">MDRT Qualified</p>
                <p className="text-sm text-navy-200">Sejak 2010</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="section-divider mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                Mengapa Keluarga Indonesia Mempercayakan Proteksi Kepada Kami?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Saya Budi Sentosa, konsultan asuransi jiwa bersertifikasi dengan
                pengalaman lebih dari 20 tahun. Perjalanan saya dimulai dari
                pengalaman pribadi kehilangan anggota keluarga tanpa proteksi
                yang memadai.
              </p>
              <p className="text-base text-slate-500 mb-8 leading-relaxed">
                Sejak saat itu, saya berkomitmen membantu setiap keluarga
                Indonesia memiliki proteksi finansial yang tepat. Bukan
                menjual produk termahal, tetapi memberikan solusi yang paling
                sesuai dengan kebutuhan dan kemampuan Anda.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "MDRT Elite Partner sejak 2010",
                  "500+ keluarga terlindungi",
                  "98% rasio klaim disetujui",
                  "Review polis gratis setiap tahun",
                  "Pendampingan klaim 24/7",
                  "Konsultasi tanpa tekanan",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center text-gold-600 font-bold hover:text-gold-700 transition group"
              >
                Hubungi saya sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="layanan" className="py-20 md:py-28 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Solusi Proteksi Lengkap
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Setiap produk dirancang khusus untuk kebutuhan keluarga Indonesia
              modern. Kami tidak menawarkan solusi generic -- setiap rekomendasi
              disesuaikan dengan situasi Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white p-7 rounded-2xl border border-slate-100 hover:border-gold-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl flex items-center justify-center group-hover:from-gold-50 group-hover:to-gold-100 transition-colors">
                    <service.icon className="w-7 h-7 text-navy-800 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section id="proses" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Proses yang Mudah & Transparan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dari konsultasi pertama hingga proteksi seumur hidup, kami
              memastikan setiap langkah jelas dan nyaman untuk Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <div className="bg-gradient-to-b from-navy-50 to-white p-7 rounded-2xl border border-slate-100 h-full">
                  <span className="text-5xl font-bold text-navy-100 block mb-4">
                    {step.step}
                  </span>
                  <step.icon className="w-8 h-8 text-gold-500 mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-navy-200">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="py-20 md:py-28 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Kisah Nyata Klien Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Di balik setiap polis ada cerita tentang keluarga yang terlindungi
              di saat paling membutuhkan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r ${c.color} p-6 text-white`}
                >
                  <h3 className="text-lg font-bold mb-1">{c.title}</h3>
                  <p className="text-sm text-white/80">{c.client}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Situasi
                    </p>
                    <p className="text-sm text-slate-600">{c.situation}</p>
                  </div>
                  <div className="mb-4 bg-green-50 p-3 rounded-xl">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">
                      Hasil
                    </p>
                    <p className="text-sm text-green-800 font-semibold">
                      {c.result}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Dampak
                    </p>
                    <p className="text-sm text-slate-600">{c.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section
        id="testimoni"
        className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-ivory"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Dipercaya Ratusan Keluarga
            </h2>
            <p className="text-lg text-slate-600">
              Suara langsung dari klien yang telah merasakan manfaat proteksi
              bersama kami.
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-3xl mx-auto"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg mb-6 ring-4 ring-gold-100">
                    <Image
                      src={TESTIMONIALS[currentTestimonial].image}
                      alt={TESTIMONIALS[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < TESTIMONIALS[currentTestimonial].rating
                            ? "text-gold-400 fill-gold-400"
                            : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-lg italic mb-6 leading-relaxed max-w-xl">
                    &ldquo;{TESTIMONIALS[currentTestimonial].quote}&rdquo;
                  </p>
                  <p className="font-bold text-navy-900 text-lg">
                    {TESTIMONIALS[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {TESTIMONIALS[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev > 0 ? prev - 1 : TESTIMONIALS.length - 1,
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white hover:bg-slate-50 p-3 rounded-full shadow-lg transition hidden md:block"
            >
              <ChevronLeft className="w-5 h-5 text-navy-800" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev < TESTIMONIALS.length - 1 ? prev + 1 : 0,
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white hover:bg-slate-50 p-3 rounded-full shadow-lg transition hidden md:block"
            >
              <ChevronRight className="w-5 h-5 text-navy-800" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentTestimonial
                      ? "bg-gold-500 w-8"
                      : "bg-slate-300 w-2.5 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Momen Bersama Klien
            </h2>
            <p className="text-lg text-slate-600">
              Membangun hubungan jangka panjang, bukan sekadar transaksi.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((img, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Momen klien ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-sm font-bold">
                    Keluarga Terlindungi
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 md:py-28 px-4 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-slate-600">
              Jawaban transparan untuk pertanyaan umum seputar asuransi dan
              layanan kami.
            </p>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-navy-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,151,62,0.1),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Jangan Tunda Proteksi
              <br />
              untuk Orang yang Anda{" "}
              <span className="text-gold-400 italic">Cintai</span>
            </h2>
            <p className="text-lg text-navy-200 mb-4 max-w-2xl mx-auto">
              Setiap hari tanpa proteksi adalah risiko yang tidak perlu.
              Konsultasi pertama 100% gratis, tanpa kewajiban, dan tanpa
              tekanan.
            </p>
            <p className="text-base text-navy-300 mb-10 max-w-xl mx-auto">
              Cukup 30 menit konsultasi untuk mengetahui apakah proteksi
              keluarga Anda sudah memadai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Pak%20Budi,%20saya%20ingin%20konsultasi%20gratis"
                className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-gold-600 hover:to-gold-700 transition-all shadow-xl hover:shadow-gold-500/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Mulai Konsultasi Gratis
              </a>
              <button
                onClick={() => setCalculatorOpen(true)}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Coba Kalkulator
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CALCULATOR MODAL ========== */}
      <AnimatePresence>
        {calculatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setCalculatorOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center">
                  <Calculator className="w-7 h-7 mr-3 text-gold-500" />
                  Simulasi Proteksi
                </h2>
                <button
                  onClick={() => setCalculatorOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-xl transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-500 mb-6">
                Hitung estimasi kebutuhan proteksi keluarga Anda dalam 30 detik.
                Gratis, tanpa kewajiban.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Pendapatan Tahunan (Rp)
                  </label>
                  <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Pengeluaran Bulanan (Rp)
                  </label>
                  <input
                    type="number"
                    name="monthlyExpenses"
                    value={formData.monthlyExpenses}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Jumlah Tanggungan
                    </label>
                    <input
                      type="number"
                      name="dependents"
                      value={formData.dependents}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Usia Anda
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 transition text-sm"
                    />
                  </div>
                </div>
                <button
                  onClick={calculateCoverage}
                  className="w-full bg-gradient-to-r from-navy-800 to-navy-900 text-white py-3.5 rounded-xl font-bold hover:from-navy-700 hover:to-navy-800 transition-all shadow-lg"
                >
                  Hitung Rekomendasi
                </button>

                {result && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-gold-50 to-navy-50 border border-gold-200 p-5 rounded-2xl"
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      Rekomendasi Proteksi Anda
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">
                          Uang Pertanggungan
                        </span>
                        <span className="font-bold text-navy-900">
                          Rp {result.coverage}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">
                          Estimasi Premi/Bulan
                        </span>
                        <span className="font-bold text-gold-600">
                          Rp {result.premium}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 italic">
                      *Simulasi sederhana. Hubungi kami untuk perhitungan akurat
                      sesuai kondisi Anda.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500 mb-3">
                  Ingin hasil yang lebih akurat? Konsultasi gratis 30 menit.
                </p>
                <a
                  href="https://wa.me/6281234567890?text=Saya%20sudah%20coba%20kalkulator,%20mau%20konsultasi%20lebih%20lanjut"
                  className="inline-flex items-center bg-gold-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gold-600 transition shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Sekarang
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== FOOTER ========== */}
      <footer className="bg-navy-950 text-navy-300 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-navy-700 to-navy-800 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold-400" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Sentosa<span className="text-gold-500">Life</span>
                </span>
              </div>
              <p className="text-sm text-navy-400 mb-4 max-w-sm leading-relaxed">
                Konsultan asuransi jiwa terpercaya dengan pengalaman 20+ tahun
                melindungi keluarga Indonesia. MDRT Elite Partner yang
                mengutamakan kebutuhan klien di atas segalanya.
              </p>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-500" />
                <span className="text-xs text-gold-400 font-medium">
                  MDRT Qualified Member
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Navigasi
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Layanan", href: "#layanan" },
                  { label: "Proses Kerja", href: "#proses" },
                  { label: "Testimoni", href: "#testimoni" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-400 hover:text-gold-400 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Hubungi Kami
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gold-500" />
                  <a
                    href="https://wa.me/6281234567890"
                    className="hover:text-gold-400 transition"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gold-500" />
                  <a
                    href="mailto:budi@sentosalife.id"
                    className="hover:text-gold-400 transition"
                  >
                    budi@sentosalife.id
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-navy-500">
              &copy; 2026 SentosaLife. All rights reserved.
            </p>
            <p className="text-xs text-navy-600 max-w-md text-center sm:text-right">
              Disclaimer: Informasi di situs ini bersifat edukatif. Hubungi kami
              untuk konsultasi personal sesuai kebutuhan spesifik Anda.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
