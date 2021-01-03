<template>
  <div>
    <swiper>
      <swiper-item 
      v-for="(item, index) in banners"
      :key="index">
        <!-- <a :href="item.link"> -->
          <img :src="item.image" alt="" @load="imageLoad" />
        <!-- </a> -->
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'common/swiper'


export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: function(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      // 状态isLoad保存着是否已经有加载完一张图片
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>

</style>