<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'
import { h } from 'vue'
import { ElMessage } from 'element-plus'
import { getWeatcher } from '../../api/index'
const router = useRouter()
const route = useRoute()

console.log(route.query)
const openMes = (msg:any)=>{
    ElMessage({
        type:'success',
        message:msg
    })
    getWeatcher().then(res=>{
        console.log(res)
    })
}
</script>

<template>
  <div style="border:1px solid red">
    首页
    <div>
        <el-button type="warning" @click="()=>router.push({name:'mine',params:{id:1}})">跳转到我的页面</el-button>
        <el-button @click="openMes('弹出弹出')">弹出message</el-button>
    </div>

  </div>

</template>

<style lang="scss">

</style>
