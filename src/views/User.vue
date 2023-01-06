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
        <el-col :span="16" style="margin-top: 20px">
            <div class="count">
                <el-card 
                :body-style="{ display: 'flex', padding: 0 }"
                v-for="item in countData"
                :key="item.name"
                >
                <component class="icons" :is="item.icon" :style="{ background: item.color }"></component>
                <div class="details">
                    <p class="num">{{item.value}}</p>
                    <p class="txt">{{item.name}}</p>
                </div>
                </el-card>
            </div>
            <el-card style="height: 280px">
                <div ref="echart" style="height:280px"></div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
    setup() {
        const { proxy } = getCurrentInstance();
        let tableData = ref([]);
        let countData = ref([]);
        const tableLabel = {
            name: '博客名称',
            createDate: '创建日期',
            updateDate: '更新日期',
            writer: '作者名',
        }
        const getTableList = async () => {
            // await axios.get("https://www.fastmock.site/mock/671926fb122a9f47cb3da06315f60136/api/user/getTableData").then((res) => {
            //     console.log(res);
            //     if (res.data.code == 200) {
            //         tableData.value = res.data.data.tableData;   
            //     }
            // })
            let res = await proxy.$api.getTableData();
            console.log(res);
            tableData.value = res;
        };
        const getCountData = async () => {
            let res = await proxy.$api.getCountData();
            countData.value = res;
            console.log(res);
        };
        onMounted(() => {
            getTableList();
            getCountData();
        });
//         let xOptions = reactive({
//             legend: {
//                 // 图例文字颜色
//                 textStyle: {
//                     color: "#333",
//                 },
//             },
//             grid: {
//                 left: "20%",
//             },
//             // 提示框
//             tooltip: {
//                 trigger: "axis",
//             },
//             xAxis: {
//                 type: "category", // 类目轴
//                 data: [],
//                 axisLine: {
//                     lineStyle: {
//                         color: "#17b3a3",
//                     },
//                 },
//                 axisLabel: {
//                     interval: 0,
//                     color: "#333",
//                 },
//             },
//             yAxis: [
//                 {
//                     type: "value",
//                     axisLine: {
//                         lineStyle: {
//                             color: "#17b3a3",
//                         },
//                     },
//                 },
//             ],
//             color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
//             series: [],
//         });
//         let pieOptions = reactive({
//             tooltip: {
//                 trigger: "item",
//             },
//             color: [
//                 "#0f78f4",
//                 "#dd536b",
//                 "#9462e5",
//                 "#a6a6a6",
//                 "#e1bb22",
//                 "#39c362",
//                 "#3ed1cf",
//             ],
//             series: [],
// });
//         let orderData = reactive({
//             xData: [],
//             series: [],
//         });
//         let userData = reactive({
//             xData: [],
//             series: [],
//         });
//         let videoData = reactive({
//             series: [],
//         });
        return {
            tableLabel,
            tableData,
            countData,
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
        .count {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .icons {
                    width: 80px;
                    height: 80px;
                    font-size: 30px;
                    text-align: center;
                    line-height: 80px;
                    color: #fff;
                }
            .el-card {
                width: 32%;
                margin-bottom: 20px;
            }
            .details {
                margin-left: 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .num {
                        font-size: 30px;
                        margin-bottom: 10px;
                    }
                
                .txt {
                    font-size: 14px;
                    text-align: center;
                }
            }
        }
    }
</style>