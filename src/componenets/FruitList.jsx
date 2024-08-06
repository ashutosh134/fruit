import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { addTo, wishListAdd } from '../features/fruits/cartSlice'
// import { toast } from 'react-toastify'
import toast, { Toaster } from 'react-hot-toast';

const FruitList = ({fruit}) => {

    
   const {wishList} =useSelector((state) => state.cart)
    
    const dispatch =useDispatch()

    const handleAdd = (fruits) =>{

    dispatch(addTo(fruits))
    toast.success("Added Successfully", {
      position:'top-right'
    })
    }

    const handleAddWishList = (wishList) =>{
      dispatch(wishListAdd(wishList))
      toast.success("Added In WishList" , {
        position:'top-right',
        icon:"❤"
      })
    }


  return (
    
    <div
    className="bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
    <div className="min-h-[245px]">
      <img src={fruit.img} className="w-full rounded-lg" />
    </div>

   



    <div className="p-6 text-center">
      <h3 className="text-xl font-bold">{fruit.name}</h3>
      <div className="mt-4 flex items-center flex-wrap gap-2 mx-2">
              <h4 className="text-lg font-bold text-gray-800">$ {fruit.price}</h4>

              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto hover:bg-red-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block  "
                  viewBox="0 0 64 64" onClick={()=>handleAddWishList(fruit)}>
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
      <button type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 text-base text-gray-800 font-semibold rounded-xl" onClick={()=>handleAdd(fruit)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"></path>
              </svg>
              Add to cart</button>    </div>
  </div>
  
  )
}

export default FruitList
