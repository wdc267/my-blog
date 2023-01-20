<template>
  <div class="container">
    <div class="blog-content">
      <div style="border-bottom: 1px solid #ddd"><h1 style="margin: 0 5px">热门博客</h1></div>
      <div class="active-blog" v-for="blog in $store.state.bookList" :key="blog.id" :index="blog.index">
        <a class="blog-title" @click="toView(blog.id)">{{blog.title ? blog.title : '未命名'}}</a>
        <p class="desc" @click="toView(blog.id)">{{ blog.bookInfo[0].text ? blog.bookInfo[0].text : ''}}</p>
        <div class="blog-info">
          <div class="create-time">{{ blog.updateTime }}</div>
          <div class="writer">作者：<a>{{ blog.writer }}</a></div>
          <div class="tag-name">分类：<a>{{ blog.tag ? blog.tag : '未分类' }}</a></div>
        </div>
      </div>
    </div>
    <div class="blog-column">
      <div style="border-bottom: 1px solid #ddd">
        <h1 style="margin: 0 5px">分类博客</h1>
      </div>
      <P>python<span>0篇</span></P>
      <P>vue<span>0篇</span></P>
      <P>java<span>0篇</span></P>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
const store = useStore();
const router = useRouter();
const toView = (blogId) => {
  let index = (store.state.bookList || []).findIndex((item) => item.id === blogId);
  router.push({
    name: 'view', query: { index: index }
  })
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  .blog-content {
    flex-grow: 7;
    background-color: #fff;
    padding: 10px;

    .active-blog {
      width: 100%;
      height: 101px;
      border-bottom: 1px solid #ddd;
      padding: 12px 5px;

      a.blog-title {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #409EFF;
        line-height: 25px;
      }

      p.desc {
        width: 95%;
        font-size: 14px;
        font-weight: 400;
        // 不换行
        white-space: nowrap;
        //超出宽度显示省略号
        text-overflow: ellipsis;
        overflow: hidden;
        color: #555666;
      }

      .blog-info {
        display: flex;
        color: #5f6471;
        margin-top: 10px;
        font-size: 12px;
        align-items: center;

        .writer,.tag-name {
          margin-left: 10px;

          a {
            color: #409EFF;
          }
        }
      }
    }
  }
  .blog-column {
    display: fixed;
    height: 800px;
    flex-grow: 3;
    background-color: #fff;
    padding: 10px;
    margin-left: 10px;
    p{
      span{
        font-size: 10px;
        color:#5f6471;
        float: right;
      }
    }
  }

}
</style>