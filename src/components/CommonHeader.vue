<template>
<el-header>
    <div class="l-content">
        <el-button size="small" @click="handleCollapse">
            <el-icon :size="20">
                <Menu/>
            </el-icon>
        </el-button>
        <h3>首页</h3>
    </div>
    <div class="r-content">
        <div class="to-login">
            <router-link to="/register"><a>注册</a></router-link>
            <router-link to="/login"><a>登录</a></router-link>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <img class="user" :src="getImgSrc('user')" alt="">
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</el-header>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup() {
        let store = useStore()
        // 动态引入图片
        const getImgSrc = (user) => {
            return new URL(`../assets/images/${user}.jpg`, import.meta.url).href
        };
        let handleCollapse = () => {
            // 调用vuex中的mutations
            store.commit('updateIsCollapse');
        }
        return {
            getImgSrc,
            handleCollapse
        }
    }
}
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
}
</style>