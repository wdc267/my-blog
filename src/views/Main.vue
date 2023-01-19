<template>
<div class="common-layout">
    <el-container class="lay-container">
        <common-aside/>
        <el-container class="r-container">
            <common-header/>
            <el-main class="right-main">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script setup>
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
</script>

<style lang="less" scoped>
.el-container {
    flex-wrap: wrap;
    align-items: flex-start;
    height: 100%;
}
.common-layout {
    .lay-container {
        flex-wrap: nowrap;
        .right-main{
            height: calc(100% - 60px) !important;
        }
    }
    height: 100%;
    & > .el-container {
        height: 100%;
        & > .el-aside {
            height: 100%;
            background-color: #545c64;
        }
    }
}
</style>