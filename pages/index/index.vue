<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold">待辦事項清單</h1>
    <form class="my-4" @submit.prevent="addTodo">
      <input
          v-model="newTodo"
          type="text"
          placeholder="輸入待辦事項"
          class="border p-2 mr-2"
      >
      <button type="submit" class="bg-blue-500 text-white p-2 rounded cursor-pointer">
        新增
      </button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="my-2">
        {{ todo }}
        <button
            class="ml-2 text-red-500 cursor-pointer"
            @click="removeTodo(index)"
        >
          刪除
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const newTodo = ref('')
  const { data: todos, refresh } = await useFetch('/api/todos', {
    default: () => [],
  })

  const addTodo = async () => {
    if (newTodo.value.trim()) {
      await $fetch('/api/todos', {
        method: 'POST',
        body: { todo: newTodo.value },
      })
      todos.value.push(newTodo.value) // 將新待辦事項加入列表
      newTodo.value = ''
      // await refresh() // 重新獲取資料
    }
  }

  const removeTodo = (index) => {
    todos.value.splice(index, 1)
  }

  useSeoMeta({
    title: '待辦事項 - 首頁',
    description: '一個簡單的 Nuxt 3 待辦事項應用',
  })
</script>

<style scoped>

</style>