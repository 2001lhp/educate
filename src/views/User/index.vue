<script setup lang="ts">
import { useUserStore } from '@/stores/user';
const store = useUserStore()

</script>
<template>
  <div class="user">
    <div class="nav-bar">
      <span>我的</span>
      <van-icon name="ellipsis" />
    </div>
    <div class="top">
      <div class="avatar">
        <img :src="store.user.avatar" alt="">
      </div>
      <div>
        <p>{{ store.user.username }}</p>
        <p>{{ store.user.desc ? store.user.desc : '暂无描述' }}</p>
      </div>
      <van-icon name="apps-o" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user {
  .nav-bar {
    height: 44px;
    font-size: 20px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #5ccc84;
    color: white;

    span {
      margin: auto;
      font-size: 16px;
      font-weight: 600;
    }

    .van-icon {
      position: absolute;
      right: 10px;
    }
  }

  .top {
    background-color: #5ccc84;
    height: 175px;
    width: 375px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    position: fixed;
    left: 0;
    right: 0;
    color: white;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: white;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
