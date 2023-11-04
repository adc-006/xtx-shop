import http from "@/utils/http";

/**
 * 新鲜好物
 * @returns 
 */
export const apiFindNew = () => {
  return http({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return http({
    url: 'home/hot'
  })
}