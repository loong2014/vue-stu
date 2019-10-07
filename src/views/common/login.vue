<template>
  <div>
    <div class="login-main">
      <h3>管理员登录</h3>

      <el-form
        :model="dataForm"
        ref="dataForm"
        :rules="dataRule"
        @keyup.enter.native="dataFormSubmit()"
      >
        <el-form-item prop="userName">
          <el-input v-model="dataForm.userName" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="dataForm.password" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="dataFormSubmit()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        userName: "",
        password: "",
        uuid: "",
        captcha: ""
      },
      dataRule: {
        userName: [
          { required: true, message: "帐号不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.$axios
            .fetchPost("/sys/login", {
              username: this.dataForm.userName,
              password: this.dataForm.password
            })
            .then(({ data }) => {
              if (data && data.code === 0) {
                this.$store.commit('user/updateName', this.dataForm.userName)
                this.$router.replace({ name: "main" });
              } else {
                // this.$message.error(data.msg);
              }
            });
        }
      });
    }
  }
};
</script>


<style >
.login-main {
  width: 400px;
}
</style>