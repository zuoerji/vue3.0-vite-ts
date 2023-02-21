<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <button @click="()=>router.push({path:'/home'})">首页</button>
    <button @click="()=>router.push({path:'/mine'})">我的</button>
  </div>
  <router-view></router-view>
</template>

<style scoped lang="scss">
@import './assets/scss/index.scss';
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
div button{
  background-color: skyblue;
}
</style>
