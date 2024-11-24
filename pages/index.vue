<template>
  <div class=" bg-tertiary w-full h-full border-t-primary border-l-primary border-tertiary rounded-tl-3xl border-[2px]">
    
  </div>
</template>

<script lang="ts">

definePageMeta({
  layout: "dashboard",
})

export default {
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem("token");
    },
  },
};

</script>

<style scoped>
</style>
