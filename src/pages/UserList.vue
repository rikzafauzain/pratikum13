<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Daftar Pengguna</h2>

    <div v-if="loading">Memuat data...</div>

    <ul v-else class="space-y-2">
      <li
        v-for="user in users"
        :key="user.id"
        class="flex items-center gap-4 p-2 border rounded"
      >
        <img :src="user.avatar" class="w-12 h-12 rounded-full" />
        <div>
          <p class="font-semibold">
            {{ user.first_name }} {{ user.last_name }}
          </p>
          <p class="text-sm text-gray-500">{{ user.email }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    console.log(res.data); // Cek di devtools
    users.value = res.data.data;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  } finally {
    loading.value = false;
  }
});
</script>
