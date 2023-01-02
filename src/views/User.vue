<template>
    <!-- <div>我是User组件</div> -->
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../assets/images/user.jpg" alt="">
                    <div class="user-info">
                        <p class="name">Admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2023-1-1</span></p>
                    <p>上次登录地点：<span>南昌</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top:20px" height="450px">
                <el-table :data="tableData">
                    <el-table-column
                    v-for="(val, key) in tableLabel" 
                    :key="key" 
                    :prop="key" 
                    :label="val"
                    >
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px"></el-col>
    </el-row>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const tableData = [
            {
                name: 'blog1',
                createDate: '2023/1/1',
                updateDate: '2023/1/2',
                writer: 'wdc',
            },
            {
                name: 'blog2',
                createDate: '2023/1/1',
                updateDate: '2023/1/2',
                writer: 'wdc',
            },
            {
                name: 'blog3',
                createDate: '2023/1/1',
                updateDate: '2023/1/2',
                writer: 'wdc',
            },
            {
                name: 'blog4',
                createDate: '2023/1/1',
                updateDate: '2023/1/2',
                writer: 'wdc',
            },
        ];
        const tableLabel = {
            name: '博客名称',
            createDate: '创建日期',
            updateDate: '更新日期',
            writer: '作者名',
        }
        return {
            tableLabel,
            tableData
        }
    }
})
</script>

<style lang="less">
    .home{
        .user{
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
            img{
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-right: 40px;
            }
        }
    }
    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span {
                color:#666;
                margin-left: 70px;
            }
        }
    }
</style>