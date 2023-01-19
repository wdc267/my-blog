<template>
  <div class="register-body">
    <div class="register-panel">
        <div class="register-title">注册账号</div>
        <el-form label-position="right" label-width="80px" :model="registerData" :rules="rules" ref="registerDataRef">
            <el-form-item prop="id" label="用户名" required>
                <el-input placeholder="Please input your username" v-model="registerData.id">
                </el-input>
            </el-form-item>
            <el-form-item prop="email" label="电子邮件" required>
                <el-input placeholder="Please input your email" v-model="registerData.email"></el-input>
            </el-form-item>
            <el-form-item prop="nickname" label="昵称">
                <el-input placeholder="Please input your nick name" v-model="registerData.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="registerData.sex">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="telephone" label="手机号">
                <el-input placeholder="Please input your telephone number" v-model="registerData.telephone"></el-input>
            </el-form-item>
            <el-form-item prop="address" label="地址">
                <el-input placeholder="Please input your address" v-model="registerData.address"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码" required>
                <el-input type="password" placeholder="Please input your password" v-model="registerData.password">
                </el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword" label="确认密码" required>
                <el-input type="password" placeholder="Please input your password again" v-model="registerData.confirmPassword">
                </el-input>
            </el-form-item>
        </el-form>
        <el-form-item>
            <el-button type="primary" :style="{width:'100%'}" @click="register">注册</el-button>
        </el-form-item>
        <router-link to="/login"><a class="to-register">去登录账号</a></router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from "vue";
import { ElMessage } from 'element-plus'
import axios from 'axios'

const registerDataRef = ref(null);
const registerData = reactive({
    id: '',
    email: '',
    name: '',
    sex: '',
    telephone: '',
    address: '',
    password: '',
    confirmPassword: '',
});
const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (registerData.confirmPassword !== '') {
            if (!registerDataRef.value) return
            registerDataRef.value.validateField('confirmPassword', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else if (value !== registerData.password) {
        callback(new Error("Two inputs don't match!"))
    } else {
        callback()
    }
}
const rules = reactive({
    id: [{ required: true, message: 'Please input username' }],
    password: [{ validator: validatePass, trigger: 'blur' }],
    email: [{required: true, message: 'Please input your email'}],
    confirmPassword: [{ validator: validatePass2, trigger:'blur' }]
})
const { proxy } = getCurrentInstance();
const register = () => {
    registerDataRef.value.validate( async(valid) => {
        if (!valid) {
            return;
        } else {
            let { confirmPassword,...userInfo} =registerData
            await proxy.$api.addUser(userInfo)
                .then((res) => {
                    ElMessage({
                        message: '恭喜你注册成功',
                        type: 'success',
                    })
                    proxy.$refs.registerDataRef.resetFields();
                    console.log(res);
                }).catch((error) => {
                    ElMessage({
                        message: '注册失败',
                        type: 'warning',
                    })
                    console.log(error);
                })
        }
    });
}
</script>

<style lang="less">
.register-body {
    width: 100%;
    height: calc(100vh);
    background: url(../assets/login_bg.jpg) no-repeat center;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 解决外边距塌陷 */
    overflow: hidden;
}
.register-panel {
    width: 350px;
    height: 550px;
    margin: 100px auto;
    background-color: rgba(22, 23, 29, 0.7);
    border-radius: 10px;
    box-shadow: 0 0 25px #cac6c6;
    padding: 25px;
    .el-form-item__label {
            color: #fff;
        }
    .el-radio {
        color: #fff;
    }
}

.register-title {
    font-size: 19px;
    color: rgba(255, 255, 255);
    text-align: center;
    margin-bottom: 20px;
}

.to-register{
    color: white;
    font-size: 10px;
    float: right;
}
</style>