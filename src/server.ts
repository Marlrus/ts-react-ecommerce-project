import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import stripeImport, { IStripeError, charges } from 'stripe';

require('dotenv').config();

//enable stripe library
const stripe = new stripeImport(process.env.STRIPE_SECRET_KEY!);

const app = express();

//Body Parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cross Origin Request
app.use(cors());

//How we will serve in production
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'client/build')));

   //Every URL
   app.get('*', (req, res) => {
      res.sendFile(
         path.join(__dirname, 'client/build', 'index.html')
      );
   });
}

//Server
const port = process.env.PORT || 5000;

app.listen(port, () =>
   console.log(`Server running on port ${port}`)
).on('error', (err) => {
   throw err;
});

app.post('/payment', (req, res) => {
   //What stripe needs
   const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
   };

   //Stripe request and response
   stripe.charges.create(
      body,
      (err: IStripeError, response: charges.ICharge) => {
         err
            ? res.status(500).send({ error: err })
            : res.status(200).send({ success: response });
      }
   );
});
