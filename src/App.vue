<template>
  <div class="min-h-screen bg-gray-100 p-6 font-sans">
    <nav class="mb-6 flex gap-4">
      <router-link to="/" class="text-blue-600 underline">Daftar Pengguna</router-link>
      <router-link to="/create" class="text-blue-600 underline">Tambah Pengguna</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
// Tidak perlu script apa-apa kalau hanya untuk shell layout
</script>
