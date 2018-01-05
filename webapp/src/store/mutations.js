import * as TYPES from './mutation-type';

export default {
    [TYPES.LOGOUT_SUCCESS](state){
        state.userInfo = {};
    },
    [TYPES.TOGGLE_SIDEBAR](state){
        state.sidebarActive = !state.sidebarActive;
    }
}