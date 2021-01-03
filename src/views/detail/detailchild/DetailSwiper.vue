<template>
  <div class="detail-swiper">
    <swiper class="swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper"
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>