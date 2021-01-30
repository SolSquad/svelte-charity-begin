import App from './App.svelte'
let message = '...loading'

const app = new App({
  target: document.body,
  props: {
    name: 'Charities',
    message
  }
})

export default app
