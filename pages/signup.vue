<template>
  <div>
    <v-form ref='register-form'>
      <v-text-field
        v-model='registerForm.id'
        type='text'
        name='id'
        label='id'
        autocomplete='off'
      />
      <v-text-field
        v-model='registerForm.password'
        type='password'
        name='password'
        label='password'
        :rules='[rules.password.required, rules.password.min]'
        autocomplete='off'
      />
      <v-text-field
        v-model='registerForm.verify'
        block
        type='password'
        name='confirm-password'
        label='confirm password'
        :rules='[rules.password.required, passwordMatch]'
        autocomplete='off'
      />
      <v-text-field
        v-model='registerForm.email'
        type='email'
        name='email'
        label='e-mail'
        autocomplete='off'
      />
      <v-text-field
        v-model='registerForm.nickname'
        type='text'
        name='nickname'
        label='nickname'
        autocomplete='off'
      />
      <v-btn @click.prevent='register'>register</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'signup.vue',
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || 'Password must match'
    }
  },
  data: () => ({
    registerForm: {
      id: '',
      password: '',
      verify: '',
      email: '',
      nickname: ''
    },
    rules: {
      password: {
        required: (v) => !!v || 'Required.',
        min: (v) => (v && v.length >= 8) || 'Min 8 characters'
      }
    }
  }),
  methods: {
    async register() {
      if (this.$refs['register-form']) {
        const registerFormData = {
          ...this.registerForm
        }
        const post = await this.$axios.post(
          'http://localhost:8000/register',
          registerFormData,
          {
            withCredentials: true
          }
        )
        try {
          if (post.status === 200) {
            console.log('Done! ' + post.data)
            await this.$router.push('/login')
          }
        } catch (e) {
          console.log('Error! ' + e.message)
        }
      }
    }
  }
}
</script>
