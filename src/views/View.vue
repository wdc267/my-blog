<template>
<CommonHeader />
<div class="blog-content">
    <h1>{{ $store.state.bookList[currentBook].title }}</h1>
    <div class="blog-info">
        <div v-for="cell in $store.state.bookList[currentBook].bookInfo">
            <div v-if="cell.ismarked" v-html="markdown(cell.text)"></div>
            <p v-else>{{ cell.text }}</p>
        </div>
    </div>
    <div class="create-info">
        作者：<span>{{ $store.state.bookList[currentBook].writer }}</span>
        创作时间：{{ $store.state.bookList[currentBook].createTime  }}
    </div>
</div>
</template>

<script setup>;
import CommonHeader from '../components/CommonHeader.vue';
import MarkdownIt from 'markdown-it';
import { useRoute } from 'vue-router';
const route = useRoute();
let currentBook = route.query.index;
const markdown = (text) => {
    let md = new MarkdownIt();
    let result = md.render(text);
    return result
}
</script>

<style lang="less" scoped>
.blog-content {
        margin: 10px auto;
        padding:5px 15px;
        width: 900px;
        min-height: 700px;
        background-color: #fff;
        h1 {
            border-bottom:1px solid #ddd;
            margin-bottom: 5px;
        }
        .blog-info {
            border-bottom: 1px solid #ddd;
            p {
                    margin: 0;
                    padding: 0;
                }
        }
        .create-info {
            display: inline-block;
            margin-right: 10px;

            span {
                margin-right: 10px;
            }
        }
    }
</style>