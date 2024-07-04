import React, { useState, useEffect } from "react";
import { TextField, Button, Container } from "@mui/material";
import { apiUrl } from "../utils/app.utils";

const EditProductForm = ({ product, onUpdate }) => {
  const [productName, setProductName] = useState(product.productName);
  const [productMRP, setProductMRP] = useState(product.productMRP);
  const [productPrice, setProductPrice] = useState(product.productPrice);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/updateProduct/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          productMRP,
          productPrice,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedProduct = await response.json();
      onUpdate(updatedProduct);  // Call the onUpdate function to refresh the product list
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Product MRP"
          value={productMRP}
          onChange={(e) => setProductMRP(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default EditProductForm;
