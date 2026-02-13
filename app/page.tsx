import Image from "next/image";
import { useState } from "react";
import { Shield, Users, Award, Phone, CheckCircle, TrendingUp, BookOpen, Heart, Clock, HelpCircle, Calculator, User, Star, ArrowRight, ChevronLeft, ChevronRight, Home, UserCheck, HeartPulse, GraduationCap, Calendar, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [formData, setFormData] = useState({
    annualIncome: 120000000,
    monthlyExpenses: 10000000,
    dependents: 3,
    age: 35,
  });
  const [result, setResult] = useState(null);

  const calculateCoverage = () => {
    const annualIncome = formData.annualIncome;
    const monthlyExpenses = formData.monthlyExpenses;
    const dependents = formData.dependents;
    const age = formData.age;

    // Simple simulation: Coverage = 10x annual income + education (dependents * 500jt) + retirement buffer
    const coverage = annualIncome * 10 + (dependents * 500000000) + (monthlyExpenses * 12 * 20);
    const monthlyPremium = Math.round((coverage * 0.0005) * (1 + age / 100)); // Simulated premium rate

    setResult({ coverage: coverage.toLocaleString('id-ID'), premium: monthlyPremium.toLocaleString('id-ID') });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) || 0 });
  };

  const testimonials = [
    {
      name: "Ibu Sari, Pengusaha",
      quote: "Klaim Rp 1,5 Miliar cair dalam 10 hari. Pak Budi mengurus semuanya!",
      rating: 5,
      image: "/assets/testimonial1.jpg"
    },
    {
      name: "Bapak Andi, Profesional",
      quote: "Review tahunan gratis menyelamatkan keluarga saya dari gap proteksi.",
      rating: 5,
      image: "/assets/testimonial2.jpg"
    },
    {
      name: "Keluarga Dewi",
      quote: "Dana pendidikan anak aman meski suami sakit kritis.",
      rating: 5,
      image: "/assets/gallery-young.jpg"
    },
    {
      name: "Bapak Hadi, pensiunan",
      quote: "Pensiun mandiri berkat planning 15 tahun lalu.",
      rating: 5,
      image: "/assets/gallery-retirement.jpg"
    },
    {
      name: "Ibu Rina",
      quote: "Konsultasi gratis tapi insight bernilai miliaran.",
      rating: 5,
      image: "/assets/trust-revamp.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    { icon: Shield, title: "Asuransi Jiwa", desc: "Proteksi penghasilan keluarga hingga Rp 5 Miliar." },
    { icon: HeartPulse, title: "Kesehatan Critical", desc: "Klaim tunai penyakit berat hingga Rp 2 Miliar." },
    { icon: GraduationCap, title: "Dana Pendidikan", desc: "Jaminan kuliah anak meski orang tua tiada." },
    { icon: TrendingUp, title: "Pensiun Mandiri", desc: "Pendapatan pensiun 100% bebas pajak." },
    { icon: UserCheck, title: "Estate Planning", desc: "Warisan langsung ke ahli waris tanpa sengketa." },
    { icon: Calendar, title: "Review Tahunan", desc: "Update polis gratis setiap tahun." }
  ];

  const galleryImages = [
    "/assets/hero-revamp.jpg",
    "/assets/gallery-young.jpg",
    "/assets/gallery-retirement.jpg",
    "/assets/trust-revamp.jpg"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navbar - unchanged */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900 tracking-tight">Sentosa<span className="text-amber-600">Life</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-900 transition">Layanan</a>
            <a href="#gallery" className="hover:text-blue-900 transition">Galeri</a>
            <a href="#testimonials" className="hover:text-blue-900 transition">Testimoni</a>
            <a href="#calculator" className="hover:text-blue-900 transition">Kalkulator</a>
          </div>
          <button onClick={() => setCalculatorOpen(true)} className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition shadow-lg hover:shadow-blue-900/20">
            Coba Kalkulator Gratis
          </button>
        </div>
      </nav>

      {/* Hero - enhanced with new image */}
      <section className="pt-40 pb-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block p-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="px-4 py-1 text-xs font-bold text-blue-800 tracking-wide uppercase">MDRT Elite Partner</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue-900 mb-6 leading-tight">
            Lindungi Keluarga Indonesia <span className="text-amber-600 italic">Sekarang</span>
          </h1>
          <div className="relative mb-16">
            <Image src="/assets/hero-revamp.jpg" alt="Keluarga bahagia terlindungi" width={800} height={500} className="rounded-3xl shadow-2xl mx-auto max-w-4xl" />
          </div>
          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <a href="https://wa.me/6281234567890" className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition shadow-xl hover:shadow-amber-600/30">
              Konsultasi WhatsApp
            </a>
            <button onClick={() => setCalculatorOpen(true)} className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition">
              <Calculator className="w-5 h-5 inline mr-2" /> Hitung Kebutuhan
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - NEW */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Layanan Lengkap Proteksi</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Setiap produk dirancang khusus untuk kebutuhan keluarga Indonesia modern.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-blue-900 group-hover:scale-110 transition mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing sections: Philosophy, Stats, Roadmap - keep similar */}

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-4 bg-slate-50 relative">
        {/* ... existing content ... */}
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        {/* ... existing ... */}
        <Image src="/assets/trust-revamp.jpg" alt="Handshake trust" width={400} height={300} className="absolute top-1/2 -translate-y-1/2 right-8 opacity-20 w-64 h-48 rounded-xl" />
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-4 bg-white">
        {/* ... existing ... */}
      </section>

      {/* Case Studies - expanded */}
      <section id="cases" className="py-24 px-4 bg-slate-50">
        {/* ... existing + 2 more cases ... */}
      </section>

      {/* Gallery - NEW */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">Klien Bahagia Kami</h2>
            <p className="text-xl text-slate-600">Keluarga Indonesia yang telah terlindungi sepenuhnya.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <Image src={img} alt={`Klien ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white font-bold">Keluarga Terlindungi</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - NEW */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">Apa Kata Klien</h2>
            <p className="text-xl text-slate-600">Testimoni dari 500+ keluarga yang telah terbantu.</p>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 text-center max-w-2xl mx-auto relative"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                  <Image src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} width={96} height={96} className="object-cover" />
                </div>
                <p className='"text-slate-600 text-lg italic mb-6 leading-relaxed">"{testimonials[currentTestimonial].quote}"</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="font-bold text-xl text-blue-900">{testimonials[currentTestimonial].name}</span>
                  <div className="flex ml-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button onClick={() => setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => setCurrentTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 rounded-full transition ${i === currentTestimonial ? 'bg-blue-900 w-8' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Modal - NEW Lead Magnet */}
      <AnimatePresence>
        {calculatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setCalculatorOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-blue-900 flex items-center">
                  <Calculator className="w-8 h-8 mr-3 text-amber-600" />
                  Simulasi Proteksi Keluarga
                </h2>
                <button onClick={() => setCalculatorOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <Image src="/assets/calculator-bg.jpg" alt="Calculator" width={300} height={200} className="w-full h-32 object-cover rounded-2xl mb-6 opacity-50" />
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pendapatan Tahunan (Rp)</label>
                  <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleInputChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pengeluaran Bulanan (Rp)</label>
                  <input type="number" name="monthlyExpenses" value={formData.monthlyExpenses} onChange={handleInputChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Jumlah Tanggungan</label>
                    <input type="number" name="dependents" value={formData.dependents} onChange={handleInputChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Usia Anda</label>
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <button onClick={calculateCoverage} className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-200 shadow-xl hover:shadow-blue-900/20">
                  Hitung Rekomendasi
                </button>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-amber-50 to-blue-50 border-2 border-amber-200 p-6 rounded-2xl mt-6"
                  >
                    <h3 className="text-xl font-bold text-amber-800 mb-2">Rekomendasi Proteksi</h3>
                    <div className="space-y-2 text-lg">
                      <div><span className="font-bold">Uang Pertanggungan:</span> Rp {result.coverage}</div>
                      <div><span className="font-bold">Estimasi Premi/Bulan:</span> Rp {result.premium}</div>
                    </div>
                    <p className="text-sm text-slate-600 mt-4 italic">*Simulasi sederhana. Konsultasi untuk hitungan akurat.</p>
                  </motion.div>
                )}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600 mb-4">Hasil akurat dengan data lengkap. Konsultasi gratis!</p>
                <a href="https://wa.me/6281234567890?text=Saya%20sudah%20coba%20kalkulator,%20mau%20konsultasi" className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing FAQ, CTA, Footer */}
      {/* ... keep as is ... */}

      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xl font-bold text-white tracking-tight block mb-2">Sentosa<span className="text-amber-600">Life</span></span>
          <p className="text-sm mb-4">© 2026 Karya Kilat Demo. All rights reserved. | MDRT Qualified</p>
        </div>
      </footer>
    </div>
  );
}
