<template>
  <div class="min-h-screen flex items-center justify-around bg-[#CBD8D1] ">
    <div class="w-full max-w-sm p-6 bg-[#FFFFFF] shadow-lg rounded-lg outline outline-4 outline-[#137E9E]">
      <h1 class="text-3xl font-bold text-center mb-4">SyncHub</h1>
      <div class="space-y-4">
        <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-3xl"
        >
          <span class="absolute left-4">
            <Icon name="uil:github" style="color: black" />
          </span>
          <span class="mx-auto">Continue Using GitHub</span>
        </button>
        <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-3xl"
        >
          <span class="absolute left-4">
            <Icon name="uil:google" style="color: black" />
          </span>
          <span class="mx-auto">Continue Using Google</span>
        </button>
        <button
          class="relative flex items-center w-full bg-[#FFFBFB] text-black py-2 rounded-3xl"
        >
          <span class="absolute left-4">
            <Icon name="uil:facebook" style="color: black" />
          </span>
          <span class="mx-auto">Continue Using Facebook</span>
        </button>
      </div>
      <div class="flex items-center justify-center my-4">
        <hr class="w-1/4 border-t border-[#05232E]" />
        <span class="px-2 text-sm bg-[#05232E] text-white rounded-full p-2">OR</span>
        <hr class="w-1/4 border-t border-[#05232E]" />
      </div>
      <form>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Email or Username"
            class="w-full p-2 border border-gray-300 rounded-3xl "
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Password"
            class="w-full p-2 border border-gray-300 rounded-3xl "
          />
        </div>
        <div class="flex justify-between text-sm mb-4">
          <a href="#" class="text-[#137E9E] hover:underline">Forgot Password?</a>
          <a href="#" class="text-[#137E9E] hover:underline">Sign Up</a>
        </div>
        <button
          type="submit"
          class="w-full bg-[#137E9E] text-white py-2  hover:bg-[#137E9E] rounded-3xl"
        >
          Sign In
        </button>
      </form>
    </div>
    <div class=" w-[640px]">
      <img src="/images/icon.svg" alt="Illustration" class="" />
    </div>
  </div>
</template>

<script setup>
</script>
