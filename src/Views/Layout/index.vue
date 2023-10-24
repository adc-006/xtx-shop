<script setup>
import LayoutNav from '@/Views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/Views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/Views/Layout/components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>