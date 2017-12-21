import * as LoginAPI from '@/api/login'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './mutation-types'
import md5 from 'blueimp-md5'
import router from '@/router'

export default {
  async login({ commit }, account) {
    const { username, captcha, autoLogin } = account
    const password = md5(account.password)
    let res = null

    try {
      res = await LoginAPI.login({
        username,
        password,
        captcha,
        autoLogin,
      })
      commit(LOGIN_SUCCESS, res)
      router.push(window.systemReferrer)
    } catch(e) {
      res = e
    }
    return res
  },
  async isLogin({ commit }) {
    let res = null
    try {
      res = await LoginAPI.isLogin()
      commit(LOGIN_SUCCESS, res)
    } catch(e) {
      res = e
    }

    return res
  },
  async logout({ commit }) {
    await LoginAPI.logout()
    commit(LOGOUT_SUCCESS)
    router.go()
  },
}
