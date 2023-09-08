'use client'
import StripeCheckOutButton from "./Checkout"
import { client } from "./lib/sanityClient"
import { Image } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';

const getProductData = async () => {
  const res = await client.fetch(`*[_type== 'product']{
    title,
    szsd,
    decription,
    product_price,
    product_image,
  }`);

  // console.log("data fetched");
  return res
}

interface IProduct {
  title: string;
  decription: string;
  product_price: string;
  product_image: Image;
}

export default async function page() {

  function myClickFunction() {
    console.log("hello");
  }

  const productData: IProduct[] = await getProductData()
  console.log(productData)


  return (
    <>

      <button onClick={myClickFunction}>Click me</button>

      <br /><br />


      <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
        {productData.map((items) => (
          <>
            <div>
              <img src={urlForImage(items.product_image).url()} className='max-h-[200px] object-cover bg-red-200 object-top' alt="image" />
              <br /><br />
              <h1>{items.title}</h1>
              <h1>{items.decription}</h1>
              <h1>${items.product_price}</h1>
              <button className='border py-2 px-4 rounded bg-blue-600 text-white font-extrabold'>Add to cart</button>
              <h1>Stripe with Check out</h1><br />
              <StripeCheckOutButton />

              <br /><br />
            </div>
          </>
        ))}
      </div>
    </>
  )
}