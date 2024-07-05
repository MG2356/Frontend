import React, { useState } from 'react';
import axios from 'axios';
import {apiUrl} from '../utils/app.utils'
const ProductRegister = () => {
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productMRP, setProductMRP] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [productDescription, setProductDescription] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${apiUrl}/addProduct`, { productImage, productName, productMRP, productPrice, productType,productDescription })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-white-950">
      <div className="bg-white dark:bg-white-900 w-full shadow-md rounded-lg px-8 py-6 max-w-md"  >
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-black-200">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-black-300 mb-2">Product Image URL</label>
            <input 
              type="text" 
              id="productName" 
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter Image Url" 
              onChange={(e) => setProductImage(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 dark:text-black-300 mb-2">Product Name</label>
            <input 
              type="text" 
              id="productName" 
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter productName" 
              onChange={(e) => setProductName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-black-300 mb-2">Product MRP</label>
            <input 
              type="text" 
              id="productName" 
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter productMRP" 
              onChange={(e) => setProductMRP(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-black-300 mb-2">Product Price</label>
            <input 
              type="text" 
              id="productName" 
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter productPrice" 
              onChange={(e) => setProductPrice(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-black-300 mb-2">Product Type</label>
            <input 
              type="text" 
              id="productName" 
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter productType" 
              onChange={(e) => setProductType(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-black-300 mb-2">Product Description</label>
            <textarea 
              type="text" 
              id="productName" 
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter productDescription" 
              onChange={(e) => setProductDescription(e.target.value)} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductRegister;
