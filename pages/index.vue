<template>
  <div class=""></div>
</template>

<script lang="ts">

definePageMeta({
  middleware: 'auth'
})

export default {
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem("token");
    },
  },
};
</script>

<style scoped></style>
