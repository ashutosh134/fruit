import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTo, wishListAdd } from '../features/fruits/cartSlice';
import { toast } from 'react-hot-toast';
import { getFruits } from '../features/fruits/fruitSlice';

const Fruit = () => {

  
const { wishList } = useSelector((state) => state.cart);

const isInWishList = (id) => {
  return wishList.some((item) => item.id === id);
};

  
   const {game , isLoading} = useSelector(state => state.fruits)

   const dispatch =useDispatch()


   useEffect(()=>{
    dispatch(getFruits())
    
    },[])


   const handleAdd = (fruits) =>{

   dispatch(addTo(fruits))
   toast.success("Added Successfully",{
    position:"top-right"
   })
   }

   const handleAddWishList = (wishList) =>{
    dispatch(wishListAdd(wishList))
   
  }



    const filteredFruits = game.filter(fruits => fruits.category === "Fruits");


    // if (isLoading) {
    //   return (
    //     <div className="flex flex-col items-center justify-center p-20 ">
    //      <img src="/assests/fruit.jpg" alt="" className='w-80' loading='lazy'/>
    //       <h1 className="mt-4 text-center text-6xl text-red-500 font-bold">
    //         LOADING ...
    //       </h1>
    //     </div>
    //   );
    // }


//     if (isLoading) {
//   return (
//     <div className="flex flex-col items-center justify-center h-[70vh] bg-white">
//       <div className="relative flex items-center justify-center">
//         <div className="w-20 h-20 border-[8px] border-t-transparent border-red-400 border-solid rounded-full animate-spin shadow-lg"></div>
//         <div className="absolute w-10 h-10 bg-yellow-300 rounded-full blur-lg opacity-50"></div>
//       </div>
//       <p className="mt-6 text-xl font-semibold text-orange-600 tracking-wide animate-pulse">
//         Loading Dairy Products...
//       </p>
//     </div>
//   );
// }



if (isLoading) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-[8px] border-t-transparent border-red-400 border-solid rounded-full animate-spin shadow-lg"></div>
        <div className="absolute w-10 h-10 bg-yellow-300 rounded-full blur-lg opacity-50"></div>
      </div>
      <p className="mt-6 text-xl font-semibold text-orange-600 tracking-wide animate-pulse">
        Loading Dairy Products...
      </p>
    </div>
  );
}
  return (



    <div className='py-8 '> <h1 className='text-center text-transparent bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 bg-clip-text  font-bold text-5xl py-4'>FRUITS</h1>
    



    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

      {
        filteredFruits.map((fruit)=>(
          <div key={fruit.id} class="bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div class="min-h-[245px]">
            <img src={fruit.img} class="w-full rounded-lg" />
          </div>
          <div class="p-6 text-center">
            <h3 class="text-xl font-bold">{fruit.name}</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2 mx-2">
              <h4 class="text-lg font-bold text-gray-800">$ {fruit.price}</h4>

            <div
  className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto 
  ${isInWishList(fruit.id) ? 'bg-red-500' : 'bg-gray-100'}`}
  onClick={() => handleAddWishList(fruit)}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`inline-block fill-${isInWishList(fruit.id) ? 'white' : 'gray-800'}`} viewBox="0 0 64 64">
    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
  </svg>
</div>
            </div>
            <button type="button"
              class="mt-6 px-5 py-2.5 w-full rounded-lg text-black text-sm tracking-wider font-semibold border-none outline-none bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 hover:bg-red-700" onClick={()=>handleAdd(fruit)}>Add</button>
          </div>
        </div>
        ))



      }

  
   
    </div>
    </div>
  
  )
}

export default Fruit
