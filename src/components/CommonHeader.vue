<template>
<el-header>
    <div class="l-content">
        <el-button size="small" @click="handleCollapse" v-if="$store.state.isHomePage">
            <el-icon :size="20">
                <Menu/>
            </el-icon>
        </el-button>
        <el-breadcrumb separator="/" class="bread" v-if="$store.state.isHomePage">
            <!-- 首页是一定存在的写死 -->
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-link  style="padding-left: 10px;" to="/home" v-else><a>返回首页</a></router-link>
    </div>
    <div class="r-content">
        <div class="to-login">
            <router-link to="/login"><a>登录</a></router-link>
            <router-link to="/register"><a>注册</a></router-link>
        </div>
        <el-button class="to-write" type="primary" @click="toWrite" v-show="$store.state.isHomePage">
            发布博客
        </el-button>
        <el-dropdown>
            <span class="el-dropdown-link">
                <img class="user" src="https://s1.ax1x.com/2023/01/20/pSG8gN6.jpg" alt="">
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="toUserCentre">个人中心</el-dropdown-item>
                    <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
                    <el-dropdown-item @click="handleLogOut">注销</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</el-header>
</template>

<script setup>
import { computed, ref, onMounted, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from 'vuex';
import { ElMessage, ElMessageBox } from 'element-plus'
let store = useStore();
// 动态引入图片
const getImgSrc = (user) => {
    return new URL(`../assets/images/${user}.jpg`, import.meta.url).href
};
// 控制菜单折叠栏
let handleCollapse = () => {
    // 调用vuex中的mutations
    store.commit("updateIsCollapse");
}
// 计算当前菜单
const current = computed(() => {
    return store.state.currentMenu;
})
const router = useRouter();
const handleLoginOut = () => {
    store.commit("cleanData");
    router.push({
        name: 'login',
    })
}
const toUserCentre = () => {
    router.push({
        name: 'user',
    })
}
const toWrite = () => {
    // 创建一个新的book
    // 获取到一个新的book并跳转
    store.commit("addBook");
    router.push({
        name:'write',
    })
}
const { proxy } = getCurrentInstance();
const handleLogOut = () => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo.id);
    ElMessageBox.confirm(
        '此操作将注销用户，用户数据将被清空，确定继续吗？',
        'Warning',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
        ).then(async () => {
            await proxy.$api.delUser(userInfo.id)
                .then((res) => {
                    ElMessage({
                        type: 'success',
                        message: '用户已注销',
                    })
                }).catch((error) => {
                    ElMessage({
                        type: 'warning',
                        message: '用户注销失败',
                    })
                })
            await proxy.$api.delBookList(userInfo.id)
                .then((res) => {
                    ElMessage({
                        type: 'success',
                        message: '数据已清空',
                    })
                }).catch((error) => {
                    ElMessage({
                        type: 'warning',
                        message: '数据清空失败',
                    })
                })
        }).catch(() => {
            ElMessage({
                type: 'info',
                message: '注销操作被取消',
            })
        })
}


const handleIsHomePage = () => {
    let path = ref("")
    const route = useRoute()
    path.value = route.path
    if (path.value == '/write') {
        store.state.isHomePage = false;
    } else {
        store.state.isHomePage = true;
    }
}
onMounted(()=> {
    handleIsHomePage();
})
</script>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between; /* 均匀排列每个元素首个元素放置于起点，末尾元素放置于终点 */
    align-items: center; /*将弹性 <div>元素的所有项目的居中对齐：*/
    width: 100%;
    background: #333;
}
.r-content {
    display: flex;
    align-items: center;
    .to-login {
        // display: inline-block;
        margin-right: 20px;
    }
    .to-write {
        margin-right:10px;
    }
    .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
    }
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin-right:20px;
    }
    h3{
        color:#fff;
    }
    .bread :deep(span){
        color: #fff;
        cursor: pointer !important;
    }
}
</style>