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
          <svg
            className="animate-spin h-12 w-12 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm4 0a4 4 0 1 0 8 0A4 4 0 0 0 8 12z"
            />
          </svg>
          <h1 className="mt-4 text-center text-6xl text-red-500 font-bold">
            LOADING ......
          </h1>
        </div>
      );
    }
  




  return (
    <div className='py-6'>
    <h1 className='text-center text-5xl font-bold text-red-600 py-4'>ALL PRODUCTS</h1>
  
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
