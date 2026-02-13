import Image from "next/image";
import { Shield, Users, Award, Phone, CheckCircle, TrendingUp, BookOpen, Heart, Clock, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900 tracking-tight">Sentosa<span className="text-amber-600">Life</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#philosophy" className="hover:text-blue-900 transition">Filosofi</a>
            <a href="#services" className="hover:text-blue-900 transition">Layanan</a>
            <a href="#roadmap" className="hover:text-blue-900 transition">Roadmap</a>
            <a href="#cases" className="hover:text-blue-900 transition">Studi Kasus</a>
          </div>
          <a href="https://wa.me/" className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition shadow-lg hover:shadow-blue-900/20">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block p-1 rounded-full bg-blue-50 border border-blue-100 mb-8 animate-fade-in-up">
            <span className="px-4 py-1 text-xs font-bold text-blue-800 tracking-wide uppercase">Elite MDRT Partner</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue-900 mb-6 leading-tight">
            Melindungi Lebih Dari Sekadar <span className="text-amber-600 italic">Aset</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Saya membantu keluarga Indonesia membangun benteng finansial yang kokoh, memastikan warisan cinta tetap hidup melintasi generasi.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 transition shadow-xl hover:shadow-amber-600/30 flex items-center justify-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Jadwalkan Konsultasi Strategis
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              Pelajari Filosofi Saya
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            {/* Logos placeholder */}
            <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100">
               <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">"Asuransi bukan tentang kematian, tapi tentang kehidupan yang terus berjalan."</h3>
               <p className="text-slate-600 italic">- Budi Santoso</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Filosofi Saya</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Lebih Dari Sekadar Agen Penjual</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Banyak orang membeli polis tanpa memahami isinya. Filosofi saya berbeda. Saya percaya pada <strong>Edukasi Sebelum Transaksi</strong>. 
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Saya memposisikan diri sebagai <em>Partner Kehidupan</em>. Tugas saya bukan hanya saat Anda tanda tangan kontrak, tapi saat klaim dibutuhkan di tengah malam, saat anak Anda masuk kuliah, dan saat Anda menikmati masa pensiun.
            </p>
            <ul className="space-y-4">
              {[
                "Transparansi total mengenai manfaat & pengecualian",
                "Review polis tahunan untuk menyesuaikan kebutuhan",
                "Bantuan klaim prioritas 24/7 untuk nasabah"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-blue-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-blue-900" /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800">
            <div className="p-4">
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-blue-200 font-medium">Tahun Pengalaman</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold text-amber-400 mb-2">MDRT</div>
              <div className="text-blue-200 font-medium">Life Member (Top 1%)</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold text-amber-400 mb-2">Rp 50M+</div>
              <div className="text-blue-200 font-medium">Klaim Terbayarkan</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-blue-200 font-medium">Keluarga Terlindungi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap to Financial Freedom */}
      <section id="roadmap" className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">The Framework</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Peta Jalan Kebebasan Finansial</h3>
          <p className="text-slate-600">Kami tidak menjual produk acak. Kami membangun struktur perlindungan bertahap.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-xl">FASE 1</div>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
              <Shield className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Fondasi Keamanan</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Fokus pada proteksi penghasilan dan kesehatan. Memastikan jika risiko terjadi, aset yang ada tidak tergerus.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Asuransi Kesehatan Cashless</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Proteksi Penyakit Kritis</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-bl-xl">FASE 2</div>
            <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Akumulasi Aset</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Mempersiapkan dana untuk tujuan spesifik masa depan dengan instrumen yang terukur dan aman.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Dana Pendidikan Anak</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Dana Pensiun Mandiri</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-xl">FASE 3</div>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
              <Users className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Distribusi Warisan</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Memastikan aset berpindah ke generasi berikutnya secara utuh, cepat, dan bebas sengketa hukum.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Paper Asset (Polis Jiwa)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Estate Planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies (Anonymous) */}
      <section id="cases" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-blue-900 mb-16">Studi Kasus Nyata</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-full text-red-600"><Heart className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Klaim Critical Illness Rp 2 Miliar</h4>
                  <p className="text-sm text-slate-500">Bapak A, Pengusaha (45 Tahun)</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Klien terdiagnosa kanker stadium awal. Berkat polis yang kami rancang 3 tahun lalu, dana tunai Rp 2 Miliar cair dalam 14 hari kerja. Dana ini digunakan untuk berobat ke Singapura tanpa mengganggu arus kas bisnisnya.
              </p>
              <div className="bg-white p-4 rounded-xl text-sm font-medium text-slate-700 border-l-4 border-amber-500">
                "Pak Budi mengurus semuanya. Saya hanya fokus sembuh."
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full text-green-600"><BookOpen className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Dana Kuliah Kedokteran Terjamin</h4>
                  <p className="text-sm text-slate-500">Keluarga Ibu S (Orang Tua Tunggal)</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Suami Ibu S meninggal mendadak karena serangan jantung. Polis asuransi jiwa yang kami siapkan mencairkan Uang Pertanggungan yang cukup untuk melunasi KPR dan deposito dana pendidikan anak hingga lulus spesialis.
              </p>
              <div className="bg-white p-4 rounded-xl text-sm font-medium text-slate-700 border-l-4 border-amber-500">
                "Terima kasih sudah memaksa kami mengambil polis ini 5 tahun lalu."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded FAQ */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            <FaqItem 
              question="Apakah premi asuransi akan hangus jika tidak ada klaim?"
              answer="Tergantung jenis produknya. Untuk asuransi murni (Term Life), ya hangus demi proteksi maksimal dengan biaya minimal. Namun untuk Unit Link atau Endowment, ada nilai tunai yang terbentuk. Mari kita hitung mana yang paling efisien untuk tujuan Anda."
            />
            <FaqItem 
              question="Saya sudah punya BPJS, apakah butuh asuransi swasta?"
              answer="BPJS sangat bagus untuk dasar. Asuransi swasta memberikan kenyamanan (kamar VIP/VVIP), kecepatan (tanpa rujukan berjenjang), dan akses ke obat-obatan/teknologi terbaru yang mungkin belum di-cover BPJS. Keduanya saling melengkapi."
            />
            <FaqItem 
              question="Berapa idealnya Uang Pertanggungan Jiwa yang saya butuhkan?"
              answer="Rumus dasarnya adalah: Pengeluaran Bulanan x 12 bulan x 10 tahun. Jika pengeluaran keluarga Rp 20 juta/bulan, maka Anda butuh minimal Rp 2,4 Miliar. Ini memastikan keluarga bisa bertahan hidup dengan standar yang sama selama 10 tahun jika pencari nafkah tiada."
            />
            <FaqItem 
              question="Apakah proses klaim sulit?"
              answer="Klaim menjadi sulit jika: data awal tidak jujur (pre-existing condition disembunyikan) atau dokumen tidak lengkap. Sebagai konsultan Anda, saya melakukan 'pre-underwriting' di awal untuk meminimalisir risiko penolakan klaim di masa depan."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-blue-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Masa Depan Keluarga Anda <br/>Terlalu Berharga Untuk Spekulasi</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
              Mari luangkan waktu 30 menit untuk "Financial Check-up" gratis. Tanpa komitmen membeli. Hanya diskusi jujur tentang keamanan finansial Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/" className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 transition hover:scale-105 transform duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi via WhatsApp
              </a>
              <button className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                <Clock className="w-5 h-5 mr-2" />
                Jadwal Zoom Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-tight block mb-2">Sentosa<span className="text-amber-600">Life</span></span>
            <p className="text-sm">Partner Perencanaan Warisan & Proteksi Keluarga.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Disclaimer</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-xs">© 2024 Budi Santoso. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  )
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  return (
    <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
      <summary className="flex justify-between items-center font-bold text-slate-800 p-6 cursor-pointer list-none">
        <span>{question}</span>
        <span className="transition-transform group-open:rotate-180">
          <HelpCircle className="w-5 h-5 text-blue-900" />
        </span>
      </summary>
      <div className="text-slate-600 px-6 pb-6 leading-relaxed border-t border-slate-50 pt-4">
        {answer}
      </div>
    </details>
  )
}
