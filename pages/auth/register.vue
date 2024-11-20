<template>
  <div class="min-h-screen flex items-center justify-around bg-[#CBD8D1]">
    <div
      class="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg outline outline-4 outline-[#137E9E]"
    >
      <h1 class="text-5xl font-bold text-center mb-4">SyncHub</h1>
      <form>
        <div class="mb-3">
          <input
            type="text"
            name="Username"
            placeholder="Username"
            id="Username"
            class="w-full p-2 border rounded-full px-4"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            id="Email"
            class="w-full p-2 border rounded-full px-4"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            name="Password"
            placeholder="Password"
            id="Password"
            class="w-full p-2 border rounded-full px-4"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            name="RePassword"
            placeholder="Re-Password"
            id="RePassword"
            class="w-full p-2 border rounded-full px-4"
          />
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
        <div class="flex justify-center gap-5 pb-4">
          <button class="">
            <Icon
              name="simple-icons:github"
              style="color: black"
              size="2rem"
              class=""
            />
          </button>
          <button class="">
            <Icon
              name="simple-icons:google"
              style="color: black"
              size="2rem"
              class=""
            />
          </button>
          <button class="">
            <Icon
              name="simple-icons:facebook"
              style="color: black"
              size="2rem"
              class=""
            />
          </button>
        </div>
        <button
          type="submit"
          class="w-full bg-primary text-white p-2 rounded-3xl transition-colors duration-150 hover:bg-primary/90"
        >
          Sign In
        </button>
        <div class="flex text-base justify-center pt-2 mb-4">
          <span class="font-bold">
            Have an account?
            <NuxtLink
              to="./login"
              class="text-primary font-bold hover:underline"
            >
              Sign In
            </NuxtLink>
          </span>
        </div>
      </form>
    </div>
    <div class="w-[28rem]">
      <img src="/images/icon.svg" alt="Illustration" class="" />
    </div>
  </div>
</template>

<script setup></script>
