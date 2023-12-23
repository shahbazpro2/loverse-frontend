import { cn } from '@lib/utils'
import React from 'react'

interface CoinProps {
    value: string
    className?: string

}

const Coin = ({ value, className }: CoinProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className={cn("w-12 h-12 rounded-full border-2 border-yellow-200 bg-yellow-500 flex items-center justify-center", className)}>
                <span className="text-xl text-black font-bold">{value}</span>
            </div>
        </div>
    )
}

export default Coin