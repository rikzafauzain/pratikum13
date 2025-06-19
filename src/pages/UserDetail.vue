<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Detail Pengguna</h2>
    <div v-if="user">
      <img :src="user.avatar" class="rounded-full w-24 mb-4" />
      <p><strong>Nama:</strong> {{ user.first_name }} {{ user.last_name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      Memuat detail...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const user = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`https://reqres.in/api/users/${route.params.id}`, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      }
    })
    user.value = res.data.data
  } catch (err) {
    console.error("Gagal memuat detail user:", err)
  }
})
</script>
