<template>
  <div className="bg-tertiary w-full h-screen flex flex-col overflow-hidden">
    <Topbar />
    <div className="flex flex-1 w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
