import http from "@/utils/http";

export const apiGetBannerList = (params = {}) => {
  const { distributionSite = '1' } = params
  return http({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}