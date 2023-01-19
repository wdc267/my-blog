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
                    <span>Note List</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-2">note one</el-menu-item>
                    <el-menu-item index="1-3">note two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Tag List</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
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
    width: 150px;
    min-height: 100px;
}
</style>