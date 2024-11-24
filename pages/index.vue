<template>
  <div class="">
    <Post />
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
