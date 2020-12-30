<template>
  <div>
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import { getHomeMultiData } from "network/home.js";
import HomeSwiper from "content/HomeSwiper.vue";

export default {
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // async created() {
    // 1、请求多个数据
    getHomeMultiData().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    // const res = await getHomeMultiData()
    // this.result = res
    // console.log(this.result)
  },
  methods: {},
};
</script>

<style>
</style>