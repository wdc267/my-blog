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

<script setup>
import { reactive, ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ElMessage} from 'element-plus'
const { proxy } = getCurrentInstance();
const store = useStore();
const router = useRouter();
const loginDataRef = ref(null);
const loginData = reactive({
      username: 'wdc',
      password: '123456w',
    });
const rules = reactive({
      username: [{ required: true, message: 'Please input your user name' }],
      password: [{ required: true, message: 'Please input password' }]
    })
const login = () => {
  loginDataRef.value.validate( async(valid) => {
    // 进行表单校验，若为空则返回
    if (!valid) {
      return;
    } else {
      // 发送get请求，验证username和password是否对应匹配
      let username = loginData.username
      // 发送get请求，验证username和password是否对应匹配
      await proxy.$api.getUserData(username)
        .then((res) => {
          if (res.data.password == loginData.password) {
            let {password,...userInfo} = res.data
            store.commit("setUserInfo", userInfo);
            router.push({
              name: "home"
            });
          } else {
            // console.log(res); 
            ElMessage({
              message: '登录失败，请检查密码是否正确',
              type: 'warning',
            })
          }
        })
    await proxy.$api.getBookInfo(username)
      .then((res) => {
        store.commit("setBook", res.data.bookList);
        })
        .catch((error) => {
          console.log(error);
      });
    }
  });
}
</script>

<style lang="less" scoped>
.login-body {
  width:100%;
  height: calc(100vh);
  background: url(https://s1.ax1x.com/2023/01/20/pSGuuMq.jpg) no-repeat center;
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