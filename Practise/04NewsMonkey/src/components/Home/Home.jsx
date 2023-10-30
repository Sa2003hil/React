import axios from 'axios'
import { useState, useEffect } from 'react';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     // More products...
// ]



export default function Example() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f4a918c549b3406dbe3f76fec86d7f71&category=technology")
            .then((response) => {
                setNews(response.data.articles);
            });
    }, []); // Empty dependency array to run the effect only once on component mount
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Top Headlines</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {news.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.urlToImage}
                                    alt="img"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.url}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                    </h3>
                                    <p className=" text-sm text-gray-800 font-semibold mt-2">{product.author}</p>
                                    <div className='flex justify-center align-middle text-center mt-3'>
                                        <button className=' bg-black text-white p-2 text-sm  rounded-md'>Read More</button>
                                    </div>
                                </div>
                                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
