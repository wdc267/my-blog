<template>
    <router-view/>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore();
store.commit("addBookList");
store.commit("addUserInfo");
</script>

<style>
#app {
    height: 100%;
}
</style>
