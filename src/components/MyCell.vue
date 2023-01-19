<template>
    <div class="bookList" 
    :class ="{ current: cell.iscurrent, focus: cell.isfocus}"
    @click="setCurrent(cell.index)">
        <el-input 
        type="textarea" 
        placeholder=""
        outline = "none" 
        resize = "none"
        v-model="cell.text" 
        @focus="setFocus(cell.index)" 
        @click.stop
        v-show="!cell.ismarked"
         :autosize="{ minRows: 2}">
        </el-input>
        <div v-show="cell.ismarked" v-html="markdown(cell.text)"></div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import MarkdownIt from 'markdown-it';
export default {
    name: 'MyCell',
    props: ['cell'], //父组件向子组件传递cell相应数据
    setup() {
        const store = useStore();
        const currentBook = store.state.currentBook;
        function setFocus (i) {
            store.state.bookList[currentBook].bookInfo.forEach(function (cell) {
                cell.isfocus = false
                cell.iscurrent = false
            })
            store.state.bookList[currentBook].bookInfo[i].isfocus = true
        }
        function setCurrent(i) {
            store.state.bookList[currentBook].bookInfo.forEach(function (cell) {
                cell.isfocus = false
                cell.iscurrent = false
            })
            store.state.bookList[currentBook].bookInfo[i].iscurrent = true
        }
        function markdown(text) {
            let md = new MarkdownIt();
            let result = md.render(text);
            return result
        }
        return {
            setFocus,
            setCurrent,
            markdown,
        }
    },
}
</script>

<style lang="less" scoped>
.bookList{
    width: 90%;
    margin: 20px auto;
    padding: 5px 25px;
    font-size: 20px;
    color: black;
    list-style: disc;
    border: 1px solid transparent;
    border-left: 5px solid transparent;
}
.current {
    border: 1px solid orange;
    border-left: 5px solid orange;
}
.focus {
    border: 1px solid #409eff;
    border-left: 5px solid #409eff;
}
</style>