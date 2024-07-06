import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { cartContext } from "../../GlobalState/CartContext";
import { decrement, deleteProduct, increment } from "../../actions";
import Icon from 'awesome-react-icons';
import '../Product/Product.css';

const Cart = () => {
  const { shoppingCart, dispatch, qty } = useContext(cartContext);

  // Calculate total price
  const totalPrice = shoppingCart.reduce((acc, product) => acc + product.productPrice * product.qty, 0);

  const handleToken = (token) => {
    console.log("Hi");
  };

  return (
    <div className="container">
      <h1 className="main-heading">Shopping Cart</h1>
      <div className="cart-container">
        {shoppingCart.length ? (
          shoppingCart.map((product) => (
            <div className="each-product" key={product._id}>
              <div className="img-cont">
                <img
                  src={product.productImage}
                  alt="not-found"
                  className="responsive-img"
                />
              </div>
              <div className="prod-name">{product.productName}</div>
              <div className="prod-price">${product.productPrice}.00</div>
              <div className="prod-cta">
                <Icon name="plus" onClick={() => dispatch(increment(product._id))} />
                <span className="cart-quantity">{product.qty}</span>
                <Icon name="minus" onClick={() => dispatch(decrement(product._id))} />
              </div>
              <div className="total-prod-price">
                ${product.productPrice * product.qty}
              </div>
              <div className="total-prod-price">
                <i
                  className="fas fa-trash-alt"
                  onClick={() => dispatch(deleteProduct(product._id))}
                ></i>
              </div>
            </div>
          ))
        ) : (
          <span>No Product Found</span>
        )}
      </div>
      {shoppingCart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="pay-total-items">
              <div className="items">Total Items</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
              <div className="title">Total Price</div>
              <div className="items-price">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="stripe-section">
              <StripeCheckout
                stripeKey="pk_test_51I2rmvG1SGhtxvtXhcM6ojfL5EknI0UiE5jqQedC0gFL6vAImspnRjomUXpZPgZuDRngSKBMSBG4GpibRC4crPZa00O1pb58yO"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name="All Products"
              ></StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Cart;
