"use client"
import Stripe from "stripe"
import { Card, CardContent, CardTitle } from "../ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"

type CarouselProps = {
  // Props definition
  products: Stripe.Product[]
}

const Carousel = ({products}: CarouselProps) => {
    const [current,setCurrent] = useState<number>(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % products?.length)
        }, 3000)
        return () => clearInterval(interval)
    },[products?.length])
    
        if (!products || products.length === 0) {
            return (
                <Card className="flex items-center justify-center h-[500px]">
                    <p>No products available</p>
                </Card>
            )
        }

    const currentProduct = products[current]
    const price = currentProduct?.default_price as Stripe.Price
  return (
    <Card>
        {
            currentProduct?.images && currentProduct.images[0] && (
                <div className="reltive h-80 w-full">

                <Image
                    src={currentProduct.images[0]}
                    alt={currentProduct.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500 ease-in-out"
                    />
                    </div>
            )
        }
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.name}
        </CardTitle>
        {price && price.unit_amount && (
          <p className="text-xl text-white">
            {(price.unit_amount / 100).toFixed(2)}€
          </p>
        )}
      </CardContent>
    </Card>
  )
}
export default Carousel