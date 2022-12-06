import { Stripe } from "stripe";

const secret = process.env.STRIPE_SECRET_KEY

if(!secret) {
  throw new Error('Need import secret from env')
}

export const stripe = new Stripe(secret, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop'
  }
})