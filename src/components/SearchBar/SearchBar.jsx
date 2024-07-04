import React, { useContext, useState } from "react";

import { cartContext } from "../../GlobalState/CartContext";
import { Link } from "react-router-dom";
import { productsContext } from "../../GlobalState/ProductsContext";
import Carousel from "../Carousel/Carousel";
import BannerBottom from "../Banner/BannerBottom";
import '../Product/Product.css'
import { Container, InputAdornment, TextField, Typography } from "@mui/material";
import { AiOutlineSearch } from 'react-icons/ai';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const { dispatch } = useContext(cartContext);
    const products = useContext(productsContext);

    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
<>
<div id="searchbar">
<Container style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 5 }}>
        <TextField
          id="search"
          type="search"
          label="Search Products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: { xs: 350, sm: 500, md: 800 }, }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AiOutlineSearch />
              </InputAdornment>
            ),
          }}
        />
        {searchQuery.length > 0 && (
          <Box sx={{ width: { xs: 350, sm: 500, md: 800 }, overflowY: "scroll", height: "200px" }}>
            <Stack spacing={0}>
              {filteredProducts.length === 0 ? (
                <Typography variant="h6" textAlign="center" margin="25px 0">Product Not Found</Typography>
              ) : (
                filteredProducts.map(product => (
                  <Link to={`/product/${product._id}`} key={product._id}>
                    <Paper sx={{ borderRadius: 0, display: 'flex', justifyContent: 'space-between', padding: "2px 15px", alignItems: 'center' }}>
                      <Typography variant="body2">{product.productName.slice(0, 35)}</Typography>
                      <img src={product.productImage} alt={product.productName} style={{ width: 55, height: 65 }} />
                    </Paper>
                  </Link>
                ))
              )}
            </Stack>
          </Box>
        )}
      </Container>
      </div>
</>
  )
}

export default SearchBar