import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetCategory } from '@/apis/layout.js'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategoryList = async () => {
    const { result } = await apiGetCategory()
    categoryList.value = result
  }
  return {
    categoryList,
    getCategoryList
  }
})
