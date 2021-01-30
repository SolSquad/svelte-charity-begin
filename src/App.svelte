<script>
  import router from 'page'

  // Include our Routes
  import Home from './routes/Home.svelte'

  // Variables
  let page
  let params

  // Set up the pages to watch for
  router('/', () => (page = Home))

  // Set up the router to start and actively watch for changes
  router.start()
</script>

<svelte:component this="{page}" params="{params}" />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
