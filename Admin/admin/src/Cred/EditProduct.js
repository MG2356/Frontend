import React, { useContext, useState,useEffect } from "react";
// import { productsContext } from "../../GlobalState/ProductsContext";
import { Link } from 'react-router-dom'

// import './Product.css';
import { Container, InputAdornment, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import {apiUrl} from '../utils/app.utils'


const EditProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          console.log(`${apiUrl}/getProduct`)
          const response = await fetch(`${apiUrl}/getProduct`);
          console.log(response)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching products:", error);
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

  

  return (
    <>
      <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-black" id="heading">
        Product List
      </h3>
      
      

     
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
              
            </tr>
        </thead>
        <tbody>
        {products.map((product) => (

            <tr key={product._id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.productName}
                </th>
                <td class="px-6 py-4">
                {product.productMRP}

                </td>
                <td class="px-6 py-4">
                {product.productPrice}

                </td>
              
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
           
        ))}
            
            
        </tbody>
    </table>
</div>

    </>
  );
};

export default EditProduct;
