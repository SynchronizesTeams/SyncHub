<template>
  <div
    class="z-1000 h-screen relative overflow-hidden w-[50rem] bg-tertiary border-2 border-primary shadow-lg rounded-2xl py-4 z-50"
  >
    <div class="relative flex flex-col items-center">
      <img
        src="https://via.placeholder.com/320x80"
        alt="Banner"
        class="w-full h-40 rounded-t-lg object-cover border-primary border-2 rounded-2xl"
      />
      <div class="absolute transform translate-y-1/2">
        <div class="relative">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile Picture"
          class="w-36 rounded-full border-4 border-primary"
        />
        <!-- Lingkaran hijau untuk penanda online -->
        <div
          class="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-2 border-white rounded-full"
        ></div>
      </div>
      </div>
      
    </div>

    <div class="mt-6 px-6 absolute">
      <p class="text-sm text-gray-500">User since 7 December 1941</p>
    </div>


    <div class="px-6">
      <!-- Nama profil atau detail -->
      <div class="p-4 pt-8 mt-8">
        <div class="text-center">
          <h2 class="text-2xl font-semibold">Shin-Tae-Yong</h2>
          <p class="text-sm text-gray-500">Verified ✅</p>
        </div>
      </div>

      <!-- Stats follow -->
      <div class="flex justify-center gap-5 text-gray-600 text-lg">
        <p>69 posts</p>
        <p>69 followers</p>
        <p>69 following</p>
      </div>

      <!-- Konten tambahan -->
      <div class="mt-9 space-y-9">
        <div class="p-8 bg-gray-100 rounded-2xl h-40 border-2 border-primary">
          <p class="text-sm">placeholder.</p>
          <p class="text-xs text-gray-500">for putting stuff in.</p>
        </div>
        <div class="p-8 bg-gray-100 h-40 border-2 rounded-2xl border-primary">
          <p class="text-sm">placeholder.</p>
          <p class="text-xs text-gray-500">maybe activities/showcases</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<style>
/* Tambahan styling jika diperlukan */
</style>
