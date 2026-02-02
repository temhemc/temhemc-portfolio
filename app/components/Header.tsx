import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-emerald-500" />
                        <span className="text-xl font-bold text-gray-900">temhemc</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link href="#piyasalar" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Piyasalar
                        </Link>
                        <Link href="#hakkinda" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Hakkında
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
