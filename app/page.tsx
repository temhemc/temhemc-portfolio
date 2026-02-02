import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { CryptoList } from "./components/Crypto-List"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-100 to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Kripto Para Piyasalarını Takip Edin
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bitcoin ve Ethereum fiyatlarını anlık olarak izleyin. Veriler otomatik olarak güncellenir.
            </p>
          </div>
        </section>

        {/* Crypto Section */}
        <section id="piyasalar" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Piyasalar</h2>
            <CryptoList />
          </div>
        </section>

        {/* About Section */}
        <section id="hakkinda" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hakkında</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              temhemc, kripto para piyasalarını takip etmenizi sağlayan basit ve kullanıcı dostu bir platformdur.
              Bitcoin ve Ethereum gibi popüler kripto paraların anlık fiyat verilerini CoinGecko API üzerinden alarak
              size sunuyoruz. Veriler her 60 saniyede bir otomatik olarak güncellenir.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

