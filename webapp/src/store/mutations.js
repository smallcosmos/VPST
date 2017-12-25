import * as TYPES from './mutation-type';

export default {
    [TYPES.LOGOUT_SUCCESS](state){
        state.userInfo = {};
    }
}