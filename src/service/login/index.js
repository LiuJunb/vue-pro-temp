import { httpGet } from '@/http/index.js'

export const login_api = {
  login: '/home1'
}

export default {

  login: (name, password, config) => {
    return httpGet(login_api.login, { name, password }, config)
  },

  loginout: (name, config) => {
    console.log(name)
  }

}
