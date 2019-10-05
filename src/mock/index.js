import Mock from 'mockjs'

// 登录
Mock.mock(
    '/sys/login',
    'post',
    {
        'msg': 'success',
        'code': 0,
        'expire': Mock.Random.natural(60 * 60 * 1, 60 * 60 * 12),
        'token': Mock.Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 32)
    })

export default Mock;