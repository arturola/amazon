const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQa4JKQA3ksvVhdzglOBtdtb0YSRJgD9AdHIZsB6e8GfprSzhI7eMrYFWKtkd6LrfgzZcVPb4P0msyk4yZDqBVz00txk3iQU8"
);

// API

// Config
const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint:
// http://localhost:5001/arturolatorre--clone/us-central1/api
//
//
