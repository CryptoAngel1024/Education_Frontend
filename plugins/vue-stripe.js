import Vue from 'vue'
import {
  StripePlugin,
  StripeCheckout,
  StripeElementCard,
} from '@vue-stripe/vue-stripe'

export default () => {
  Vue.component('StripeCheckout', StripeCheckout)
  Vue.component('StripeElementCard', StripeElementCard)
  console.log(process.env.STRIPE_PK)
  Vue.use(StripePlugin, {
    pk: 'ddd',
  })
}
