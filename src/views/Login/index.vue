<script setup lang="ts">
import { ref } from 'vue';
import { login, reg } from '@/services/user';
import { showToast } from 'vant';
import { useUserStore } from '@/stores/user';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const show = ref(false)
const store = useUserStore()
const username = ref('lhp111');
const password = ref('111111');
const repassword = ref('')
const onSubmit = async () => {
  if (show.value) {
    const regres = await reg({ username: username.value, password: password.value, repassword: repassword.value })
    console.log(regres);

  } else {
    if (!checked.value) return showToast('请先阅读并同意用户协议&隐私声明')
    const res = await login({ username: username.value, password: password.value, repassword: repassword.value })
    console.log(res);
    store.user = res.data.data
    showToast('登录成功')
    router.push('/user')
  }
}
const checked = ref(false)
</script>
<template>
  <div class="login">
    <div class="top">
      <van-icon name="arrow-left" />
    </div>
    <van-form @submit="onSubmit">
      <p>{{ show ? '注 册' : '登 录' }}</p>
      <van-cell-group inset>
        <van-field v-model="username" name="用户名" placeholder="请输入用户名">
          <template #left-icon>
            <img class="form-icon" src="../../assets/用户.png" alt="">
          </template>
        </van-field>
        <van-field v-model="password" name="密码" placeholder="请输入密码">
          <template #left-icon>
            <img class="form-icon" src="../../assets/lock.png" alt="">
          </template>
        </van-field>
        <van-field v-model="repassword" name="密码" placeholder="请输入确认密码" v-show="show">
          <template #left-icon>
            <img class="form-icon" src="../../assets/lock.png" alt="">
          </template>
        </van-field>
      </van-cell-group>
      <div style="">
        <van-button block type="success" native-type="submit">{{ show ? '注 册' : '登 录' }}</van-button>
      </div>
      <div class="font">
        <span @click="show = !show">{{ show ? '去登录' : '注册账号' }}</span>
        <span @click="$router.push('/forget')">忘记密码？</span>
      </div>
    </van-form>
    <div class="footer">
      <div class="img"><img src="@/assets/微信.png" alt=""></div>
      <van-checkbox v-show="!show" v-model="checked" shape="square">已阅读并同意用户协议&隐私声明</van-checkbox>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  .top {
    height: 110px;
    background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
    padding: 15px;

    .van-icon {
      color: #fff;
      font-size: 20px;
    }
  }

  .van-form {
    padding: 30px 35px 0 35px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-top: -10px;
    background-color: #fff;

    p {
      font-size: 22px;
      margin-bottom: 25px;
      color: #35404b;
    }
  }

  .van-cell-group--inset {
    margin: 0;
  }

  :deep(.van-field) {
    height: 50px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 15px;

    .van-field__left-icon {
      display: flex;
      align-items: center;
    }

    .van-field__body {
      font-size: 17px;
      color: #ccc;
      margin-left: 12px;
    }
  }

  .form-icon {
    width: 16px;
    height: 16px;
  }

  .font {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    margin: 15px 0;
    font-size: 15px;

    :first-child {
      color: #5ccc84;
    }

    :last-child {
      color: #a9a5a0;
    }
  }

  .footer {
    text-align: center;

    .img {
      width: 50px;
      height: 50px;
      margin: auto;
      border-radius: 50%;
      border: 1px solid #5ccc84;
      justify-content: space-around;
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
      }
    }

    :deep(.van-checkbox) {
      margin-top: 20px;
      justify-content: center;

      .van-checkbox__label {
        color: #ccc;
        font-size: 15px;
      }

      .van-checkbox__icon {
        font-size: 15px;
      }
    }
  }
}
</style>
@/stores/user