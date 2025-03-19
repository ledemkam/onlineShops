import { stripe } from "@/lib/stripe"
import ProduktList from "@/components/shared/ProduktList"


export default async function ProductsPage() {

  const products = await stripe.products.list({
    expand: ['data.default_price'],
  })

  console.log("Product count:", products.data.length);

  return (
    <div className="pb-4">
       <h1>Alle Produkten</h1>
        <ProduktList products={products.data} />
    </div>
  )
}