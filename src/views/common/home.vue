<template>
  <div>
    <div>
      <h3>主页面</h3>

      <h2>{{loginName}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  computed: {
    loginName: {
      get() {
        return this.$store.state.user.name;
      }
    }
  },
  methods: {}
};
</script>
