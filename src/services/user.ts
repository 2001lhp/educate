import type { LoginConfig } from '@/types/user'
import http from '@/utils/http'

export const login = (data: LoginConfig) => {
  return http({
    url: 'login',
    method: 'post',
    data: data
  })
}
