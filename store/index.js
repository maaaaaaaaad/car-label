export const state = () => ({
  userRegisterFormInit: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verify: '',
  },
})

export const mutations = {
  setUserRegister(state, userData) {
    state.userRegisterFormInit = userData
  },
}

export const actions = {
  async postUserRegister(context, body) {
    const res = await this.$axios.post('http://localhost:8000/register', body, {
      withCredentials: true,
    })
    context.commit('setUserRegister', res.data)
  },
}
