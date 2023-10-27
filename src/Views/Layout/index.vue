<script setup>
import LayoutNav from '@/Views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/Views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/Views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/Views/Layout/components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategoryList()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>