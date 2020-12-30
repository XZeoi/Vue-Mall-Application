<template>
  <div id="tab-bar">
    <div class="tan-bar-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tan-bar-container{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
}
</style>