import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const exist = JSON.parse(localStorage.getItem("cartItem"))
const wishExist = JSON.parse(localStorage.getItem("wishList"))

const initialState = {
    cartItem : exist ? exist : [],
    quantity : 0,
    total :0,
    tax: 2.00,
    shipping: 4.00, 
    wishList : wishExist ? wishExist : [],
    wishQuantity:0,
    wishTotal:0,
}

const cartSlice = createSlice({
    name: "cart", 
    initialState,
     
    reducers : {
        addTo : (state , action) =>{
       
         const ashutosh  = state.cartItem.findIndex((item)=> item.id === action.payload.id)

           if(ashutosh >=0){
              state.cartItem[ashutosh].quantity += 1
           }else{
          const demp = { ...action.payload , quantity: 1}
           state.cartItem.push(demp)}

          localStorage.setItem("cartItem" , JSON.stringify(state.cartItem))

        },


        remove : (state ,action) => {
            const abhinav = state.cartItem.filter((item)=>item.id !== action.payload)

            state.cartItem = abhinav

            localStorage.setItem("cartItem" , JSON.stringify(state.cartItem))
 
        },


        decrease : (state ,action)=>{
            const tanu = state.cartItem.findIndex((item)=>item.id === action.payload.id)

            if(state.cartItem[tanu].quantity > 1){
                state.cartItem[tanu].quantity -= 1
            } else if(state.cartItem[tanu].quantity === 1 ){
                
                const abhinav = state.cartItem.filter((item)=>item.id !== action.payload.id)

                state.cartItem = abhinav
    
                localStorage.setItem("cartItem" , JSON.stringify(state.cartItem))

                toast.success("Item Removed From Cart",{
                  position:"top-right"
                })
            }
        },


        clear : (state , action) =>{
             return{
                ...state,
                cartItem:[],
             }
        },

        // calculateTotal: (state, action) => {
        //     state.total = state.cartItem.reduce((total, item) => {
        //       return total + item.price * item.quantity;
        //     }, 0);
      
        //     state.quantity = state.cartItem.reduce((totalQty, item) => {
        //       return totalQty + item.quantity;
        //     }, 0);
        //   },


        calculateTotal: (state, action) => {
            const subtotal = state.cartItem.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0);
      
            state.total = subtotal + state.tax + state.shipping;
      
            state.quantity = state.cartItem.reduce((totalQty, item) => {
              return totalQty + item.quantity;
            }, 0);
          },

          updateTax: (state, action) => {
            state.tax = action.payload;
          },
      
          updateShipping: (state, action) => {
            state.shipping = action.payload;
          },
          
wishListAdd: (state, action) => {
  const index = state.wishList.findIndex((item) => item.id === action.payload.id);

  if (index === -1) {
    state.wishList.push(action.payload);
    toast.success("Added to WishList", {
      position: "top-right",
      icon: "❤️",
    });
  } else {
   state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
 
    toast.success("Removed from WishList", {
      position: "top-right",
      icon: "💔",
    });
  }

  localStorage.setItem("wishList", JSON.stringify(state.wishList));
},


          removeCart : (state ,action) =>{
            const remove = state.wishList.filter((item)=>item.id !== action.payload)

            state.wishList = remove
            
            localStorage.setItem("wishList" , JSON.stringify(state.wishList))


          },


          wishTot : (state, action)=>{
            const subWishTotal = state.wishList.reduce((p,c)=>{
              return p + c.price * (c.wishQuantity || 1);

            },0)

            state.wishTotal =  subWishTotal


            state.wishQuantity = state.wishList.reduce((p,c)=>{
              return p + (c.wishQuantity || 1)
            },0)


          },


          clearWish : (state ,action)=>{
            return{
              ...state,
              wishList:[],
 
            }
        
          },


          move : (state,action) =>{
            const moveToCart = state.wishList.find((item)=>item.id === action.payload.id)

            if(moveToCart){
            
              const already = state.cartItem.findIndex((item)=>item.id === action.payload.id)

              if(already >= 0 ){
               state.cartItem[already].quantity += 1;
              }else{
                const demp = {...action.payload , quantity:1}
                state.cartItem.push(demp)
              }
        
               state.wishList = state.wishList.filter((item)=>item.id !== action.payload.id)
            }

          
            
            localStorage.setItem("cartItem" , JSON.stringify(state.cartItem))

            localStorage.setItem("wishList" , JSON.stringify(state.wishList))

          }



            
     

    }

})

export const { addTo , remove , decrease , clear , calculateTotal , updateShipping , updateTax , wishListAdd , removeCart, wishTot , clearWish, move} = cartSlice.actions

export default cartSlice.reducer;
