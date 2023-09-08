<script setup lang="ts">
import { ref } from 'vue';
import { login, reg } from '@/services/user';
import { showToast } from 'vant';
import { useUserStore } from '@/stores/user';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const username = ref('');
const password = ref('');
const repassword = ref('')
const sms = ref()
</script>
<template>
    <div class="forget">
        <div class="top">
            <van-icon name="arrow-left" @click="$router.back()"/>
        </div>
        <van-form>
            <p>找回密码</p>
            <van-cell-group inset>
                <van-field v-model="username" name="手机号" placeholder="请输入手机号">
                    <template #left-icon>
                        <img class="form-icon" src="../../assets/用户.png" alt="">
                    </template>
                </van-field>
                <van-field v-model="sms"  placeholder="验证码">
                    <template #button>
                        <van-button size="small" type="success" block>发送</van-button>
                    </template>
                    <template #left-icon>
                        <img class="form-icon" src="../../assets/lock.png" alt="">
                    </template>
                </van-field>
                <van-field v-model="password" name="密码" placeholder="请输入密码">
                    <template #left-icon>
                        <img class="form-icon" src="../../assets/lock.png" alt="">
                    </template>
                </van-field>
                <van-field v-model="repassword" name="密码" placeholder="请输入确认密码">
                    <template #left-icon>
                        <img class="form-icon" src="../../assets/lock.png" alt="">
                    </template>
                </van-field>
            </van-cell-group>
            <div style="">
                <van-button block type="success" native-type="submit">立即找回</van-button>
            </div>
        </van-form>
    </div>
</template>
<style lang="scss" scoped>
.forget {
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
    .van-cell{
        padding: 0;
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
        /* padding: 15px; */

        .van-field__left-icon {
            display: flex;
            align-items: center;
            margin-left: 16px;
        }

        .van-field__body {
            font-size: 17px;
            color: #ccc;
            margin-left: 12px;
            .van-field__button{
                margin-right: 0;
                margin-top: 0;
            }
            .van-button--block{
                height: 50px;
                width: 100px;
                font-size: 14px;
            }
        }
    }

    .form-icon {
        width: 16px;
        height: 16px;
    }
}
</style>