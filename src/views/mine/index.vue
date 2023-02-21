<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.params)
</script>

<template>
    <div style="border:1px solid yellow">
        个人中心
        <div>
            <el-button type="danger" @click="()=>router.push({path:'/home',query:{id:2}})">跳转到首页</el-button>
        </div>
    </div>
</template>

<style scoped>

</style>
