<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
import { edituser } from '@/services/user'
import { ref } from 'vue';
const store = useUserStore()
// const nickname = ref(store.user.nickname)
// const sex = ref(store.user.sex)
const show = ref(false)
const actions = [
    { name: '未知' },
    { name: '男' },
    { name: '女' },
];
const change = (e: { name: string }) => {
    store.user.sex = e.name
}
const submit = async () => {
    const res = await edituser({ avatar: '', nickname: store.user.nickname, sex: store.user.sex })
    console.log(res);
}
</script>
<template>
    <div class='info'>
        <nav-bar title="编辑资料" />
        <van-cell-group>
            <van-cell title="头像" value="">
                <template #value>
                    <div class="avatar">
                        <img :src="store.user.avatar" alt="">
                    </div>
                </template>
            </van-cell>
            <van-cell title="昵称">
                <template #value>
                    <input style="width: 100px;border: 0;text-align: right;" type="text" v-model="store.user.nickname">
                </template>
            </van-cell>
            <van-cell title="性别" :value="store.user.sex" @click="show = true" />
            <van-cell title="手机" :value="store.user.phone" @click="$router.push('/phone')"/>
        </van-cell-group>
        <van-button type="success" block @click="submit">提 交</van-button>
        <van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action @select="change" />
    </div>
</template>
<style lang='scss' scoped>
:deep(.van-cell__value) {
    font-size: 16px;
    color: black;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    margin-left: 130px;

    img {
        width: 100%;
        height: 100%;
    }
}

.van-button {
    width: 90%;
    height: 50px;
    margin: 15px auto;
    font-size: 16px;
}
</style>