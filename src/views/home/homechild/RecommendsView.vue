<template>
  <div class="recommends-view">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends-view {
  display: flex;
  overflow: hidden;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 15px 0;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  width: 100%;
  
}
.recommend-item img {
  width: 65px;
  margin-bottom: 10px;
}

</style>