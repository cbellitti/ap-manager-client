<template>
  <div class="home">
    <MainMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainMenu from '@/components/MainMenu.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    MainMenu
  }
})
</script>
