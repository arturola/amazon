import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more products
              click on the "Add to basket" next ot the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              Your Shopping Basket: {user?.email}
            </h2>

            {/*list out all the Checkout products*/}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        {basket?.length > 0 && (
          <div>
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
