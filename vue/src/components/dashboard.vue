<template>
<div class="min-h-full">
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <button v-on:click="logout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <!-- /End replace -->
    </div>
  </main>
</div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();

onMounted(() => {
  if (!store.state.user.token) {
    useRouter().push("/login")
  }
})

const logout = () => {
  store.dispatch("logout")
  .then(() => router.push("/login"))
}

</script>

<style>

</style>