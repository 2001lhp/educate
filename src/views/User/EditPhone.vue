<script setup lang='ts'>
import { getcode } from '@/services/user'
import { ref } from 'vue'
const phone = ref()
const sms = ref()
const code = async () => {
    let res = await getcode({ phone: phone.value })
    console.log(res);
    sms.value = res.data.data
}
</script>
<template>
    <div class='phone'>
        <div class="top">
            <van-icon name="arrow-left" />
        </div>
        <van-form>
            <p>找回密码</p>
            <van-cell-group inset>
                <van-field v-model="phone" name="密码" placeholder="请输入密码">
                    <template #left-icon>
                        <img class="form-icon" src="../../assets/用户.png" alt="">
                    </template>
                </van-field>
                <van-field v-model="sms" placeholder="验证码">
                    <template #button>
                        <van-button size="small" type="success" block @click="code">发送</van-button>
                    </template>
                    <template #left-icon>
                        <img class="form-icon" src="../../assets/lock.png" alt="">
                    </template>
                </van-field>
                <div style="">
                    <van-button block type="success" native-type="submit">绑 定</van-button>
                </div>
            </van-cell-group>
        </van-form>
    </div>
</template>
<style lang='scss' scoped>
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

.van-cell {
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

        .van-field__button {
            margin-right: 0;
            margin-top: 0;
        }

        .van-button--block {
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
</style>