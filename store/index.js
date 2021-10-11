export const state = () => ({})

export const mutations = {
  setUserRegister(state, userData) {
    state.userRegisterFormInit = userData
  },
}

export const actions = {
  async postUserRegister(context, body) {
    return await this.$axios.post('http://localhost:8000/register', body, {
      withCredentials: true,
    })
  },
}
