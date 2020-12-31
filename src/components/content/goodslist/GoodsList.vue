<template>
  <div class="goods-list">
    <slot></slot>
  </div>
</template>

<script>


export default {

}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; 
}
</style>