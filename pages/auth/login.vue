<template>
  <div class="min-h-screen flex items-center justify-around bg-[#CBD8D1]">
    <div
      class="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg outline outline-4 outline-[#137E9E]"
    >
      <h1 class="text-5xl font-bold text-center mb-4">SyncHub</h1>
      <div class="space-y-4">
        <!-- <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-full border"
        >
          <Icon
            name="fluent:document-pdf-20-filled"
            style="color: black"
            size="2rem"
            class="absolute left-2"
          />

          <span class="mx-auto text-secondary/50"> Continue Using PDF </span>
        </button> -->
        <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-full border"
        >
          <Icon
            name="simple-icons:github"
            style="color: black"
            size="2rem"
            class="absolute left-2"
          />

          <span class="mx-auto text-secondary/50"> Continue Using GitHub </span>
        </button>
        <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-full border"
        >
          <Icon
            name="simple-icons:google"
            style="color: black"
            size="2rem"
            class="absolute left-2"
          />

          <span class="mx-auto text-secondary/50"> Continue Using Google </span>
        </button>
        <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-full border"
        >
          <Icon
            name="simple-icons:facebook"
            style="color: black"
            size="2rem"
            class="absolute left-2"
          />

          <span class="mx-auto text-secondary/50">
            Continue Using Facebook
          </span>
        </button>
      </div>
      <div class="flex items-center justify-center my-4">
        <hr class="w-2/4 border-[#05232E]" />
        <span
          class="px-2 text-xs font-bold bg-[#05232E] text-white rounded-full p-2"
        >
          OR
        </span>
        <hr class="w-2/4 border-[#05232E]" />
      </div>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input
            type="text"
            placeholder="Email or Username"
            class="w-full p-2 border rounded-full px-4 transition-all duration-150"
            v-model="form.email"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Password"
            class="w-full p-2 border rounded-full px-4"
            v-model="form.password"
          />
        </div>
        <div class="flex justify-between flex-col text-base mb-4">
          <NuxtLink
            to=""
            class="text-primary font-bold hover:underline cursor-pointer "
          >
            Forgot Password?
          </NuxtLink>
          <span class="font-bold">
            Don't have an account?
            <NuxtLink
              to="./register"
              class="text-primary font-bold hover:underline"
            >
              Sign Up
            </NuxtLink>
          </span>
        </div>
        <button
          type="submit"
          class="w-full bg-primary text-white p-2 rounded-3xl transition-colors duration-150 hover:bg-primary/90"
        >
          Sign In
        </button>
      </form>
    </div>
    <div class="w-[28rem]">
      <img src="/images/icon.svg" alt="Illustration" class="" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await $fetch('https://e294-66-96-225-83.ngrok-free.app/api/v1/auth/login', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Bearer synchub_token_access",
          },
          body: this.form,
          
        })
        if (response?.status === 'success') {
          localStorage.setItem('token', response.data.token)
          console.log("berhasil login", response)
          navigateTo('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
