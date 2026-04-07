import axios from "axios";
import React from "react";
import { useState } from "react";
import { backendUrl } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { currency } from "../App";


const List = ({token}) => {
  
  const [list , setList] = useState([])

  const fetchList = async ()=>{
    try {
      const response = await axios.get(backendUrl + "/api/v1/product/list")
      if (response.data.success){
        setList(response.data.data)
        console.log(response.data);
        
      }else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch product list");
    }
  }

  const removeProduct = async (id)=>{
    try {

      const response = await axios.post(backendUrl+ "/api/v1/product/remove", {id}, {headers: {token} })
      if (response.data.success){
        toast.success(response.data.message)
        await fetchList()
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove product");
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
      <p className="mb-2"> All Products List</p>
      <div className="flex flex-col gap-2">
        {/*    List Table Title   */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

             {/* Product List   */}
        {
          list.map((item, index)=>(
            <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={index}>
              <img src={item.image[0]} alt="product image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p> 
              <p onClick={()=>removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">X</p>
            </div>
          )) 
        }
      </div>
    </>
  )
};

export default List;
