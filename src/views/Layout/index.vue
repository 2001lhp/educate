<script setup lang="ts">
import img1 from '@/assets/home_selected.png'
import img2 from '@/assets/home.png'
import img3 from '@/assets/index1_selected.png'
import img4 from '@/assets/index1.png'
import img5 from '@/assets/learn_selected.png'
import img6 from '@/assets/learn.png'
const tabbar = [
  { name: '首页', path: '/home', icon1: img3, icon2: img4 },
  { name: '学习', path: '/Learn', icon1: img5, icon2: img6 },
  { name: '我的', path: '/user', icon1: img1, icon2: img2 }
]
</script>
<template>
  <div class="index">
    <router-view></router-view>
    <div class="tabbar">
      <div v-for="item in tabbar" :key="item.name" @click="$router.push(item.path)"
        :class="item.path == $route.path ? '' : 'active'">
        <img :src="item.path == $route.path ? item.icon1 : item.icon2" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.index {
  .tabbar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ddd;

    div {
      text-align: center;

      img {
        width: 24px;
        height: 24px;
      }
    }

    .active {
      color: rgb(187, 186, 199);
    }
  }
}
</style>
