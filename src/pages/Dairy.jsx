import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTo, wishListAdd } from '../features/fruits/cartSlice'
import { toast } from 'react-toastify'
import { getFruits } from '../features/fruits/fruitSlice'

const Dairy = () => {

    const {game , isLoading} = useSelector(state => state.fruits)

   

    const dispatch =useDispatch()

    useEffect(()=>{
      dispatch(getFruits())
      
      },[])

   const handleAdd = (fruits) =>{

   dispatch(addTo(fruits))
    toast.success("Added Successfully")
   }

   
   const handleAddWishList = (wishList) =>{
    dispatch(wishListAdd(wishList))
    toast.success("added in wishList")
  }

    const dairyFiltered = game.filter((dairy)=> dairy.category === "Dairy")

    
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


    <div className='py-8'>
        <h1 className="text-center text-5xl text-red-500 font-bold py-4">DAIRY PRODUCTS</h1>

        <div className='grid   lg:grid-cols-3 '>
   {
     
     dairyFiltered.map((dairy) =>(
        <div key={dairy.id}
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[245px]">
        <img src={dairy.img} className="w-full rounded-lg" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{dairy.name}</h3>
        <div className="mt-4 flex items-center flex-wrap gap-2 mx-2">
              <h4 className="text-lg font-bold text-gray-800">$ {dairy.price}</h4>

              <div className="hover:bg-red-500 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"onClick={()=>handleAddWishList(dairy)}
                  viewBox="0 0 64 64" >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
        <button type="button"
          className="mt-6 px-5 py-2.5 w-full rounded-lg text-black text-sm tracking-wider font-semibold border-none outline-none bg-red-500 hover:bg-red-700"onClick={()=>handleAdd(dairy)}>Add</button>
      </div>
    </div>
     ))






   }



        </div>
      
    </div>
  )
}

export default Dairy
