<template>
  <div>
    <div>
      <h2>400</h2>
      <p>
        抱歉！您访问的页面
        <em>失联</em>啦 ...
      </p>
      <el-button @click="$router.go(-1)">返回上一页</el-button>
      <el-button type="primary" @click="$router.push({ name: 'home' })">进入首页</el-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>