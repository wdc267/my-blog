<template>
  <el-col :span="24">
    <el-card shadow="hover" style="margin-top:20px" height="450px">
      <el-table :data="tableData">
        <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
        </el-table-column>
      </el-table>
    </el-card>
  </el-col>
</template>

<script setup>
import { ref } from 'vue';
let tableData = ref([]);
const tableLabel = {
  name: '博客名称',
  createDate: '创建日期',
  updateDate: '更新日期',
  writer: '作者名',
}
</script>

<style>
</style>