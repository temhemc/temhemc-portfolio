import { TrendingUp } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                        <span className="font-semibold text-gray-900">temhemc</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        © 2026 temhemc. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">
                            Veriler CoinGecko API&apos;den alınmaktadır
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
