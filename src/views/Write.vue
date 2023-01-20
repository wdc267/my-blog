<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <CommonHeader />
            </el-header>
            <el-container>
                <el-aside v-model:width= slideWidth>
                    <LeftSlideBar @handleWidth="handleWidth"/>
                </el-aside>
                <el-main>
                    <Menubar />       
                    <div id="content">
                        <el-input 
                        v-model="$store.state.bookList[$store.getters.nowBook].title"
                        resize = "none" 
                        class = "blog-title"
                        autosize type="textarea" 
                        placeholder="请输入文章的标题" />
                        <MyCell 
                        style="text-align: left"
                        v-for="cell in $store.state.bookList[$store.getters.nowBook].bookInfo" 
                        :key="cell.id" 
                        :index="cell.index" 
                        :cell="cell" />
                    </div>
            </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import MyCell from '../components/MyCell.vue'
import Menubar from '../components/Menubar.vue';
import CommonHeader from '../components/CommonHeader.vue';
import LeftSlideBar from '../components/LeftSlideBar.vue';
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from 'vuex';
const store = useStore();
// 控制折叠宽度
let slideWidth = ref(55 + 'px');
let handleWidth = (value) => {
    slideWidth.value = value;
}
// 当前笔记
let currentBook = store.getters.nowBook;
const handleUp = (event) => {
    if (event.key === 'ArrowUp')
        for (let i = 1; i < store.state.bookList[currentBook].bookInfo.length; i++) {
            if (store.state.bookList[currentBook].bookInfo[i].iscurrent === true) {
                store.state.bookList[currentBook].bookInfo[i].iscurrent = false;
                store.state.bookList[currentBook].bookInfo[i - 1].iscurrent = true;
                break;
            }
        }
    else if (event.key === 'ArrowDown')
        for (let i = 0; i < store.state.bookList[currentBook].bookInfo.length - 1; i++) {
            if (store.state.bookList[currentBook].bookInfo[i].iscurrent === true) {
                store.state.bookList[currentBook].bookInfo[i].iscurrent = false;
                store.state.bookList[currentBook].bookInfo[i + 1].iscurrent = true;
                break;
            }
        }
    else if (event.key === 'm') {
        for (let i = 0; i < store.state.bookList[currentBook].bookInfo.length; i++) {
            if (store.state.bookList[currentBook].bookInfo[i].iscurrent === true) {
                store.state.bookList[currentBook].bookInfo[i].ismarked = !store.state.bookList[currentBook].bookInfo[i].ismarked;
                break;
            }
        }
    }
}
onMounted(() => {
    document.addEventListener('keyup', handleUp)
})
onUnmounted(() => {
    document.removeEventListener('keyup', handleUp)
})
</script>

<style lang="less" scoped>
.el-container {
    height: 100%;
}
.common-layout {
    height: 100%;
    .el-header{
        padding: 0;
        margin: 0;
    }
}

#content {
    margin-top: 20px;
    background-color: #ffffff;
    padding: 10px 0;
    text-align:center;
    .blog-title {
        width: 87% !important;
        font-size: 15px;
        outline: none !important;
    }
}
</style>