import data from '../data/data.ts';
import type { Products } from '../utils/types.ts';
import Card from './Card.tsx';


const products: Products[] = data.filter((data)=>data.discounted !== "")
console.log(products)

const SlashedPrices = () => {

  return (
      <div className='grid grid-cols-4 gap-50 px-10'>
          {products.map((product, index) => 
              <Card product={product} index={index}/>
          )}
    </div>
  )
}

export default SlashedPrices