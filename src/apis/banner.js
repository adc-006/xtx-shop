import http from "@/utils/http";

export const apiGetBannerList = () => {
  return http({
    url: '/home/banner',
  })
}