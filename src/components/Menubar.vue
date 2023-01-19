<template>
    <div id="menubar" class="w">
        <div class="dropdown">
            <a href="#/write">File</a>
            <div class="dropdown-content">
                <a href="#/write">New Notebook</a>
                <a href="#/write">Open</a>
                <a href="#/write">Save</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#/write">Edit</a>
        </div>
        <div class="dropdown">
            <a href="#/write">View</a>
        </div>
        <div class="dropdown">
            <a href="#/write">Insert</a>
            <div class="dropdown-content">
                <a href="#/write" @click="addCell($store.getters.nowIndex-1)">Insert Cell Above</a>
                <a href="#/write" @click="addCell($store.getters.nowIndex)">Insert Cell Below</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#/write">Setting</a>
            <div class="dropdown-content">
                <a href="#/write">Switch the theme</a>
                <a href="#/write">font-size</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#/write">Help</a>
        </div>
    </div>
    <div id="maintoolbar">
        <el-row>
            <el-button icon="Plus" @click="addCell($store.getters.nowIndex)" plain />
            <el-button icon="Scissor" @click="delCell($store.getters.nowIndex)" plain />
            <el-button icon="Top" @click="moveUp($store.getters.nowIndex)" plain />
            <el-button icon="Bottom" @click="moveDown($store.getters.nowIndex)" plain />
            <el-button plain>保存</el-button>
            <el-button plain>提交</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'; 
import { nanoid } from 'nanoid'
const store = useStore();
const changeIndex = () => {
    store.state.bookList[currentBook].bookInfo.forEach(function (cell, index) {
        cell.index = index;
    });
}
let currentBook = store.state.currentBook;
// 添加一个cell网格
const addCell = (i) => {
    const cell = { id: nanoid(), index: -1, text: '', iscurrent: false, isfocus: false, ismarked: false }
    store.state.bookList[currentBook].bookInfo.splice(i + 1, 0, cell);
    changeIndex();
    // 判断是否只有一个元素，若是修改iscurrent为true
    if (store.state.bookList[currentBook].bookInfo.length == 1) {
        store.state.bookList[currentBook].bookInfo[0].iscurrent = true
    }
}
//  删除一个Cell网格
const delCell = (a) => {
    store.state.bookList[currentBook].bookInfo.splice(a, 1);
    changeIndex();
    // 当iscurrent为true的元素位于最底部时将该元素删除，将修改后位于最底部元素的iscurrent修改为true
    if (a == store.state.bookList[currentBook].bookInfo.length) {
        if (a - 1 >= 0)
            store.state.bookList[currentBook].bookInfo[a - 1].iscurrent = true;
    }
    // 当iscurrent为true的元素不位于最底部时将该元素删除，将修改前下一个元素的iscurrent修改为true
    else {
        store.state.bookList[currentBook].bookInfo[a].iscurrent = true;
    }
}
// 将Cell网格向上移
const moveUp = (a) => {
    if (a - 1 >= 0) {
        console.log(a - 1);
        store.state.bookList[currentBook].bookInfo.splice(a - 1, 0, store.state.bookList[currentBook].bookInfo[a])
        store.state.bookList[currentBook].bookInfo.splice(a + 1, 1)
    }
    changeIndex();
}

// 将Cell网格向下移
const moveDown = (a) => {
    if (a + 2 <= store.state.bookList[currentBook].bookInfo.length) {
        console.log(a + 2);
        store.state.bookList[currentBook].bookInfo.splice(a + 2, 0, store.state.bookList[currentBook].bookInfo[a]);
        store.state.bookList[currentBook].bookInfo.splice(a, 1)
        changeIndex();
    }
}
</script>

<style scoped>
#menubar {
        height: 40px;
        background-color: #f8f8f8;
        border: 1px solid #e7e7e7;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown a {
        padding: 10px;
        font-size: 14px;
        color: #565656;
        line-height: 40px;
    }
    .dropdown a:hover {
        color: #409eff
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
   .dropdown-content {
       display: none;
       position: absolute;
       background-color: #f9f9f9;
       min-width: 160px;
       box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
       z-index: 1;
   }
   .dropdown-content a {
       color: black;
       padding: 5px 5px;
       text-decoration: none;
       display: block;
   }
   .dropdown-content a:hover {
       background-color: #f1f1f1
   }
   #maintoolbar {
       margin-top: 5px;
       height: 25px;
   }

   #maintoolbar .btn-group {
       float: left;
       margin-right: 5px;
       height: 25px;
   }

   #maintoolbar .btn-group .btn {
       padding-left: 10px;
       padding-right: 10px;
       line-height: 25px;
       background-color: #ffffff;
       border: 1px solid #e7e7e7;
   }
</style>