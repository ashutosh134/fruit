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
    <div className='container mx-auto pb-0'>
  
      <div className='flex flex-col md:flex-row justify-between items-center pt-16'>
        <div className='md:w-1/2'>
          <h1 className='text-5xl md:text-8xl text-6xl font-extrabold leading-tight text-center text-transparent bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 bg-clip-text font-bold text-center'>FRESH FRUITS <span className='text-lime-500 block'>ALWAYS</span> </h1>
          <img src='/assests/new-4.png' className='w-full md:max-w-lg mx-auto mt-8 lg:mb-24' alt="Fresh fruits" loading='lazy' />
        </div>

        <div className='md:w-1/2 mt-8 md:mt-0'>
          <img src="/assests/new.png" className='w-full mx-auto rounded-lg' alt="Fresh vegetables" loading='lazy' />
                  </div>
      </div>

      {/* <div><img src="/assests/bber.jpg" alt="" loading='lazy' className='' />  </div> */}

    
    
      <hr className='w-full h-1 bg-lime-500 mt-8 mb-8' />


      
      <h1 className='text-5xl md:text-6xl text-center font-bold mb-12 text-transparent bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 bg-clip-text font-bold text-center'>
  OUR PRODUCTS
</h1>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
     
        <div className="bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 rounded-lg overflow-hidden mx-auto">
          <div className="min-h-[245px]">
            <img src="/assests/asf.jpg" className="w-full h-[270px] object-cover" alt="Fruits" loading='lazy' />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">FRUITS</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
            <Link to={"/fruit"}>
              <button type="button" className="mt-6 px-5 py-2.5 w-full rounded-lg text-black text-sm md:text-base tracking-wider font-semibold border-none outline-none bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 hover:bg-red-700">
                FRUITS
              </button>
            </Link>
          </div>
        </div>

       
        <div className="bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 rounded-lg overflow-hidden mx-auto">
          <div className="min-h-[245px]">
            <img src="/assests/pile.jpg" className="w-full h-[270px] " alt="Vegetables" loading='lazy' />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">VEGETABLES</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
            <Link to={"/vegetables"}>
              <button type="button" className="mt-6 px-5 py-2.5 w-full rounded-lg text-black text-sm md:text-base tracking-wider font-semibold border-none outline-none bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 hover:bg-red-700">
                VEGETABLES
              </button>
            </Link>
          </div>
        </div>

      
        <div className="bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 rounded-lg overflow-hidden mx-auto">
          <div className="min-h-[245px]">
            <img src="/assests/glass.jpg" className="w-full h-[270px] " alt="Dairy" loading='lazy' />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">DAIRY</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
            <Link to={"/dairy"}>
              <button type="button" className="mt-6 px-5 py-2.5 w-full rounded-lg text-black text-sm md:text-base tracking-wider font-semibold border-none outline-none bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 hover:bg-red-700">
                DAIRY
              </button>
            </Link>
          </div>
        </div>
      </div>


      
      <div className='my-2'>
        <img src='/assests/vegetable.jpg' loading='lazy'/>
      </div>

    
      <section className=' mb-12 py-16 px-6 bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 rounded'>
        
        <h2 className='text-4xl md:text-5xl text-center font-bold mb-8'>What Our Customers Say</h2>

        <div className='flex flex-col md:flex-row justify-between gap-8'>
        
          <div className='bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 p-6 rounded-lg shadow-lg'>
            <p className='text-lg italic'>"Excellent quality produce, always fresh and delivered on time!"</p>
            <p className='mt-4 font-semibold text-right'>- Jane Doe</p>
          </div>

    
          <div className='bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 p-6 rounded-lg shadow-lg'>
            <p className='text-lg italic'>"A fantastic variety of fruits and vegetables. Highly recommended!"</p>
            <p className='mt-4 font-semibold text-right'>- John Smith</p>
          </div>

      
          <div className='bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 p-6 rounded-lg shadow-lg'>
            <p className='text-lg italic'>"The best online shopping experience for fresh produce!"</p>
            <p className='mt-4 font-semibold text-right'>- Mary Johnson</p>
          </div>
        </div>
      </section>

          
<div >
<img src="/assests/aa.jpg" alt=""  className='w-full h-' loading='lazy'/>
</div>

    </div>



  )
}

export default Home;
