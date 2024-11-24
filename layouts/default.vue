<template>
  <div class="flex flex-col h-screen m-0;">
    <header class="flex justify-between items-center px-5 py-2.5 bg-tertiary">
      <div class="logo">MyApp</div>
      <nav class="topbar-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <div class="layout flex flex-1">
      <!-- Sidebar -->
      <aside class="sidebar w-64 bg-tertiary p-4">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </aside>

      <!-- Main Content with Resizable Section -->
      <div class="flex flex-1 relative outline-8 outline-secondary rounded-2xl">
        <div
          ref="content"
          class="outline-8 border-primary border-4 box-border rounded-2xl"
          :style="{ flexBasis: `${contentWidth}px` }"
        >
          <slot />
        </div>
        <div
          class="cursor-ew-resize  w-2"
          @mousedown="startResizing"
        ></div>
        <aside
          ref="rightbar"
          class="bg-tertiary box-border p-4 border-l "
          :style="{ flexBasis: `${rightbarWidth}px` }"
        >
          <h3>Notifications</h3>
          <ul>
            <li>You have 3 new messages.</li>
            <li>Your profile is 80% complete.</li>
            <li>Don't forget to check your tasks.</li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Refs untuk elemen dan ukuran
const content = ref(null);
const rightbar = ref(null);
const contentWidth = ref(500); // Default width
const rightbarWidth = ref(300); // Default width
let isResizing = false;

const startResizing = () => {
  isResizing = true;
  document.body.style.cursor = "ew-resize";
};

const stopResizing = () => {
  isResizing = false;
  document.body.style.cursor = "default";
};

const handleMouseMove = (e) => {
  if (!isResizing) return;

  const containerWidth = content.value.parentElement.clientWidth;
  const newContentWidth = e.clientX - content.value.getBoundingClientRect().left;
  const newRightbarWidth = containerWidth - newContentWidth - 2; // Adjust for resizer width

  // Batas minimum dan maksimum
  if (
    newContentWidth >= 300 &&
    newRightbarWidth >= 150 &&
    newContentWidth <= containerWidth - 150
  ) {
    contentWidth.value = newContentWidth;
    rightbarWidth.value = newRightbarWidth;
  }
};

// Tambahkan event listener saat komponen mount
onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", stopResizing);
});

// Hapus event listener saat komponen unmount
onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", stopResizing);
});
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}
.sidebar {
  flex-shrink: 0;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
</style>
