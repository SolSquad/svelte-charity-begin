import App from './App.svelte'
let message = '...loading'

const app = new App({
  target: document.body,
  props: {
    name: 'Edwin',
    message
  }
})

export default app
