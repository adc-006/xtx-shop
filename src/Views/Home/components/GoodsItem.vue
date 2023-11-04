<script setup>
const props = defineProps({
  good: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item">
    <img :src="props.good.picture" alt="" />
    <p class="name ellipsis">{{ props.good.name }}</p>
    <p class="desc ellipsis">{{ props.good.desc }}</p>
    <p class="price">&yen;{{ props.good.price }}</p>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
