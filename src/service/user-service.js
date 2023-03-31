import Axios from '@src/axios'

const _axios = new Axios()

class User {
    // 用户登录
    login(loginInfo) {
        return _axios.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }

    // 获取用户列表
    getUserList (pageNum) {
        return _axios.request({
            type: 'POST',
            url: '/manage/user/list.do',
            data: {
                pageNum
            }
        })
    } 

    // 退出登录
    logout () {
        return _axios.request({
            type: 'post',
            url: '/user/logout.do'
        });
    }
}

export default User