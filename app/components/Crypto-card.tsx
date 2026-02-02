"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

interface CryptoCardProps {
    name: string
    symbol: string
    price: number
    change24h: number
    marketCap: number
    image: string
}

export function CryptoCard({ name, symbol, price, change24h, marketCap, image }: CryptoCardProps) {
    const isPositive = change24h >= 0

    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value)
    }

    const formatMarketCap = (value: number) => {
        if (value >= 1e12) {
            return `$${(value / 1e12).toFixed(2)}T`
        }
        if (value >= 1e9) {
            return `$${(value / 1e9).toFixed(2)}B`
        }
        return `$${(value / 1e6).toFixed(2)}M`
    }

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3 pb-2 pt-4 px-4">
                <img src={image || "/placeholder.svg"} alt={name} className="w-8 h-8 rounded-full" />
                <div className="flex-1 min-w-0">
                    <CardTitle className="text-base truncate">{name}</CardTitle>
                    <span className="text-xs text-gray-500 uppercase">{symbol}</span>
                </div>
                <div className={`flex items-center gap-0.5 text-sm ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                    {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                    <span className="font-medium">{Math.abs(change24h).toFixed(2)}%</span>
                </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Fiyat:</span>
                        <span className="font-semibold text-gray-900">{formatPrice(price)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Pazar Değeri:</span>
                        <span className="text-sm font-medium text-gray-700">{formatMarketCap(marketCap)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
