import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: 'null',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: 'null',
    imageSrc:
      'https://i.etsystatic.com/7628211/r/il/56e222/5168122591/il_300x300.5168122591_4545.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: 'null',
    imageSrc:
      'https://ih1.redbubble.net/image.2099543517.4618/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: 'null',
    imageSrc:
      'https://d1w8c6s6gmwlek.cloudfront.net/shamblestees.com/products/168/271/16827106.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  }
  // Add more products here...
]
/*

In this code, (prevQuantities[productId] || 0) serves the purpose of ensuring that if prevQuantities[productId] is falsy (or undefined), it defaults to 0. Here's how it works step by step:

1.    prevQuantities[productId]: This part attempts to retrieve the current quantity of the product with the specified productId from the prevQuantities object.

2.       (prevQuantities[productId] || 0): The || operator is the logical OR operator. It checks if the left-hand operand (prevQuantities[productId]) is truthy. If it is, it returns that value; otherwise, it returns the right-hand operand (0). This effectively defaults to 0 if prevQuantities[productId] is falsy (e.g., if the product is not yet in the cart).

3.       + 1: After obtaining the quantity (or the default of 0), the code then increments it by 1. This step is used to increase the quantity when a user adds another instance of the same product to their cart.

4.         The logic ensures that even if the prevQuantities[productId] value is missing or falsy (e.g., when the product is not yet in the cart), the code will treat it as 0 and increment it by 1 to reflect the addition of the product to the cart with a quantity of 1.

This approach helps avoid errors that could occur if you tried to increment a falsy or undefined value directly, which could result in unexpected behavior or runtime errors.




*/

export default function Posting () {
  const [productQuantities, setProductQuantities] = useState({}) // initially the cart is empty

  const handleIncrement = productId => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities, // this is shallow copy of the previous state so that we don't mutate directly the previous state
      [productId]: (prevQuantities[productId] || 0) + 1
    }))
  }

  const handleDecrement = productId => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0) // However, it also ensures that the quantity cannot go below 0 by using Math.max(...). If the result of (prevQuantities[productId] || 0) - 1 is less than 0 (i.e., negative), it will be clamped to 0.
    }))
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Customers also purchased
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <div key={product.id} className='group relative'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-700'>{product.name}</h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <div className='text-sm font-medium text-gray-900 flex items-center'>
                  <button
                    className='cursor-pointer'
                    onClick={() => handleDecrement(product.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className='mx-2'>{productQuantities[product.id] || 0}</p>
                  <button
                    className='cursor-pointer'
                    onClick={() => handleIncrement(product.id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <p className='ml-2'>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
