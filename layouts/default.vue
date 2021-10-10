<template>
  <v-app dark>
    <TopNavi />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer'
import TopNavi from '~/components/TopNavi'

export default {
  components: {
    TopNavi,
    Footer
  },
  data() {
    return {}
  }
}
</script>
