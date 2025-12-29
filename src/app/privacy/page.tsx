'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Eye, Lock, User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
              <Link href="/privacy" className="text-blue-600 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-blue-600">NICO PATRIO</span>
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
                <Eye className="w-5 h-5 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Di <strong>NICO PATRIO</strong>, kami komitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi 
                pribadi yang Anda berikan saat menggunakan layanan air minum isi ulang kami.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan kami, Anda menyetujui praktik pengumpulan dan penggunaan data yang 
                dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span>Informasi yang Kami Kumpulkan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon</li>
                  <li>Alamat email</li>
                  <li>Alamat pengantaran</li>
                  <li>Informasi pembayaran</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Informasi Penggunaan Layanan</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Riwayat pesanan</li>
                  <li>Jenis dan jumlah air yang dipesan</li>
                  <li>Jadwal pengantaran</li>
                  <li>Preferensi layanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <span>Penggunaan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami menggunakan informasi yang Anda berikan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Menyediakan Layanan:</strong> Memproses pesanan dan mengatur pengantaran air minum ke lokasi Anda</li>
                <li><strong>Komunikasi:</strong> Menghubungi Anda mengenai pesanan, jadwal pengantaran, dan informasi layanan</li>
                <li><strong>Penyempurnaan Layanan:</strong> Menganalisis kebutuhan pelanggan untuk meningkatkan kualitas layanan</li>
                <li><strong>Keamanan:</strong> Memverifikasi identitas dan mencegah penipuan</li>
                <li><strong>Promosi:</strong> Memberikan informasi tentang penawaran khusus dan layanan baru (dengan persetujuan Anda)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Keamanan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>NICO PATRIO</strong> mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi bagi karyawan yang berwenang</li>
                <li>Sistem keamanan fisik untuk melindungi dokumen kertas</li>
                <li>Backup data teratur untuk mencegah kehilangan informasi</li>
                <li>Update keamanan sistem secara berkala</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Pembagian Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                untuk keperluan pemasaran tanpa persetujuan Anda. Informasi Anda hanya akan dibagikan dalam:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Penyedia Layanan Pengantaran:</strong> Untuk memproses pengantaran pesanan Anda</li>
                <li><strong>Bank/Penyedia Pembayaran:</strong> Untuk memproses transaksi pembayaran</li>
                <li><strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan</li>
                <li><strong>Partner Bisnis:</strong> Dengan persetujuan tertulis dari Anda</li>
              </ul>
            </CardContent>
          </Card>

          {/* Customer Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span>Hak Anda sebagai Pelanggan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pelanggan <strong>NICO PATRIO</strong>, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Mengakses Data:</strong> Meminta salinan informasi pribadi yang kami simpan</li>
                <li><strong>Mengoreksi Data:</strong> Memperbarui informasi pribadi yang tidak akurat</li>
                <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi (dengan batasan tertentu)</li>
                <li><strong>Menolak Pemasaran:</strong> Menolak menerima komunikasi pemasaran dari kami</li>
                <li><strong>Portabilitas Data:</strong> Meminta transfer data ke layanan lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, 
                silakan hubungi <strong>NICO PATRIO</strong> melalui:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
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
              <p className="text-gray-700">
                Kami akan merespons permintaan Anda dalam waktu maksimal 7 hari kerja.
              </p>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Perubahan Kebijakan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>NICO PATRIO</strong> dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Pemberitahuan di website kami</li>
                <li>Email kepada pelanggan terdaftar</li>
                <li>Pemberitahuan langsung saat transaksi</li>
              </ul>
              <p className="text-gray-700">
                Penggunaan layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <p className="text-gray-600 mb-4">
            Terima kasih telah mempercayai <strong>NICO PATRIO</strong> sebagai mitra air minum sehat keluarga Anda.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Kembali ke Beranda
            </Link>
            <Link 
              href="/terms" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}