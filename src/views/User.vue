<template>
    <!-- <div>我是User组件</div> -->
    <el-row class="home" :gutter="20">
        <el-col :span="24" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../assets/images/user.jpg" alt="">
                    <div class="user-role">
                        <p class="name">{{userInfo.id}}</p>
                        <p class="role">{{ userInfo.id == 'wdc' ? '管理员' : '用户' }}</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2023-1-1</span></p>
                    <p>上次登录地点：<span>南昌</span></p>
                </div>
            </el-card>
        </el-col>
        <el-col :span="24" style="margin-top: 20px">
            <el-card class="user-info" shadow="hover">
                <div slot="header" class="clearfix">
                    <div style="font-weight: 600; font-size: 20px;border-bottom: 1px solid #f0f0f2;">个人信息</div>
                        <div class="details">
                            <ul>
                                <li><div class="title">用户昵称：</div>{{ userInfo.name }}</li>
                                <li><div class="title">用户ID：</div>{{ userInfo.id }}</li>
                                <li><div class="title">性别：</div>{{ userInfo.sex }}</li>
                                <li><div class="title">联系电话：</div>{{ userInfo.telephone}}</li>
                                <li><div class="title">住址：</div>{{ userInfo.address }}</li>
                                <li><div class="title">邮箱：</div>{{ userInfo.email }}</li>
                            </ul>
                        </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
const { proxy } = getCurrentInstance();
// 用户信息
let userInfo = JSON.parse(localStorage.getItem('userInfo'));
onMounted(() => {
});
</script>

<style lang="less">
.home{
        .user{
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
            .user-role {
                .name {
                    font-size: 30px;
                }
                .role {
                    font-size: 25px;
                }
            }
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-right: 40px;
            }
        }
        .login-info {
            p {
                line-height: 30px;
                font-size: 14px;
                color: #999;

                span {
                    color: #666;
                    margin-left: 60px;
                }
            }
        }
        .user-info {
            .details {
                margin-top: 15px;
                ul {
                    list-style: none;
                    li {
                            .title {
                                display: flex;
                                width: 100px;
                                padding-left: 5px;
                            }
                            display: flex;
                            height: 30px;
                            line-height: 30px;
                            align-items: baseline;
                        }
                }
            }
        }
    }
</style>