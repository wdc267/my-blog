<template>
  <div class="container">
    <div class="blog-content">
      <div class="active-blog" v-for="blog in $store.state.bookList" :key="blog.id" :index="blog.index">
        <a class="blog-title" >{{blog.title}}</a>
        <p class="desc">{{ blog.bookInfo[0].text }}</p>
        <div class="blog-info">
          <div class="create-time">{{ blog.updateTime }}</div>
          <div class="writer">作者：<a>{{ blog.writer }}</a></div>
          <div class="tag-name">分类：<a>{{ blog.tag }}</a></div>
        </div>
        <div class="operate-blog">
          <a class="edit"><span>编辑</span></a>
          <a class="view"><span>浏览</span></a>
          <a class="delete"><span>删除</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .blog-content {
    width:100%;
    background-color: #fff;
    padding: 10px;
    .active-blog {
      width: 100%;
      height: 120px;
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
            .writer, .tag-name {
              margin-left: 10px;
              a {
                color: #409EFF;
              }
            }
      }
      .operate-blog {
        float: right;
        a {
          font-size: 14px;
          color: #000;
          padding-right:5px;
        }
      }
    }
  }
}
</style>