<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Tambah Pengguna Baru</h2>
    <form @submit.prevent="createUser" class="space-y-3">
      <input v-model="name" type="text" placeholder="Nama" class="border p-2 w-full" required />
      <input v-model="job" type="text" placeholder="Pekerjaan" class="border p-2 w-full" required />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Kirim</button>
    </form>
    <div v-if="responseId" class="mt-4 text-green-600">
      Berhasil menambahkan user! ID: {{ responseId }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const job = ref('')
const responseId = ref('')

const createUser = async () => {
  const res = await axios.post('https://reqres.in/api/users', {
    name: name.value,
    job: job.value,
  },{ headers: {
        'x-api-key': 'reqres-free-v1', // ← wajib sekarang
      }
    })
  responseId.value = res.data.id
}
</script>
