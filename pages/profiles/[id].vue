<template>
  <div
    class="flex w-2/4 h-full mx-auto bg-tertiary outline outline-primary rounded-3xl"
  >
    <div
      class="flex h-32 w-32 mx-8 my-8 bg-white rounded-full outline-1 outline outline-primary"
    >
      <span
        class="absolute mx-24 mt-20 h-9 w-9 bg-[#6E9B65] rounded-full"
      ></span>

      <div class="absolute">
        <span
          class="flex h-[100px] w-[550px] mt-60 mx-10 outline outline-primary rounded-xl bg-white"
        ></span>

        <span
          class="flex h-[200px] w-[550px] mt-8 mx-10 outline outline-primary rounded-xl bg-white"
        ></span>
      </div>
    </div>
    <div class="flex ml-6 mt-12">
      <h1 class="text-3xl font-semibold">JokoGaming</h1>
      <span class="absolute mt-8">
        <h2 class="font-semibold text-lg">Joko Wimulyono</h2>
      </span>

      <div class="absolute mt-20">
        <p class="font-semibold">I Love Papua</p>
        <span class="flex mt-10">
          <p class="text-black opacity-65 hover:opacity-100">View More Info</p>
        </span>
      </div>
      <div class="absolute mt-44">
        <span class="flex -ml-10 space-x-20 font-thin">
          <h1 class="text-xl">69 Post</h1>
          <h1 class="text-xl">69 Follower</h1>
          <h1 class="text-xl">69 Following</h1>
        </span>
      </div>
    </div>
<!-- 
    <div class="relative w-2 h-full ml-5 px-20 bg-tertiary outline outline-primary rounded-3xl">

    </div> -->
  </div>
</template>

<script>
definePageMeta({
  layout: "dashboard",
});
</script>
