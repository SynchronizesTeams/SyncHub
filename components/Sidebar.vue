<template>
 <div className="h-screen w-fit">
      <aside className="h-full p-2 flex flex-col justify-between w-fit bg-tertiary">
        <div className="space-y-4">
          <div className="w-9 h-9">
            <img src="/public/Images/Home.svg" alt="Home" className="w-full h-full" />
          </div>
          <div className="w-9 h-9">
            <img src="/public/Images/notifications.svg" alt="Notifications" className="w-full h-full" />
          </div>
          <div className="w-9 h-9">
            <img src="/public/Images/Community.svg" alt="Community" className="w-full h-full" />
          </div>
          <div className="w-9 h-9">
            <img src="/public/Images/Favourite.svg" alt="Favourite" className="w-full h-full" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="w-9 h-9">
            <img src="/public/Images/Plus.svg" alt="Add" className="w-full h-full" />
          </div>
          <div className="w-9 h-9">
            <img src="/public/Images/Settings.svg" alt="Settings" className="w-full h-full" />
          </div>
          <div className="w-9 h-9 bg-slate-600 rounded-full"
          @mouseover="showProfileMenu = true"
          @mouseleave="showProfileMenu = false"></div>

        </div>
      </aside>
      <div v-if="showProfileMenu" class="absolute top-20 left-16 z-20">
        <ProfileCard></ProfileCard>
      </div>
    </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
// State untuk mengontrol visibilitas menu profil
const showProfileMenu = ref(false);
</script>

<style></style>
