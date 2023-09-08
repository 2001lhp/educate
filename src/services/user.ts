import type { LoginConfig, UserEdit } from '@/types/user'
import http from '@/utils/http'

export const login = (data: LoginConfig) => {
  return http({
    url: 'login',
    method: 'post',
    data: data
  })
}

export const reg = (data: LoginConfig) => {
  return http({
    url: 'reg',
    method: 'post',
    data: data
  })
}

export const logout = () => {
  return http({
    url: 'logout',
    method: 'post'
  })
}

export const edituser = (data: UserEdit) => {
  return http({
    url: 'update_info',
    method: 'post',
    data: data
  })
}

export const getcode = (data: { phone: string }) => {
  return http({
    url: 'get_captcha',
    method: 'post',
    data: data
  })
}