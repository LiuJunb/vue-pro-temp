import { httpGet } from '@/http/index.js'

export const login_api = {
  login: '/home1'
}

export default {

  login: (name, password) => {
    return httpGet(login_api.login, { name, password })
  },

  loginout: (name) => {
    console.log(name)
  }

}
