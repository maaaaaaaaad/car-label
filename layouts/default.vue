<template>
  <div>
    <header>
      <Navigator />
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navigator from '~/components/default/Navigator'
import Footer from '~/components/default/Footer'

export default {
  components: { Footer, Navigator },
  data() {
    return {}
  }
}
</script>
