import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFruits } from '../features/fruits/fruitSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { game } = useSelector(state => state.fruits);

 
  const vegetables = game.filter(fruit => fruit.category === "Vegetables");

  useEffect(() => {
    dispatch(getFruits())
  }, []);

  return (
    <div className='container mx-auto pb-20'>
    
      <div className='flex flex-col md:flex-row justify-between items-center pt-16'>
        <div className='md:w-1/2'>
          <h1 className='text-5xl md:text-8xl text-red-500 font-bold text-center'>FRESH FRUITS <span className='text-lime-500 block'>ALWAYS</span> </h1>
          <img src='../src/assests/image-2.avif' className='w-full md:max-w-lg mx-auto mt-8' alt="Fresh fruits" />
        </div>

        <div className='md:w-1/2 mt-8 md:mt-0'>
          <img src="../src/assests/image-1.jpg" className='w-full mx-auto rounded-lg' alt="Fresh vegetables" />
          <marquee><h1 className="text-4xl md:text-6xl text-center text-lime-600 py-4 font-bold">FOREVER FRESH</h1></marquee>
        </div>
      </div>

    
      <hr className='w-full h-1 bg-amber-500 mt-16 mb-8' />

      
      <h1 className='text-5xl md:text-6xl text-center text-red-500 font-bold mb-12'>OUR PRODUCTS</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
     
        <div className="bg-amber-300 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 rounded-lg overflow-hidden mx-auto">
          <div className="min-h-[245px]">
            <img src="../src/assests/dragon.jpg" className="w-full h-[245px] object-cover" alt="Fruits" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">FRUITS</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
            <Link to={"/fruit"}>
              <button type="button" className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm md:text-base tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">
                FRUITS
              </button>
            </Link>
          </div>
        </div>

       
        <div className="bg-lime-400 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 rounded-lg overflow-hidden mx-auto">
          <div className="min-h-[245px]">
            <img src="./public/carrot.jpg" className="w-full h-[245px] object-cover" alt="Vegetables" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">VEGETABLES</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
            <Link to={"/vegetables"}>
              <button type="button" className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm md:text-base tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">
                VEGETABLES
              </button>
            </Link>
          </div>
        </div>

      
        <div className="bg-amber-300 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 rounded-lg overflow-hidden mx-auto">
          <div className="min-h-[245px]">
            <img src="../src/assests/milk.jpg" className="w-full h-[245px] object-cover" alt="Dairy" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">DAIRY</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
            <Link to={"/dairy"}>
              <button type="button" className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm md:text-base tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">
                DAIRY
              </button>
            </Link>
          </div>
        </div>
      </div>
    
      <section className=' my-12 py-16 px-12 bg-lime-400'>
        <h2 className='text-4xl md:text-5xl text-center font-bold mb-8'>What Our Customers Say</h2>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          {/* Testimonial 1 */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <p className='text-lg italic'>"Excellent quality produce, always fresh and delivered on time!"</p>
            <p className='mt-4 font-semibold text-right'>- Jane Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <p className='text-lg italic'>"A fantastic variety of fruits and vegetables. Highly recommended!"</p>
            <p className='mt-4 font-semibold text-right'>- John Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <p className='text-lg italic'>"The best online shopping experience for fresh produce!"</p>
            <p className='mt-4 font-semibold text-right'>- Mary Johnson</p>
          </div>
        </div>
      </section>
    
    </div>
  )
}

export default Home;
