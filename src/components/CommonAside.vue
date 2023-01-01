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
            <el-menu-item 
            :index="item.path" 
            v-for="item in noChildren()"
            :key="item.path"
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
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.
                    children" :key="subIndex"
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
export default {
    setup() {
        const list = [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'House',
                url: 'Home/Home'
            },
            {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon: 'video-play',
                url: 'MallManage/MallManage'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage'
            },
            {
                label: '其他',
                icon: 'location',
                path:'/other',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    }
                ]
            }
        ];
        const noChildren = () => {
            return list.filter((item) => !item.children);
        };
        const hasChildren = () => {
            return list.filter((item) => item.children);
        };
        return {
            noChildren,
            hasChildren
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
}
</style>