import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FruitList from '../componenets/FruitList'
import { getFruits } from '../features/fruits/fruitSlice'

const Product = () => {

    const {wishList} =useSelector((state) => state.cart)
    const {game , isLoading} = useSelector((state)=>state.fruits)

    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getFruits())
    
    },[])

    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center p-20">
        <img src="/assests/ram.jpg" alt="" className='w-80' />

          <h1 className="mt-4 text-center text-6xl text-red-500 font-bold">
            LOADING ......
          </h1>
        </div>
      );
    }
  




  return (
    <div className='py-6'>
    <h1 className='text-center text-5xl font-bold text-transparent bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 bg-clip-text  py-4'>ALL PRODUCTS</h1>
  
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
    
   
   {
    game.map((fruit) =>(
      <FruitList key={fruit.id} fruit={fruit} />
    ))
   }




  </div>
  </div>
  )
}

export default Product
