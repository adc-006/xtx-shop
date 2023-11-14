import http from "@/utils/http";

/**
 * 获取二级分类
 * @param {*} params 
 * @returns 
 */
export const apiGetCategoryData = (params) => {
  return http({
    url: '/category',
    params
  })
}