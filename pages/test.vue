<template>
  <div class="flex h-screen border-2 border-blue-600 rounded-lg">
    <!-- Sidebar -->
    <div class="w-1/6 bg-gray-200 border-r-2 border-blue-600 p-4">
      <div class="h-16 mb-4 flex items-center justify-center bg-gray-300 rounded-full">
        <!-- Profile Icon -->
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          class="rounded-full"
        />
      </div>
      <!-- Sidebar Items -->
      <nav class="space-y-4">
        <div class="h-12 w-full bg-gray-300 rounded-md"></div>
        <div class="h-12 w-full bg-gray-300 rounded-md"></div>
      </nav>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Top Bar -->
      <div class="h-16 bg-gray-200 border-b-2 border-blue-600 flex items-center px-4 justify-between">
        <div>
          <!-- Search Input -->
          <input
            type="text"
            placeholder="Search"
            class="px-4 py-2 border border-gray-400 rounded-md"
          />
        </div>
        <div>
          <!-- Profile Icon -->
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            class="w-12 h-12 rounded-full"
          />
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-4">
        <!-- Add your content here -->
        <div class="h-full bg-gray-100 rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan styling khusus jika diperlukan */
</style>
  