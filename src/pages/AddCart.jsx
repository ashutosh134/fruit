import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTo, clear, decrease, remove, calculateTotal, updateTax, updateShipping, wishListAdd } from '../features/fruits/cartSlice';
import { toast } from 'react-hot-toast';

const AddCart = () => {
  const dispatch = useDispatch();
  const { cartItem, total, quantity, tax, shipping } = useSelector(state => state.cart);

  // const [customShipping, setCustomShipping] = useState('');



 

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItem, dispatch])

  const handleDecrease = (item) => {
    dispatch(decrease(item))
    dispatch(calculateTotal())
  }

  const handleAdd = (item) => {
    dispatch(addTo(item))
    toast.success("Added Successfully",{
      position:"top-right"
    })
    dispatch(calculateTotal())
  }

  const handleRemove = (id) => {
    dispatch(remove(id))
    dispatch(calculateTotal())
    toast.success("Item Removed From Cart" ,{
      position:"top-right",
    })
  }

  const handleClear = () => {
    dispatch(clear())
    localStorage.removeItem("cartItem")
    toast.success("Cart Is Cleared Successfully" , {
      position:"top-right"
    })
  }


  const handleAddWishList = (wishList) =>{
    dispatch(wishListAdd(wishList))
    toast.success("Added In WishList" , {
      position:"top-right",
      icon:"❤"
    })
    
    
  }

  // const handleTaxChange = (e) => {
  //   dispatch(updateTax(parseFloat(e.target.value)))
  //   dispatch(calculateTotal())
  // };

  // const handleCustomShippingChange = (e) => {
  //   setCustomShipping(parseFloat(e.target.value))
  //   dispatch(updateShipping(parseFloat(e.target.value)))
  //   dispatch(calculateTotal())
  // };

  if (cartItem.length === 0) {
    return (
      
      <div className='px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 container'>
      <div className='text-center'>
        <img
          src="/assests/product.jpg"
          alt="Product image"
          className='w-64 sm:w-72 md:w-80 lg:w-96 mx-auto mb-6'
        />
        
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-red-500 font-bold py-2'>
          NO PRODUCT IN THE CART
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2'>
          Looks like your cart is empty. Start shopping to add items!
        </p>
        <Link to={"/"}>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 mt-6 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-amber-400 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-semibold rounded-xl"
            aria-label="Click here for Shopping"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
              aria-hidden="true"
            >
              <path d="M3 3h2l3 8h13l3-8h2m-9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            </svg>
            Click here for Shopping
          </button>
        </Link>
      </div>
    </div>
    
    );
  }


  

  return (
    
    <div className='py-[50px] px-6'>
      <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-teal-300 p-4 rounded-md">
            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
            <hr className="border-red-500 mt-4 mb-8" />

            {cartItem.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2 flex items-center py-4 gap-4">
                    <div className="w-24 h-24 shrink-0 bg-red-500 p-2 rounded-md">
                      <img src={item.img} className="w-full h-full object-contain" alt={item.name} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                      <h6 className="text-1xl text-red-500 cursor-pointer mt-0.5" onClick={() => handleRemove(item.id)}>Remove</h6>
                      <div className="flex gap-4 mt-4">
                        
                        <div>
                          <button type="button" className="flex items-center px-2.5 py-1.5 border border-red-500 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124" onClick={() => handleDecrease(item)}>
                              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>
                            <span className="mx-2.5">{item.quantity}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42" onClick={() => handleAdd(item)}>
                              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">

                  <div className="ml-auto flex flex-col gap-5 ">
                            <div className="flex items-start gap-4 justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-red-500 inline-block" viewBox="0 0 64 64" onClick={()=>handleAddWishList(item)}>
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-red-500 inline-block" viewBox="0 0 24 24" onClick={() => handleRemove(item.id)}>
                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                </svg>
                            </div>
                            <div>
                            <h4 className="text-base font-bold text-gray-800">Price: ${item.price}</h4>
                            <h3 className="text-base font-bold text-gray-800 mt-auto">Total: ${item.price * item.quantity}</h3>
                            </div>
                        </div>
                    </div>


                    
                    
                  </div>
                </div>
              
            ))}
          </div>

          {/* <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
            <div className="flex border border-blue-600 overflow-hidden rounded-md">
              <input
                type="number"
                
                placeholder="Tax ($)"
                value={tax}
                onChange={handleTaxChange}
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
              />
              <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                Apply
              </button>
            </div>

            <div className="mt-4 flex items-center">
              <label htmlFor="shippingCharge" className="mr-2">Shipping Charge:</label>
              <input
                id="shippingCharge"
                type="number"
                step="0.01"
                placeholder=" charge"
                value={customShipping}
                onChange={handleCustomShippingChange}
                className="w-20 outline-none bg-white text-gray-600 text-sm px-2 py-1.5 border border-gray-300 rounded-md"
              />
            </div>

            <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">$0.00</span></li>
              <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">${shipping}</span></li>
              <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">${tax}</span></li>
              <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${total}</span></li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Checkout
              </button>
              <Link to={"/"}>
                <button
                  type="button"
                  className="my-2 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div> */}


<div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <ul className="text-gray-800 space-y-4">
                        <li className="flex flex-wrap gap-4 text-">Shipping <span className="ml-auto font-bold">${shipping}</span></li>
                        <li className="flex flex-wrap gap-4 text-"> Tax <span className="ml-auto font-bold">${tax}</span></li>
                        <li className="flex flex-wrap gap-4 text-">Discount <span className="ml-auto font-bold">$00</span></li>
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${total}</span></li>
                    </ul>

                    <div className="mt-8 space-y-2">
                <Link to={"/buy"}>       <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-teal-300 hover:bg-red-500 text-black rounded-md">Buy Now</button></Link>
                     <Link to={"/"} className='' >  <button type="button" className=" my-2 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-amber-400 hover:bg-amber-600 text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button></Link>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <img src='https://readymadeui.com/images/master.webp' alt="card1" className="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/visa.webp' alt="card2" className="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/american-express.webp' alt="card3" className="w-10 object-contain" />
                    </div>
                </div>



        </div>

        <div className="mt-8 space-y-2">
          <button
            type="button"
            className="my-2 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-red-500 text-white border border-gray-300 rounded-md"
            onClick={handleClear}
          >
            CLEAR ALL CART ITEMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
