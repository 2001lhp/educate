<script setup lang='ts'>
import { logout } from '@/services/user';
import { useUserStore } from '@/stores/user';
import { showConfirmDialog, showToast } from 'vant';
const store = useUserStore()
const log = async () => {
    await showConfirmDialog({
        message: '是否要退出登录？',
    })
    const res = await logout()
    showToast(res.data.data)
    localStorage.removeItem('user')
}
</script>
<template>
    <div class='setting'>
        <nav-bar title="我的设置" />
        <van-cell-group>
            <van-cell title="账户安全" is-link />
            <van-cell title="清除缓存" value="2.00 KB" />
            <van-cell title="检查更新" is-link />
            <van-cell title="当前版本" value="1.0.0" />
        </van-cell-group>
        <van-button type="success" block @click="log" v-show="store.user.token !== undefined">退出登录</van-button>
    </div>
</template>
<style lang='scss' scoped>
:deep(.van-cell__value) {
    font-size: 16px;
    color: black;
}

.van-button {
    width: 90%;
    height: 50px;
    margin: 15px auto;
    font-size: 16px;
}
</style>