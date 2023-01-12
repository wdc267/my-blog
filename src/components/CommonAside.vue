<template>
    <el-aside :width="$store.state.isCollapse ? '200px' : '64px'">
        <el-menu 
        default-active="2" 
        class="el-menu-vertical-demo" 
        background-color="#545c64" 
        text-color="#fff"
        :collapse="!$store.state.isCollapse"
        :collapse-transition="false"
        >
        <h3 v-show="$store.state.isCollapse">个人博客</h3>
        <h3 v-show="!$store.state.isCollapse">博客</h3>
            <el-menu-item 
            :index="item.path" 
            v-for="item in noChildren()"
            :key="item.path"
            @click="clickMenu(item)"
            >   
                <!-- 动态引入icon -->
                <component class="icons" :is="item.icon"></component> 
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item 
                    :index="subItem.path" 
                    v-for="(subItem,subIndex) in item.
                    children" :key="subIndex"
                    @click="clickMenu(subItem)"
                    >
                    <component class="icons" :is="subItem.icon"></component>
                    <span>{{ subItem.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        const list = [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'House',
                url: 'Home/Home'
            },
            {
                path: '/user',
                name: 'user',
                label: '个人中心',
                icon: 'user',
                url: 'UserManage/UserManage'
            },
            {
                path: '/blogs',
                name: 'blogs',
                label: '我的博客',
                icon: 'Collection',
                url: 'MallManage/MallManage'
            },
            {
                label: '其它',
                icon: 'location',
                path:'/other',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '用户管理',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '博客管理',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    }
                ]
            }
        ];
        const router = useRouter();
        const noChildren = () => {
            return asyncList.filter((item) => !item.children);
        };
        const hasChildren = () => {
            return asyncList.filter((item) => item.children);
        };
        const asyncList = store.state.menu;
        const clickMenu = (item) => {
            router.push({
                name: item.name,
            });
            // vuex来管理
            store.commit('selectMenu', item);
        };
        return {
            noChildren,
            hasChildren,
            clickMenu
        }
    }
}
</script>

<style lang="less" scoped>
.icons{
    width: 18px;
    height: 18px;
}
.el-menu{
    border-right:none;
    h3 {
        line-height:48px;
        color: #fff;
        text-align: center;
    }
}
</style>