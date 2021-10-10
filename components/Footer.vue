<template>
  <footer class='text-center'>
    <v-card-text>
      <v-btn v-for='icon in icons' :key='icon' class='mx-4' icon>
        <v-icon size='24px'>
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class='white--text'>
      {{ new Date().getFullYear() }} — <strong>©Buy the Label</strong>
    </v-card-text>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'],
    items: ['default', 'absolute', 'fixed'],
    variant: 'default'
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

<style scoped></style>
