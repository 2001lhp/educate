<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
defineProps<{
    title: string
}>()
const onClickLeft = () => {
    router.back()
}
</script>
<template>
    <div class='bar'>
        <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    </div>
</template>
<style lang='scss' scoped></style>