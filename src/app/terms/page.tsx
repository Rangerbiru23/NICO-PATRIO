'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText, Droplets, Shield, AlertCircle, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="NICO PATRIO Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-blue-900">NICO PATRIO</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-600 font-medium">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Terms & Conditions Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan <span className="text-blue-600">NICO PATRIO</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di <strong>NICO PATRIO</strong>. Syarat & Ketentuan ini mengatur penggunaan 
                layanan air minum isi ulang yang kami sediakan. Dengan menggunakan layanan kami, 
                Anda setuju untuk mematuhi syarat dan ketentuan yang tercantum di bawah ini.
              </p>
              <p className="text-gray-700">
                <strong>NICO PATRIO</strong> berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                Perubahan akan berlaku efektif setelah diterbitkan di website kami.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-blue-600" />
                <span>Deskripsi Layanan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>NICO PATRIO</strong> menyediakan layanan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Air Minum Isi Ulang:</strong> Air murni melalui proses filtrasi 6 tahap</li>
                <li><strong>Pengantaran Rumah:</strong> Layanan antar ke alamat pelanggan</li>
                <li><strong>Membership:</strong> Program pelangganan dengan harga khusus</li>
                <li><strong>Konsultasi:</strong> Informasi tentang kualitas air dan kesehatan</li>
              </ul>
              <p className="text-gray-700">
                Semua air yang kami sediakan telah melalui proses quality control dan memenuhi 
                standar kesehatan yang ditetapkan oleh pemerintah.
              </p>
            </CardContent>
          </Card>

          {/* Customer Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Kewajiban Pelanggan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pelanggan <strong>NICO PATRIO</strong>, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap saat pendaftaran</li>
                <li>Memastikan alamat pengantaran dapat diakses dengan aman</li>
                <li>Menyediakan wadah yang bersih dan layak untuk air minum</li>
                <li>Melakukan pembayaran tepat waktu sesuai dengan harga yang berlaku</li>
                <li>Memberitahukan perubahan alamat atau kontak secara tertulis</li>
                <li> menggunakan air minum sesuai kebutuhan dan tidak untuk dijual kembali tanpa izin</li>
                <li>Menjaga kebersihan dan keamanan saat pengantaran</li>
              </ul>
            </CardContent>
          </Card>

          {/* Pricing and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Harga dan Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Struktur Harga</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Harga per liter: Rp 3.000 - Rp 5.000 (tergantung volume)</li>
                  <li>Biaya antar: Gratis untuk radius 5 km, Rp 5.000 - Rp 15.000 di luar radius</li>
                  <li>Membership: Diskon 10% untuk pelangganan bulanan</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Metode Pembayaran</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Tunai saat pengantaran</li>
                  <li>Transfer bank (BCA, Mandiri, BNI)</li>
                  <li>E-Wallet (GoPay, OVO, DANA)</li>
                  <li>Kartu kredit/debit (untuk membership)</li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                Harga dapat berubah sewaktu-waktu dengan pemberitahuan minimal 7 hari sebelumnya.
              </p>
            </CardContent>
          </Card>

          {/* Delivery Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Syarat Pengantaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Senin - Sabtu: 06:00 - 21:00</li>
                  <li>Minggu: 07:00 - 20:00</li>
                  <li>Pengantaran malam hari (setelah 20:00) dikenakan biaya tambahan Rp 10.000</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Kebijakan Pengantaran</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Pesanan diproses maksimal 2 jam setelah konfirmasi</li>
                  <li>Pengantaran terlambat karena faktor eksternal tidak dapat diklaim</li>
                  <li>Pelanggan harus berada di lokasi saat pengantaran</li>
                  <li>Pengantaran gagal karena pelanggan tidak ada di lokasi dikenakan biaya ulang</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quality Guarantee */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Garansi Kualitas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>NICO PATRIO</strong> menjamin:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Kemurnian Air:</strong> Air bebas dari kontaminasi dan memenuhi standar Kemenkes</li>
                <li><strong>Uji Lab Berkala:</strong> Kualitas air diuji setiap bulan oleh lab terakreditasi</li>
                <li><strong>Garansi Uang Kembali:</strong> Jika air tidak memenuhi standar kualitas</li>
                <li><strong>Penggantian:</strong> Air yang rusak atau terkontaminasi akan diganti gratis</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Klaim garansi harus diajukan maksimal 24 jam setelah pengantaran dengan bukti foto atau video.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span>Batasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>NICO PATRIO</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian yang disebabkan oleh penggunaan air yang tidak sesuai aturan</li>
                <li>Kontaminasi yang terjadi setelah pengantaran (penyimpanan yang salah)</li>
                <li>Keterlambatan pengantaran karena bencana alam, kemacetan, atau faktor eksternal lainnya</li>
                <li>Kerusakan properti pelanggan selama proses pengantaran (kecuali akibat kelalaian kami)</li>
                <li>Penyakit yang diderita pelanggan yang tidak terbukti disebabkan oleh air kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Terminasi Layanan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pelanggan dapat menghentikan layanan:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Kapan saja dengan pemberitahuan 3 hari sebelumnya</li>
                  <li>Tanpa denda untuk pelanggan reguler</li>
                  <li>Dengan denda 10% untuk membership yang berhenti di tengah periode</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">NICO PATRIO dapat menghentikan layanan jika:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Pelanggan melanggar syarat dan ketentuan</li>
                  <li>Pelanggan melakukan pelanggaran hukum</li>
                  <li>Pembayaran tertunggak lebih dari 30 hari</li>
                  <li>Pelanggan membahayakan keselamatan karyawan kami</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Penyelesaian Sengketa</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sengketa antara pelanggan dan <strong>NICO PATRIO</strong> akan diselesaikan melalui:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Negosiasi Musyawarah:</strong> Diskusi langsung antara kedua belah pihak</li>
                <li><strong>Mediasi:</strong> Menggunakan mediator netral jika perlu</li>
                <li><strong>Pengadilan:</strong> Pengadilan Negeri Ogan Komering Ulu sebagai yurisdiksi terakhir</li>
              </ol>
              <p className="text-gray-700">
                Hukum yang berlaku adalah hukum Republik Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Informasi Kontak</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, hubungi:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <strong>Perusahaan:</strong> NICO PATRIO
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> nicopatrio@outlook.co.id
                </p>
                <p className="text-gray-700">
                  <strong>Telepon:</strong> 0852-8570-3497
                </p>
                <p className="text-gray-700">
                  <strong>Alamat:</strong> DUSUN II, Desa/Kelurahan Lubuk Rukam, Kec. Peninjauan, 
                  Kab. Ogan Komering Ulu, Provinsi Sumatera Selatan
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <p className="text-gray-600 mb-4">
            Terima kasih atas kepercayaan Anda kepada <strong>NICO PATRIO</strong>. 
            Kami berkomitmen untuk menyediakan air minum berkualitas terbaik untuk Anda.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Kembali ke Beranda
            </Link>
            <Link 
              href="/privacy" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}