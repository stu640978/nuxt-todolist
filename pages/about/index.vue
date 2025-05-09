<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold">關於</h1>
    <p>這是一個學習 Nuxt 3 的範例專案。</p>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: '關於',
    meta: [
      {
        name: 'description',
        content: '這是一個學習 Nuxt 3 的範例專案。',
      },
    ],
  })
</script>

<style scoped>

</style>