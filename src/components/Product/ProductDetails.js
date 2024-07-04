
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../GlobalState/ProductsContext";
import { cartContext } from "../../GlobalState/CartContext";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(productsContext);
  console.log("jhgj")
  const product = products.find((product) => product._id === id);
  const { dispatch } = useContext(cartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
  
    <div className="bg-grey-100 dark:bg-white-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img 
                                className="w-full h-full object-cover" 
                                src={product.productImage} 
                                alt="Product"
                            />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button  onClick={() => {
                                   dispatch({
                                     type: "ADD_TO_CART",
                                     id: product._id,
                                     product,
                                   });
                                 }} className="w-full bg-blue-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-black-800 dark:text-black mb-2">{product.productName}</h2>
                        <p className="text-black-600 dark:text-black-300 text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-black-700 dark:text-black-300">Price:</span>
                                <span className="text-black-600 dark:text-black-300">${product.productPrice}</span>
                            </div>
                            <div>
                                <span className="font-bold text-black-700 dark:text-black-300">Availability:</span>
                                <span className="text-black-600 dark:text-black-300">In Stock</span>
                            </div>
                        </div>
                       
                        <div>
                            <span className="font-bold text-black-700 dark:text-black-300">Product Description:</span>
                            <p className="text-black-600 dark:text-black-300 text-sm mt-2">
                            {product.productDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
  );
};

export default ProductDetails;
