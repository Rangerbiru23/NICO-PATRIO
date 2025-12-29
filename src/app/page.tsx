'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Droplets, Shield, Truck, Clock, Users, CheckCircle, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="NICO PATRIO Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-blue-900">NICO PATRIO</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Droplets className="w-4 h-4 mr-2" />
              Air Minum Isi Ulang Berkualitas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">NICO PATRIO</span>
              <br />
              Solusi Air Minum Sehat Keluarga Anda
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Menyediakan air minum isi ulang berkualitas tinggi dengan proses filtrasi modern 
              untuk menjamin kemurnian dan kesehatan air yang Anda konsumsi setiap hari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3">
                <MapPin className="w-5 h-5 mr-2" />
                Kunjungi Lokasi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">NICO PATRIO</span>?
              </h2>
              <p className="text-gray-600 mb-6">
                <strong>NICO PATRIO</strong> adalah bisnis air minum isi ulang yang berkomitmen 
                untuk menyediakan air berkualitas tertinggi bagi masyarakat Peninjauan dan sekitarnya. 
                Dengan teknologi filtrasi terkini dan proses quality control yang ketat, 
                kami menjamin setiap tetes air yang kami hasilkan aman dan sehat untuk dikonsumsi.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Proses filtrasi 6 tahap untuk kemurnian maksimal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Harga terjangkau untuk semua kalangan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Pelayanan ramah dan profesional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Lokasi strategis dan mudah dijangkau</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Air Murni</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Layanan</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
                <div className="text-sm text-gray-600">Kepuasan</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-blue-600">Unggulan Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>NICO PATRIO</strong> menyediakan berbagai layanan air minum isi ulang 
              untuk memenuhi kebutuhan rumah tangga dan bisnis Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Air Minum Isi Ulang</CardTitle>
                <CardDescription>
                  Air murni melalui proses filtrasi 6 tahap dengan harga terjangkau
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kapasitas: 1 Liter - 20 Liter</li>
                  <li>• Harga mulai dari Rp 3.000/L</li>
                  <li>• Gratis antar untuk pembelian besar</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Pengantaran Rumah</CardTitle>
                <CardDescription>
                  Layanan antar langsung ke rumah atau kantor Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gratis ongkir radius 5 km</li>
                  <li>• Pengantaran harian/mingguan</li>
                  <li>• Jadwal fleksibel sesuai kebutuhan</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Garansi Kualitas</CardTitle>
                <CardDescription>
                  Jaminan kemurnian dan keamanan air minum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Uji lab berkala</li>
                  <li>• Sertifikasi kesehatan</li>
                  <li>• Garansi uang kembali</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">NICO PATRIO</span>
            </h2>
            <p className="text-gray-600">
              Siap melayani kebutuhan air minum sehat Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-blue-900">Informasi Kontak</CardTitle>
                  <CardDescription>
                    Jangan ragu untuk menghubungi kami kapan saja
                  </CardDescription>
                </CardHeader>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">0852-8570-3497</p>
                      <p className="text-sm text-gray-500">Tersedia 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">nicopatrio@outlook.co.id</p>
                      <p className="text-sm text-gray-500">Respon cepat terjamin</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        DUSUN II, Desa/Kelurahan Lubuk Rukam<br />
                        Kec. Peninjauan, Kab. Ogan Komering Ulu<br />
                        Provinsi Sumatera Selatan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Sabtu: 06:00 - 21:00<br />
                        Minggu: 07:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-blue-900">Mengapa Pelanggan Memilih Kami</CardTitle>
                </CardHeader>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold">Kualitas Terjamin</div>
                      <div className="text-sm text-gray-600">Proses filtrasi modern dan uji kualitas rutin</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold">Harga Terjangkau</div>
                      <div className="text-sm text-gray-600">Tarif kompetitif untuk kualitas terbaik</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold">Pelayanan Cepat</div>
                      <div className="text-sm text-gray-600">Respon cepat dan pengantaran tepat waktu</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold">Lokasi Strategis</div>
                      <div className="text-sm text-gray-600">Mudah dijangkau dari berbagai arah</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Bergabung dengan 1000+ Pelanggan Puas</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="NICO PATRIO Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold">NICO PATRIO</span>
              </div>
              <p className="text-blue-200 mb-4">
                Mitra terpercaya untuk kebutuhan air minum sehat keluarga Anda. 
                Kualitas terjamin, harga terjangkau, pelayanan terbaik.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-blue-800 text-blue-100">
                  <Droplets className="w-3 h-3 mr-1" />
                  Air Murni
                </Badge>
                <Badge variant="secondary" className="bg-blue-800 text-blue-100">
                  <Shield className="w-3 h-3 mr-1" />
                  Terpercaya
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Air Minum Isi Ulang</li>
                <li>Pengantaran Rumah</li>
                <li>Paket Hemat</li>
                <li>Membership</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak Cepat</h4>
              <ul className="space-y-2 text-blue-200">
                <li>📱 0852-8570-3497</li>
                <li>✉️ nicopatrio@outlook.co.id</li>
                <li>📍 Lubuk Rukam, Peninjauan</li>
                <li>🕐 06:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 NICO PATRIO. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-200 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}