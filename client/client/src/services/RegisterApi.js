import API from '@/services/API'

export default {
  getUsers () {
    return API().get('user')
  },
  addUser (user) {
    return API().post('addUser', {
      user: user
    })
  }
}
