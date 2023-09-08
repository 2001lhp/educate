<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import img1 from '@/assets/订单.png'
import img2 from '@/assets/消息.png'
import img3 from '@/assets/星形.png'
import img4 from '@/assets/视频.png'
const store = useUserStore()
const nav = [
  { name: '订单', icon: img1 },
  { name: '消息', icon: img2 },
  { name: '收藏', icon: img3 },
  { name: '在学', icon: img4 }
]
</script>
<template>
  <div class="user">
    <div class="nav-bar">
      <span>我的</span>
      <van-icon name="ellipsis" @click="$router.push('/setting')" />
    </div>
    <div class="top"> </div>
    <div class="body">
      <div class="head">
        <div class="avatar">
          <img :src="store.user.avatar" alt="">
        </div>
        <div class="info" @click="$router.push('/login')">
          <p>{{ store.user.nickname ? store.user.nickname : '立即登录' }}</p>
          <!-- <p>{{ store.user.desc ? store.user.desc : '暂无描述' }}</p> -->
          <p>{{ store.user.desc !== undefined ? (store.user.desc !== '' ? store.user.desc : '暂无描述') : '登录解锁更多功能' }}</p>
        </div>
        <van-icon name="apps-o" v-show="store.user" @click="$router.push('/userinfo')"/>
      </div>
      <div class="nav">
        <div v-for="item in nav" :key="item.name">
          <img :src="item.icon" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <van-cell-group>
        <van-cell title="我的优惠券" is-link>
          <template #icon><img src="@/assets/优惠券.png" /></template>
        </van-cell>
        <van-cell title="常见问题" is-link icon="question-o" />
        <van-cell title="设置" is-link icon="apps-o" @click="$router.push('/setting')" />
      </van-cell-group>
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
    z-index: -1;
  }

  .body {
    .head {
      display: flex;
      align-items: center;
      color: white;
      padding: 15px;

      .info {
        flex: 1;
        padding-left: 15px;
        flex-direction: column !important;

        :first-child {
          font-size: 18px;
          margin-bottom: 10px;
        }

        :last-child {
          font-size: 12px;
        }
      }

      .van-icon {
        font-size: 17px;
      }

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

    .nav {
      /* height: 100px; */
      margin: 15px;
      padding: 15px 0;
      display: flex;
      justify-content: space-around;
      background-color: white;
      border-radius: 5px;
      box-shadow: 0 0 10px #ddd;

      div {
        text-align: center;

        img {
          width: 22px;
          height: 22px;
        }

        p {
          color: #6c757d;
          font-size: 12px;
        }
      }
    }

    :deep(.van-cell) {
      padding: 10px 30px;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      .van-cell__left-icon {
        font-size: 20px;
        margin-right: 10px;
        color: #4396ec;
      }
    }
  }
}
</style>
