import http from "@/utils/http";

export const apiGetCategory = () => {
  return http({
    url: '/home/category/head'
  })
}
