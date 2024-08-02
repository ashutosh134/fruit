import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move, clearWish, removeCart, wishTot } from '../features/fruits/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const WishList = () => {




  const {wishList, wishTotal} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(wishTot())
  },[wishList])

  const handleAdd = (id) =>{

    dispatch(move(id))
    
    toast.success("Added Successfully")
    }
  
  const handleWishRemove = (id) =>{
    dispatch(removeCart(id))
  }

  const clearWishList = ()=>{
    dispatch(clearWish())
    localStorage.removeItem("wishList")
    toast.success("wishList Is Cleared Successfully")
    
  }

  if (wishList.length === 0) {
    return (
      <div className='p-20 container '>
        <div className='text-center'>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mx-auto mb-6">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <h1 className='text-6xl text-center text-red-500 font-bold py-2'>YOUR WISHLIST IS EMPTY</h1>
          <p className='text-lg text-gray-600 mt-2'>Looks like you haven't added any items to your wishlist. Start browsing and add your favorites!</p>
          <Link to={"/"}>
            <button type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-amber-400 text-base text-gray-800 font-semibold rounded-xl">
            
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <path d="M3 3h2l3 8h13l3-8h2"/>
                <circle cx="7" cy="21" r="2" />
                <circle cx="17" cy="21" r="2" />
              </svg>
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold mb-6 text-center  ">My Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishList.map((wish) => (
            <div key={wish.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={wish.img} alt={wish.name} className="rounded-md mb-2" />
              <h1 className="text-lg font-bold">{wish.name}</h1>
              <h1 className="text-xl font-bold py-4">${wish.price}</h1>
              <div className="flex justify-between items-center">
                <button className="text-white font-semibold bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg" onClick={()=>handleWishRemove(wish.id)}>
                  Remove
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 font-semibold text-gray-800 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg"
                  onClick={()=>handleAdd(wish.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Amount</span>
            <span>$ {wishTotal}</span>
          </div>
          <button
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition" 
            onClick={clearWishList}
          >
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishList
