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

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return http({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}