import React, { useContext, useState } from "react";
import { cartContext } from "../../GlobalState/CartContext";
import { Link } from "react-router-dom";
import { productsContext } from "../../GlobalState/ProductsContext";
import { toast } from "react-hot-toast";

import './Product.css';
import { Container, InputAdornment, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";


const Products = () => {
  const { dispatch } = useContext(cartContext);
  const products = useContext(productsContext);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    filter ? product.productType === filter : true
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "priceLowToHigh") {
      return a.productPrice - b.productPrice;
    } else if (sort === "priceHighToLow") {
      return b.productPrice - a.productPrice;
    }
    return 0;
  });

  return (
    <>
      <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-black" id="heading">
        Products
      </h3>
      
      <div className="flex justify-between mb-4" id="filter-category">
        <FormControl variant="outlined" size="small" style={{ minWidth: 120 }} id="filter">
          <InputLabel>Filter</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filter">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Men">Men</MenuItem>
            <MenuItem value="Women">Women</MenuItem>
            <MenuItem value="Shoe">Shoe</MenuItem>

            {/* Add more filter options as needed */}
          </Select>
        </FormControl>
        <FormControl id="sort" variant="outlined" size="small" style={{ minWidth: 160 }}>
          <InputLabel>Sort</InputLabel>
          <Select value={sort} onChange={handleSortChange} label="Sort">
            <MenuItem value="">None</MenuItem>
            <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="products container" id="product-container">
        {sortedProducts.map((product) => (
          <div key={product._id} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
            <Link to={`/product/${product._id}`}>
              <div className="relative flex h-60 overflow-hidden">
                <img
                  className="absolute top-0 right-0 h-full w-full object-cover"
                  src={product.productImage}
                  alt="product image"
                />
                <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                  <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link to={`/product/${product._id}`}>
                <Typography variant="h6" className="text-xl tracking-tight text-slate-900">{product.productName}</Typography>
              </Link>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <Typography>
                  <span className="text-3xl font-bold text-slate-900">${product.productPrice}</span>
                  <span className="text-sm text-slate-900 line-through">${product.productMRP}</span>
                </Typography>
              </div>
              <div className="flex items-center justify-center w-full bg-blue-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    id: product._id,
                    product,
                  });
                  

                }
              
              }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add To Cart
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
