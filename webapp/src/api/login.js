/**
 * 登陆页接口API
 */
import { Proxy } from '../lib/proxy';

/**
 * ----------------用户登录相关---------------
 */
export const login = ({ username, password, captcha, autoLogin }) => Proxy.post('/api/login', { username, password, captcha, autoLogin });
export const isLogin = () => Proxy.get('/api/isLogin');
export const logout = () => Proxy.post('/api/logout');
