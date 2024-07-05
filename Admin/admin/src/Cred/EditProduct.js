import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../utils/app.utils";
import { Container, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const EditProduct = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const [user, setUsers] = useState([]);


  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortAscending = () => {
    const sorted = [...user].sort((a, b) => a.name.localeCompare(b.name));
    setSortedUsers(sorted);
    setSortOrder('asc');
  };

  // Function to sort users in descending order by name
  const sortDescending = () => {
    const sorted = [...user].sort((a, b) => b.name.localeCompare(a.name));
    setSortedUsers(sorted);
    setSortOrder('desc');
  };
  const sortUsers = (order) => {
    const sorted = [...user].sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setUsers(sorted);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiUrl}/getProduct`);
        setUsers(response.data);
        // setSortedUsers(user);

      } catch (err) {
        console.error(err);

      }
    }
    // `${apiUrl}/updateProduct/`
    fetchData();
  }, []);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedType, setEditedType] = useState('');

  const [editedDescription, setEditedDescription] = useState('');

  const [editedMRP, setEditedMRP] = useState('');

  const [editedPrice, setEditedPrice] = useState('');


  const handleEdit = async (userId) => {
    try {
      await axios.put(`${apiUrl}/updateProduct/${userId}`, {
        productName: editedName,
        productType: editedType,
        productDescription: editedDescription,
        productMRP: editedMRP,
        productPrice: editedPrice
      });
      setEditingUserId(null);
      // Fetch updated data after successful update
      const response = await axios.get(`${apiUrl}/getProduct`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };



  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${apiUrl}/deleteProduct/${userId}`);
      // Fetch updated data after successful deletion
      const response = await axios.get(`${apiUrl}/getProduct`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-black" id="heading">
        Manage Product
      </h3>

      <div className="user_customer">
      
        <section class="container px-4 mx-auto" >


          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-5 dark:bg-pink-800">
                      <tr>
                        <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white-500 dark:text-white-400">
                          <button class="flex items-center gap-x-3 focus:outline-none">
                            <span>Product Name </span>
                            {/* onClick={sortAscending} */}
                            <svg
                              onClick={() => {
                                const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
                                setSortOrder(newOrder);
                                sortUsers(newOrder);
                              }}


                              class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                              <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                              <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                              Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}

                            </svg>

                            {/* onClick={sortAscending} */}


                          </button>
                        </th>

                        <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white-500 dark:text-white-400">
                          Product Type
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white-500 dark:text-white-400">
                          Product Description
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white-500 dark:text-white-400">
                          Product MRP
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white-500 dark:text-white-400">
                          Product Price
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white-500 dark:text-white-400">Action</th>


                        <th scope="col" class="relative py-3.5 px-4">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-white-900">
                      {user.map((Customer) => (
                        <>
                          <tr key={Customer._id}>
                            {editingUserId === Customer._id ? (
                              <div>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  value={editedName}
                                  placeholder="Updated Name"
                                  onChange={(e) => setEditedName(e.target.value)}
                                />
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="Updated Type"

                                  value={editedType}
                                  onChange={(e) => setEditedType(e.target.value)}
                                />
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="Updated Description"

                                  value={editedDescription}
                                  onChange={(e) => setEditedDescription(e.target.value)}
                                />
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="Updated MRP"

                                  value={editedMRP}
                                  onChange={(e) => setEditedMRP(e.target.value)}
                                />
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="Updated Price"

                                  value={editedPrice}
                                  onChange={(e) => setEditedPrice(e.target.value)}
                                />
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(Customer._id)}>Save</button>
                              </div>
                            ) : (
                              <>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                  <div>
                                    <h2 class="font-medium text-black-800 dark:text-black ">{Customer.productName}</h2>
                                  </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                  <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                    {Customer.productType}
                                  </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                  <div>
                                    <h4 class="text-black-700 dark:text-black-200">{Customer.productDescription}</h4>
                                  </div>
                                </td>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                  <div>
                                    <h2 class="font-medium text-black-800 dark:text-black ">{Customer.productMRP}</h2>
                                  </div>
                                </td>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                  <div>
                                    <h2 class="font-medium text-black-800 dark:text-black ">{Customer.productPrice}</h2>
                                  </div>
                                </td>
                                

                                <td class="px-4 py-4 text-sm whitespace-nowrap">

                                  <button onClick={() => setEditingUserId(Customer._id)}><i class='bx bxs-edit'></i></button>
                                  <button onClick={() => handleDelete(Customer._id)}><i class='bx bx-message-alt-x' ></i></button>

                                </td>
                              </>
                            )}
                          </tr>
                        </>

                      ))}



                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>


        </section>






      </div>
    </>
  );
};

export default EditProduct;
