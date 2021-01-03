<template>
  <div class="detail-nav-bar">
    <nav-bar bgColor="#ffffff">
      <div slot="left" class="iconfont icon-left left-part" @click="leftClick"></div>
      <div slot="center" class="center-part">
        <div 
        class="title-item" 
        v-for="(item, index) in titles" 
        :key="index"
        @click="titleItemClick(index)"
        :class="{active: currentIndex === index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar"
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    leftClick() {
      this.$router.back()
    },
    titleItemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.left-part {
  color: var(--color-text);
  font-size: 24px;
}
.center-part {
  display: flex;
}
.title-item {
  flex: 1;
  color: var(--color-text);
}
.active {
  color: var(--color-tint);
}
</style>