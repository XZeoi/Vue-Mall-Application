<template>
  <div class="nav-bar" :style="backgroundColor">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#ff8198'
    }
  },
  computed: {
    backgroundColor() {
      return {backgroundColor: this.bgColor}
    }
  }
}
</script>

<style scoped>
.nav-bar {
  position: relative;
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  width: 100%;
  z-index: 10;
  color: #fff;
  font-size: 16px;
}

.nav-left, .nav-right{
  width: 60px;
}

.nav-center {
  flex: 1
}
</style>