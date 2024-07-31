import axios from "axios"

export const fetchFruits = async()=>{
    const response = await axios.get("https://fruitapi-mf2v.onrender.com/data")
    return response.data
}




