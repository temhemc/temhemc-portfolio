"use client"

import useSWR from "swr"
import { CryptoCard } from "./Crypto-card"
import { RefreshCw } from "lucide-react"
import { Button } from "./ui/button"

interface CryptoData {
    id: string
    name: string
    symbol: string
    current_price: number
    price_change_percentage_24h: number
    market_cap: number
    image: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function CryptoList() {
    const { data, error, isLoading, mutate } = useSWR<CryptoData[]>(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana,ripple,cardano,dogecoin,polkadot,avalanche-2,chainlink,litecoin&order=market_cap_desc",
        fetcher,
        {
            refreshInterval: 60000,
            revalidateOnFocus: true,
        }
    )

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-lg" />
                ))}
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-red-600 mb-4">Veriler yüklenirken bir hata oluştu.</p>
                <Button onClick={() => mutate()} variant="outline">
                    <RefreshCw className="h-4 w-4" />
                    Tekrar Dene
                </Button>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.map((crypto) => (
                <CryptoCard
                    key={crypto.id}
                    name={crypto.name}
                    symbol={crypto.symbol.toUpperCase()}
                    price={crypto.current_price}
                    change24h={crypto.price_change_percentage_24h}
                    marketCap={crypto.market_cap}
                    image={crypto.image}
                />
            ))}
        </div>
    )
}
