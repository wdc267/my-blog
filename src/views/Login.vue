<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">登录账号</div>
      <el-form :model="loginData"
               :rules="rules"
               ref="loginDataRef">
        <el-form-item prop="username">
          <el-input placeholder="Please input your user name" v-model="loginData.username">
            <template #prefix>
              <span class="iconfont icon-Account"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="Please input password" v-model="loginData.password" show-password>
            <template #prefix>
              <span class="iconfont icon-password"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginData.rememberMe" :style="{ color: 'white' }">记住我</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :style="{width:'100%'}" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
      <router-link to="/register"><a class="to-register">注册账号</a></router-link>
    </div>
  </div>
</template>

<script>
import { reactive, ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const loginDataRef = ref(null);
    const loginData = reactive({
      username: 'admin',
      password: 'admin',
    });
    const rules = reactive({
      username: [{ required: true, message: 'Please input your user name' }],
      password: [{ required: true, message: 'Please input password' }]
    })
    // const login = () => {
    //   loginDataRef.value.validate((valid) => {
    //     if (!valid) {
    //       return;
    //     }
    //   });
    // }
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const router = useRouter();
    const login = async() => {
      const res = await proxy.$api.getMenu(loginData);
      store.commit('setMenu', res.menu);
      store.commit('addMenu', router);
      store.commit('setToken', res.token);
      router.push({
        name: "home"
      });
    }
    return {
      loginDataRef,
      loginData,
      rules,
      login
    }   
  }
}
</script>

<style lang="less" scoped>
.login-body {
  width:100%;
  height: calc(100vh);
  background: url(../assets/login_bg.jpg) no-repeat center;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 解决外边距塌陷 */
  overflow: hidden;
}
.login-panel{
  width: 350px;
  height: 300px;
  margin: 200px auto;
  background-color: rgba(22, 23, 29, 0.7);
  border-radius: 10px;
  box-shadow: 0 0 25px #cac6c6;
  padding: 20px;
}
.login-title {
  font-size: 19px;
  color: rgba(255, 255, 255);
  text-align: center;
  margin-bottom: 20px;
}
.to-register {
  color: white;
  font-size: 10px;
  float: right;
}
</style>