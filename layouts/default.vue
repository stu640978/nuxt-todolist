<template>
  <div>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between">
        <NuxtLink to="/">
          <h1 class="text-xl font-bold">Nuxt To-Do</h1>
        </NuxtLink>
        <div>
          <NuxtLink to="/" class="mr-4">首頁</NuxtLink>
          <NuxtLink to="/about">關於</NuxtLink>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>