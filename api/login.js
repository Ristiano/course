import request from '@/utils/request'
import qs from 'qs'
export default{

    //会员登录
    submitLogin(userInfo){
        return request({
            url: '/api/user/login',
            method: 'post',
            param: userInfo
        })
    },

    //根据token获取会员信息
    getMemberInfo(){
        return request({
            url: '/ucenter/member/getMemberInfo',
            method: 'get',
        })
    }
}
