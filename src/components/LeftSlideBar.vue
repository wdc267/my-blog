<template>
    <div id="slidebar">
        <el-button id="slide-button" @click="handleState" type="primary" plain>{{isCollapse  ? 'open': 'close'}}</el-button>
        <el-menu 
        default-active="2" 
        class="el-menu-vertical-demo" 
        :collapse="isCollapse" 
        @open="handleOpen"
        @close="handleClose"
        :collapse-transition="false">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Notebook />
                    </el-icon>
                    <span>笔记信息</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">作者：{{ book.writer }}</el-menu-item>
                    <el-menu-item index="1-2">创建时间： {{ book.createTime }}</el-menu-item>
                    <el-menu-item index="1-3">tag： {{ book.tag }}</el-menu-item>
                    <el-menu-item index="1-4">id： {{ book.id }}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Cell 信息</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">id:{{ book.bookInfo[$store.getters.nowIndex].id }}</el-menu-item>
                    <el-menu-item index="2-2">index:{{ book.bookInfo[$store.getters.nowIndex].index }}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore();
const emit = defineEmits(['handleWidth'])
let isCollapse = ref(true)
const handleState = () => {
    isCollapse.value = !isCollapse.value;
    let sideWidth = isCollapse.value ? 55 + 'px' : 150 + 'px';
    emit('handleWidth', sideWidth);
}
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
}
// 获取book信息
const book = store.state.bookList[store.getters.nowBook];
</script>

<style lang="less" scoped>
#slidebar {
    position: fixed;
    top: 125px;
    #slide-button {
        margin-left: -2px;
        margin-bottom:13px;
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100px;
}
</style>